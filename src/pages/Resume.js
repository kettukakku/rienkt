import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/01.jpg';
import pic2 from '../assets/images/02.jpg';
import pic3 from '../assets/images/03.jpg';
import pic4 from '../assets/images/04.jpg';

import SEO from "../components/Seo"
import { Link } from 'gatsby';

const ResumePage = () => (
  <Layout>
	<SEO title ="Resume" description="Darien Aris Kirst — Freelance Writer & Illustrator" />
	<div id="main">
		<div className="inner">
		<span className="image left"><img src={pic1} alt="" /></span>
		<div className="resumeTitle">
		<h1>Darien Aris Kirst</h1><h2>Freelance Writer & Illustrator</h2>
		</div> 
		<div className="resumeAbout">
		<p>I was born in Vallejo, California, lived for several years in Luleå, Sweden, and am now residing outside of Philadelphia, Pennsylvania. Growing up, my passions were music and film which lead to my degree in Video Production. While living in a new country and working with a branding team, I came to learn so much more about myself and the world around me. The ability to paint stories whether through words or drawings is what motivates me to keep improving myself.</p>
		</div>
		<br/><br/>
		<h3>Experience</h3>
		<Link to="https://tromb.com/">MNMT Crew (acquired by Tromb) — Assistant / Organisor</Link>
		<ul>
			<li>Billing and invoicing</li>
			<li>Graphic design</li>
			<li>Copytext and proofreading</li>
		</ul>

		<Link to="https://wanderlustsaga.com/">Wanderlust Studio — Writer</Link>
		<ul>
			<li>Novel outlining and writing</li>
			<li>Character design</li>
		</ul>
		<h3>Education</h3>
		<Link to="https://ccts.org/">Camden County Technical School — Video Production</Link>
		<ul>
			<li>Scriptwriting</li>
			<li>Video editing</li>
			<li>Set production and planning</li>
		</ul>

		<Link to="https://www.lulea.se/utbildning--forskola/vuxenutbildning.html">Luleå Vuxenutbildningen — Swedish</Link>
		<ul>
			<li>Swedish grammar and vocabulary</li>
		</ul>

		<Link to="https://www.sunderbyfolkhogskola.se/">Sunderby Folkhögskola — General Art</Link>
		<ul>
			<li>Watercolor painting</li>
			<li>Sculpting</li>
		</ul>
		</div>
	</div>

	

  </Layout>
);

export default ResumePage;
