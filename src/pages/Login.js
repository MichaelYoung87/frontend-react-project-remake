import React, {
  useState
} 
  from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBBtn
}
  from 'mdb-react-ui-kit';
import {
  Link,
  useNavigate
}
  from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username,
        password,
      }),
    });
    if (response.ok) {
      navigate('/userprofile');
    } else {
      // Visa felmeddelande om man skrivit in fel uppgifter
      alert('Fel inloggningsuppgifter. Försök igen.');
    }
  };
    return (
      <form onSubmit={handleSubmit} className='mx-1 mx-md-0'>
        <section className='vh-100' style={{ backgroundColor: '#eee' }}>
          <div className='container h-100'>
            <div className='row d-flex justify-content-center align-items-center h-100'>
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: '25px' }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Användarnamn"
                          id="form1"
                          type="username"
                          value={username}
                          onChange={handleUsernameChange}
                        />
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Lösenord"
                          id="form2"
                          type="password"
                          value={password}
                          onChange={handlePasswordChange}
                        />
                        {/* ... */}
                        <MDBBtn className="mb-4" type="submit">
                          Logga in
                        </MDBBtn>
                        <div className='text-center'>
                          <p>
                            Har du inget konto? <Link to='/register'>Registrera</Link> dig här.
                          </p>
                        </div>
                      </MDBContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    );
  }
  export default Login