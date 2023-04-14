import React, {
  useState
}
  from 'react';
import {
  Link,
  useNavigate,
} from 'react-router-dom';
const RegisterUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState(''); //Kollat om upprepa lösenord skrivits in
  const [passwordMatch, setPasswordMatch] = useState(true); //Kollar om lösenord och upprepa lösenord matchar
  const [usernameTaken, setUsernameTaken] = useState(false); //Kollar om användarnamn är upptaget mot databasen
  //Kollar om användaren har registrerats, då loggas användaren in och dirigeras om till sin användarprofil.
  const navigate = useNavigate();
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    checkUsernameChange(event.target.value);
  };
  const checkUsernameChange = async (username) => {
    try {
      const response = await fetch('http://localhost:8000/api/checkIfUsernameExists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();

      if (data.exists) {
        setUsernameTaken(true);
      } else {
        setUsernameTaken(false);
      }
    } catch (error) {
      console.error('Error checking username:', error);
    }
  };
  const loginUser = async (username, password) => {
    await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username,
        password,
      }),
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === repeatPassword) {
      setPasswordMatch(true);
      const response = await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        await loginUser(username, password);
        navigate('/userprofile');
      }
    } else {
      setPasswordMatch(false);
    }
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handlePasswordChangeRepeat = (event) => {
    setRepeatPassword(event.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className='mx-1 mx-md-0'>
        <section className='vh-100' style={{ backgroundColor: '#eee' }}> {/* Grå Bakgrund -100 på Höjd */}
          <div className='container h-100'> {/* Vit Bakgrund Position + -100 på Höjd */}
            <div className='row d-flex justify-content-center align-items-center h-100'> {/* Vit Bakgrund Center + -100 på Höjd */}
              <div className="col-lg-12 col-xl-11"> {/* Vit Bakgrund Bredd */}
                <div className="card text-black" style={{ borderRadius: '25px' }}>
                  <div className="card-body p-md-5"> {/* Vit Bakgrund Skala? */}
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"> {/* Vit Bakgrund Öka Höjd på Y-Axel */}
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrering</p>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-floating flex-fill mb-2">
                            <input
                              type='text'
                              id='form3Example1c'
                              className='form-control'
                              required
                              onChange={handleUsernameChange}
                              onInvalid={(event) => event.target.setCustomValidity('Skriv in ett användarnamn')}
                              onInput={(event) => event.target.setCustomValidity('')}
                            />
                            <label className='form-label' htmlFor='form3Example1c'>Användarnamn</label>
                            {usernameTaken && <p style={{ color: 'red' }}>Användarnamnet är upptaget</p>}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-floating flex-fill mb-2">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              required
                              onChange={handlePasswordChange}
                              onInvalid={(event) => event.target.setCustomValidity('Skriv in ett lösenord')}
                              onInput={(event) => event.target.setCustomValidity('')}
                            />
                            <label className="form-label" htmlFor="form3Example4c">Lösenord</label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-floating flex-fill mb-2">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              required
                              onChange={handlePasswordChangeRepeat}
                              onInvalid={(event) => event.target.setCustomValidity('Repetera Lösenordet')}
                              onInput={(event) => event.target.setCustomValidity('')}
                            />
                            <label className="form-label" htmlFor="form3Example4cd">Repetera Lösenord</label>
                            {!passwordMatch && <p style={{ color: 'red' }}>Lösenorden matchar inte</p>}
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Registrera</button>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <Link to="/">
                            <button type="button" className="btn btn-secondary btn-lg">Avbryt</button>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid" alt="Sample">
                        </img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};
export default RegisterUser;