import React, {
    useEffect,
    useState,
    createRef
}
    from 'react';
import {
    useNavigate
}
    from 'react-router-dom';
import {
    CSSTransition
}
    from 'react-transition-group';
import '../css/fade.css';
const Logout = () => {
    const [countdown, setCountdown] = useState(3);
    const [inProp, setInProp] = useState(false);
    const navigate = useNavigate();
    const contentRef = createRef();

    useEffect(() => {
        setInProp(true);
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(interval);
            setInProp(false);
            // Tidsfördröjning av utloggningsmeddelandet
        }, 3000);

        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <CSSTransition
            in={inProp}
            timeout={500}
            classNames="fade"
            appear
            nodeRef={contentRef}
            onExited={() => {
                // Navigerar till login efter att fade-out cykeln är avklarad.
                navigate("/");
            }}
        >
            <section ref={contentRef} className='profile-section'>
                <div className='container h-100'>
                    <div className='row d-flex justify-content-center align-items-center h-100'>
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black profile-canvas" style={{ borderRadius: '25px' }}>
                                <div className="card-body p-md-5 d-flex justify-content-center align-items-center" style={{ minHeight: '750px' }}>
                                    <p className="mb-0" style={{ fontSize: '24px', fontWeight: 'bold' }}>Du loggas nu ut om {countdown}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </CSSTransition>
    );
};

export default Logout;