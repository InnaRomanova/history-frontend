import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <footer className="footer">
            <h5 className="footer__title">© 2021 Copyright. All rights reserved.</h5>
            <a
          href="https://febatigr.com/content/shared/html/policy_en.html"
          className="footer__link">
         Privacy policy 
        </a>
        <a
          href="http://ac-feedback.com/report_form/"
          className="footer__link"
          target="_blank"
          rel="noreferrer">
          Report
        </a>
        </footer>
    )
}

export default Footer;