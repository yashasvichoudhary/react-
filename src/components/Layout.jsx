import React from 'react';
import './Layout.css';
import {Link} from 'react-router-dom'
 
function Layout() {
  return (
    <>
      <div className="web1">
        <div className="element1">
          <h1>Our digital solutions help companies to scale their business</h1>
          <h6>We have built enormous solutions for startups and enterprises across the world.</h6>
          <button>See our works &gt;</button>
        </div>
        <img
          src="https://www.w3villa.com/production/assets/landing_page/banner_2_digital-12d2a65725612b69be142e6653792f0d7981dc0fcd1d35cc4ceabc15278efbca.webp"
          height="350"
          width="350"
          alt="Banner"
        />
      </div>
 
      <section className="web2">
        <img src="https://www.w3villa.com/production/assets/landing_page/adobe-4-5a6302ef3237aafcb0f7832df87b62a29284f52af943a4aea920903c4cce6c9d.png" alt="Adobe" />
        <img src="https://www.w3villa.com/production/assets/landing_page/aws-4-52d80c8eec25f6cb354e51438fff2b69cd59d1a0368f5461553a990759bf4e0d.png" alt="AWS" />
        <img src="https://www.w3villa.com/production/assets/landing_page/new-relic-4-1ec5ce3f4cf08b4db0ff61df3d6a8bb0d84709a6e333ddaaad454dee91945ccb.png" alt="New Relic" />
        <img src="https://www.w3villa.com/production/assets/landing_page/gorgias-4-2b8fac76ade5e9f07b89dfdecbccb8526f911ef4182b54a742fad3c71d7f7ad1.png" alt="Gorgias" />
      </section>
 
      <div className="web3">
        <div>
          <img
            src="https://www.w3villa.com/production/assets/landing_page/who_we_are_image-2.0-2f0adc5481a3332c4fb5247b79b5ac355bd2642f088587aafbc6085665d9f60d.webp"
            height="350"
            width="350"
            alt="About Us"
          />
        </div>
        <div className="element3">
          <h3>About Us</h3>
          <h4>Who we are?</h4>
          <p>
            We are a CMMi Level 3 appraised software development company that offers state-of-the-art technological solutions to startups, SMEs, and enterprises across the globe. We bring a design-led approach to integrate digital transformation by incorporating innovative solutions to improve customer experience. Our 100+ dedicated engineers are well-trained to deploy on any complexity development project with unparalleled results.
          </p>
          <p>
            We believe in structured and automated support systems by implementing agile and scrum methodology in our day-to-day operations that keep our clients accurate in any delivery.
          </p>
          <Link to="/aboutus">View More</Link>
        </div>
      </div>
    </>
  );
}
 
export default Layout;