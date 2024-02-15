import React from 'react';

const Contact = () => {
    return (
        <div>
        <div class="top-header-box">
        <div class="header-text-contact">
            <h1>Get in Touch?</h1>
            <h4>Want to contact me? Send a message or call! Here is how...</h4>
        </div>
        <img class="contacting-img" src="https://res.cloudinary.com/dqaxkucbu/image/upload/v1707967880/Purpose-WebDev/contact-page-img_yg7fzr.png" alt="contact pic"/>
    </div>

    <div class="cbc">
        
        <div class="info-con">
            <div class="contact-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                <h4>Call or Text</h4>
                <h6>
                    How to contact by SMS? Call or Text <a href="tel://+15152006381">(515)-200-6381</a> to start website development today!
                </h6>
            </div>
        </div>

        <div class="info-con">
            <div class="contact-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
                    <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>
                <h4>Email or Message</h4>
                <h6>
                    Prefer to email? Send one to <a href="https://mailto:isaacrj.mk@gmail.com">isaacrj.mk@gmail.com</a> to get your site up and running!
                </h6>
            </div>
        </div>

    </div>
        </div>
    );
}

export default Contact;