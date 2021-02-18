import React from 'react';

import Layout from '../components/Layout';
import SEO from "../components/Seo"

import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';

import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <SEO title ="Home" />
    <div id="main">
      <div className="inner">
        <header>
          <h1>
            Words have the power to move us.
          </h1>
        </header>
        <section className="tiles">
          <article className="style1">
            <span className="image">
              <img src={pic1} alt="" />
            </span>
            <Link to="/Stonefeast">
              <h2>Stonefeast</h2>
              <div className="content">
                <p>
                A steampunk retelling of ‘Pojken som åt ikapp med trollet’.
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/2am">
              <h2>2 A.M. Visitor</h2>
              <div className="content">
                <p>
                A woman hears a knock in the middle of the night. What greets her brings both joy and pain.
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/BesidetheWaves">
              <h2>Beside the Waves</h2>
              <div className="content">
                <p>
                With only a message in a bottle to provide hope, two girls battle a world in ruin.
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/Signs">
              <h2>Signs in the Sky</h2>
              <div className="content">
                <p>
                Horoscopes are taken as gospel, but one man defies what the stars fortell.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/Lands">
              <h2>Lands Above and Below</h2>
              <div className="content">
                <p>
                The Gods bring more grief than glory; it's up to the people to stand above.
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/Transference">
              <h2>Transference</h2>
              <div className="content">
                <p>
                Cybernetic visitors from the stars beyond come not bearing their own faith but to learn the ways of the Wikreet.
                </p>
              </div>
            </Link>
          </article>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
