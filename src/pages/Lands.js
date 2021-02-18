import React from 'react';

import Layout from '../components/Layout';
import SEO from "../components/Seo"
import pic from '../assets/images/05.jpg';

const IndexPage = () => (
  <Layout>
  <SEO title="Lands Above and Below" description="The Gods bring more grief than glory. And it's up to the people to stand above." />
    <div id="main">
    <div className="inner">
    <header>
    <div className="resumeTitle">
  <h1>Lands Above and Below</h1><h4>632 words | Fantasy</h4>
  </div>
    </header>
      <section>
        <div className="box alt">
						<div className="row gtr-uniform">
							<div className="col-12"><span className="image fit"><img src={pic} alt="" /></span></div>
						</div>
          </div>
        <div className="storyText">
       <p>Despotic rule rarely garnered love. But who else had the strength to level cities that rose into the heavens? And who else possessed an eye that watched over all creation? </p>
       <p>Some tried. For every charlatan who believed he could best the Gods, there was rarely a mortal found worthy. Perhaps it was only meant to give false hope. That, though, was all it took to keep the masses occupied— praying for the day one would sit on the throne of gold and glistening jewels and peer onto the city with benevolence.</p>
       <p>A narrow bridge made of sandstone stood as the gateway and the start of a trial. Bricks tumbled to the ravine below, but that didn’t prevent the builders from risking their lives to keep the road stable. One day, someone would come who could take on the Gods. And then the masses would be free to flourish.</p>
       <p>Roads leading to the far reaches of the borders were kept paved pristinely despite the wrath from the heavens that’d defile them. The inns teamed with fresh ale and meat despite the pests that ransacked their fields. No matter how much blood and sweat it’d take, the people endured it. If it meant a champion would come, their efforts would not be in vain.</p>
       <p>Even with the odds stacked against the people, the Gods increased the challenge to reach the heavens. The mountain one needed to climb grew ever higher. The storms grew more turbulent. And the monstrous beasts that inhabited the cliff sides learned from what struck them down. </p>
       <p>For every one step the masses pushed forward, they were knocked back leaps and bounds. Some thought to abandon the city. After all, if no one tried to fight the Gods, the omnipresent wouldn’t be forced to fight back. There was some security found in knowing the wrath they faced couldn’t become worse.</p>
       <p>“We’ll dig into the soil itself,” one man proposed, “If the skies rain fire and damnation then we’ll go to where they may never reach us.”</p>
       <p>Many argued it was a fool’s hope. What was to say the world below was any better? If the roots withered and the land shook and crumbled, how would life be any different? Still, it was a chance. That was all the people needed to raise their shovels.</p>
       <p>Trapped without the sun, they had no choice but to adapt. Hungry and blinded, they pressed on. The depths brought upon their own set of challenges, but what kept them going was a lone voice lost in the endless caverns.</p>
       <p>In between the gentle trickle of underground springs and the murmuring of beasts was a whisper that beckoned the travelers closer. It came to them with a promise: forsake the Gods in the sky and swear fealty to the underground. In their desperation, they gave in to the voices' demands.</p>
       <p>Ages came and went, and the people knew not why their ancestors came to live in a world plagued with limited light and claustrophobic quarters. The Gods were merciless— eruptions of lava and a lack of fertile soil made the land difficult to endure. But if one could challenge the divine, they could sit upon a throne of gold and glistening jewels and peer up at the city with benevolence.</p>
       <p>A champion— that was what the masses believed they needed. With blood and sweat poured into keeping the tunnels clear, they waited for a day one would come to face the trial and stand in opposition to the Gods. But despite the many who tried, none were able to change the fate of the masses.</p>
       <p>“We’ll climb high to where burning light peaks into the world,” one man proposed, “If fire and damnation floods us from below, then we’ll climb to where it may never reach us.”  </p>
        </div>
      </section>
    </div>
    </div>
  </Layout>
);

export default IndexPage;
