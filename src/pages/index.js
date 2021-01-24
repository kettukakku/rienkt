import React from 'react';

import Layout from '../components/Layout';
import SEO from "../components/Seo"

import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';
import pic5 from '../assets/images/05.jpg';
import pic6 from '../assets/images/06.jpg';
import pic7 from '../assets/images/07.jpg';
import pic8 from '../assets/images/08.jpg';
import pic9 from '../assets/images/09.jpg';
import pic10 from '../assets/images/10.jpg';
import pic11 from '../assets/images/11.jpg';
import pic12 from '../assets/images/12.jpg';

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
            <Link to="/Generic">
              <h2>Stonefeast</h2>
              <div className="content">
                <p>
                  This is just a formatting test. I ain't actually going to use Stonefeast on the finished site.
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic2} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Lorem</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic3} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Feugiat</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic4} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Tempus</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic5} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Aliquam</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic6} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Veroeros</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style2">
            <span className="image">
              <img src={pic7} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Ipsum</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style3">
            <span className="image">
              <img src={pic8} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Dolor</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style1">
            <span className="image">
              <img src={pic9} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Nullam</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style5">
            <span className="image">
              <img src={pic10} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Ultricies</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style6">
            <span className="image">
              <img src={pic11} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Dictum</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </Link>
          </article>
          <article className="style4">
            <span className="image">
              <img src={pic12} alt="" />
            </span>
            <Link to="/Generic">
              <h2>Pretium</h2>
              <div className="content">
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
