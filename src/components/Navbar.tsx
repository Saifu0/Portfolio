import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div style={{ marginTop : 20 }}>
            <nav className="navbar navbar-expand">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="blog-is-not-done-yet" style={{pointerEvents : "none", color : "gray"}}>Blog</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://github.com/Saifu0" target="blank">Github</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://www.linkedin.com/in/saifur-rehman-khan-5770a9172/" target="blank">LinkedIn</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://codeforces.com/profile/.Pain." target="blank">CodeForces</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="https://www.codechef.com/users/saifu0" target="blank">CodeChef</a>
                        </li>
                    </ul>
                </div>https://www.codechef.com/users/saifu0
            </nav>
        </div>
    )
}

export default Navbar
