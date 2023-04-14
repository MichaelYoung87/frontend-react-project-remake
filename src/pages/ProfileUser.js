import React, {
    useEffect,
    useState
}
    from 'react';
import {
    useNavigate
}
    from 'react-router-dom'
import '../css/custom.css';
const ProfileUser = () => {
    const [username, setUsername] = useState(''); //const som använder sig av useState för att koppla API med username, där username med dess content eller objekt kan kopplas ihop och användas.
    const [profilePicture, setProfilePicture] = useState(''); //const som använder sig av useState för att koppla API med profilePicture, SetProfilePicture sedan kopplas ihop med content.image_url.
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://localhost:8000/api/user', {
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          });
          if (response.status === 401) {  //fusklösning på om man försöker använda http://localhost:8000/userprofile i webbrowsern så får man reponse.status === 401 och skickas tillbaka till loginsidan
            navigate('/');
          } else {
            const content = await response.json();
            setUsername(content.username); //hämtar ut användaren som är inloggad.
            setProfilePicture(content.image_url); //hämtar ut bild URL som ligger lagrad i databasen för användaren som är inloggad.
          }
        }
        fetchData();
      }, [navigate]);
    const handleLogout = async () => {
        // API anrop för logout, och kräver att det inkluderas cookie i browsern.
        try {
            const response = await fetch('http://localhost:8000/api/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });
            if (response.ok) {
                // Om man lyckas logga ut skickas man till logout sida.
                navigate('/logout');
            } else {
                // Skickar ut felmeddelande om något inte fungerar vid utloggningen.
                console.error('Error logging out:', response.statusText);
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('profilePicture', file);

        try {
            // API anrop för att ladda upp profilbilden.
            const response = await fetch('http://localhost:8000/api/uploadProfilePicture', {
                method: 'POST',
                headers: { 'Accept': 'multipart/form-data' },
                credentials: 'include',
                body: formData,
            });
            if (response.ok) {
                console.log('Profile picture uploaded successfully');
                // API anrop för att hämta user content.
                const userResponse = await fetch('http://localhost:8000/api/user', {
                    method: 'GET',
                    credentials: 'include',
                });
                const content = await userResponse.json();
                setUsername(content.username);  //hämtar ut användaren som är inloggad.
                setProfilePicture(content.image_url); //hämtar ut bild URL som ligger lagrad i databasen för användaren som är inloggad.
            } else {
                console.error('Error uploading profile picture:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading profile picture:', error);
        }
    };
    return (
        <section className='profile-section'>
            <div className='container h-100'>
                <div className='row d-flex justify-content-center align-items-center h-100'>
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="card-body p-md-5">
                                <form method="post">
                                    <div className="container emp-profile"></div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="profile-img">
                                            <img src={profilePicture || require("../images/gladiator_rooster.jpg")} alt="" /> {/* Försöker hämta ut profilbild för inloggad användare eller så använder den sig av default profilbild. */} 


                                                <div className="file btn btn-lg btn-primary">
                                                    Byt profilfoto
                                                    <input type='file' name='profilePicture' onChange={handleImageUpload} /> {/* Kallar på handleImageUpload vid ändring. */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="profile-head">
                                                <h5>
                                                    {username ? 'Hej ' + username : 'Du är inte inloggad'}  {/* Kollar så att användaren är autentiserad/inloggad och skriver sedan Hej följt av username på användaren. */}
                                                </h5>
                                                <h6>
                                                    Kundservice
                                                </h6>

                                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Mina kunder</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Ny kund</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <input type="button" className="profile-logout-btn" name="btnAddMore" value="Logout" onClick={handleLogout} />
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-8 offset-md-4">
                                            <div className="tab-content profile-tab" id="myTabContent">
                                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label>User Id</label>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>Test ID:</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label>Namn:</label>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>Exempel Namn</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label>E-mail:</label>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>exempel@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label>Telefon:</label>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>123 - 456 7890</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <label>Yrke:</label>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <p>Support Agent</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Erfarenhet</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Novis</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Totala Projekt:</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>10</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Totala kunder:</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>230</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Språk:</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>Svenska, Engelska</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label>Arbetat i:</label>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>6 månader</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <label>Övrig information:</label><br />
                                                            <p>Detaljer... test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default ProfileUser;