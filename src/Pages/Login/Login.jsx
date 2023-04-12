import config from "../../config.json";
import { useRef, useState, useEffect, useContext } from 'react';
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const LOGIN_URL = `${config.apiUrl}/users`;
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setUser("");
            setPwd("");
            setSuccess(true);
          } catch (err) {
            if (!err?.response) {
              setErrMsg("Login Failed");
            }
            errRef.current.focus();
          }
        };

        return (
            <>
                {success ? (
                <div className="post__wrapper">
                <div className="container">
                        <h1>You are logged in!</h1>
                        <br />
                        <p className="goto">
                            <a className="line" onClick={()=>navigate("/Posts")}>Go to Home</a>
                        </p>
                    </div>
                </div>
                ) : (
                    <div className="login_wrapper">
                        <div className="containe">

                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                                />
    
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                                />
                            <button>Sign In</button>
                        </form>
                        <p>
                            Need an Account?
                            <span className="line">
                                {/*put router link here*/}
                                <a className="goto" onClick={()=>navigate("/Register")}>Sign Up</a>
                            </span>
                        </p>
                </div>
                </div>
                )}
            </>
        )
    }
    
    export default Login;
    