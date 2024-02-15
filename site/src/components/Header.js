import React from 'react';

const Header = () => {
    const [mobile, setMobile] = React.useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container contain-div">
            <a className="navbar-brand" href="/">
                <img src={require("./logo.png")} alt="Purpose Engineering Logo" width="200" height="50"/>
            </a>
            <div className="navbar-links">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/services">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="/contact">Contact Me</a>
                    </li>
                </ul>
            </div>
            <button className="fold-btn" onClick={() => setMobile(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            {mobile ? (
                <div className="mobile-menu on">
                    <li class="nav-item">
                        <a class="nav-link active" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/contact">Contact Us</a>
                    </li>
                    <button className="menu-up-btn" onClick={() => setMobile(false)}>
                        <svg style={{marginTop: "5px", color: "#8C6F7B"}} href="http://www.w3.org/2000/svg" width="45" height="32" fill="currentColor" class="bi bi-arrow-bar-up" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </button>
                </div>
            ):(
                null
            )}
        </div>
    </nav>
    );
}

export default Header;