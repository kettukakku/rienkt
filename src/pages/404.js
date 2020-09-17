import React from 'react';

import Layout from '../components/Layout';
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
  <SEO title= "404 Error" />
    <div id="main">
      <div className="inner">
        <header className="major">
          <h2>NOT FOUND</h2>
        </header>
        <section>
          <h4>Not a valid URL</h4>
        </section>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
