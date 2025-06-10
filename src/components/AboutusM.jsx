import React from 'react';
import './About.css'; // ✅ Make sure this path is correct
 
function AboutUsM() {
    return (
        <>
            <div className="aboutusm">
                <div className="aboutusm-left">
                    <div className="breadcrumbs">
                        <span>Home</span> &gt; <span>Company</span> &gt; <span>About us</span>
                    </div>
                    <h2>
                        At <span className="highlight">W3villa Technologies</span>, we craft
                        innovative software solutions to elevate your business potential.
                    </h2>
                    <p>
                        With years of experience in the industry, we have earned our place as a CMMi Level 3
                        appraised and ISO-accredited company. We strive to deliver custom software solutions
                        that meet our client&apos;s expectations. Our team has diverse expertise, including
                        software development, web design, mobile app development, and more.
                    </p>
                    <button className="contact-btn">Contact Us</button>
                </div>
                <div className="aboutusm-right">
                    <img
                        src="https://www.w3villa.com/production/assets/pages/about/about-us-banner-image-1-2b6700cf8c9a2657c5974d6913d6391b7d41f34c191c612a1531c8bc77d430ae.jpg"
                        alt="Tech Graphic"
                    />
                </div>
            </div>
        </>
    );
}
 
export default AboutUsM;
 