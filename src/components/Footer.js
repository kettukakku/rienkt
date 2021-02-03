import React from 'react';
import ContactForm from './ContactForm';
export default function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <ContactForm />
        <section>
          <h2>Follow</h2>
          <ul className="icons">
          <li><a href="https://www.instagram.com/rienkt/" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
          <li><a href="https://github.com/kettukakku/rienkt" class="icon brands style2 fa-github"><span class="label">Github</span></a></li>
          <li><a href="https://twitter.com/RienTau" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li>
          <li><a href="https://www.twitch.tv/rienkt" class="icon brands style2 fa-twitch"><span class="label">Twitch</span></a></li>
          </ul>
        </section>
        <ul className="copyright">
          <li>&copy; Rien K-T. All rights reserved</li>
          <li>
            Build: <a href="https://www.gatsbyjs.com/">Gatsby</a>
          </li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
          <li>
            Images: <a href="https://unsplash.com/">Unsplash</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
