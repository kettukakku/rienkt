import React from 'react';

import Layout from '../components/Layout';
import pic1 from '../assets/images/rien-avatar2.png';

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
		<p>Possessing a voice to speak and tell thoughts often locked away— writing has always been a source of comfort for me. And while it’s useful to have a means of communicative clarity, I’ve always been drawn to fiction. To take a moment to escape real life and get lost in somewhere far beyond has always brought me joy. What brings me even more happiness, however, is to share those worlds with others and to give everyone the opportunity to read the words often trapped within one’s own mind. </p>
		</div>
		<br/><br/>
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
