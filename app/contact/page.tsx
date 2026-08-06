import AnimatedSection from "@/components/AnimatedSection";
import GSAPWrapper from "@/components/GSAPWrapper";

export default function Contact() {
  return (
    <GSAPWrapper>




<header className="hero-section">
<div className="container text-center">
<h6 className="hero-small">CONTACT</h6>
<h1>Let's Build the Future Together</h1>
<p className="lead">Whether you need engineering consultation, industrial automation, OT cybersecurity, networking, or digital transformation services, our team is ready to help.</p>
<a href="#contact-form" className="btn btn-primary btn-lg">Send a Message</a>
</div>
</header>

<section className="section-dark">
<div className="container">
<div className="row g-4">
<div className="col-md-4">
<div className="feature-card text-center">
<i className="fas fa-envelope fa-2x mb-3"></i>
<h4>Email</h4>
<p>info@CyberSolutions.com.sa</p>
</div>
</div>
<div className="col-md-4">
<div className="feature-card text-center">
<i className="fas fa-location-dot fa-2x mb-3"></i>
<h4>Office</h4>
<p>Kingdom of Saudi Arabia</p>
</div>
</div>
<div className="col-md-4">
<div className="feature-card text-center">
<i className="fas fa-clock fa-2x mb-3"></i>
<h4>Business Hours</h4>
<p>Sunday – Thursday<br />8:00 AM – 5:00 PM</p>
</div>
</div>
</div>
</div>
</section>

<section id="contact-form" className="section-light">
<div className="container">
<div className="row">
<div className="col-lg-7">
<h2>Send Us a Message</h2>
<form>
<div className="row g-3">
<div className="col-md-6"><input className="form-control" placeholder="Full Name" /></div>
<div className="col-md-6"><input className="form-control" placeholder="Company" /></div>
<div className="col-md-6"><input type="email" className="form-control" placeholder="Email" /></div>
<div className="col-md-6">
<select className="form-select">
<option>Service of Interest</option>
<option>Industrial Automation</option>
<option>OT Cybersecurity</option>
<option>Networking</option>
<option>Smart Infrastructure</option>
<option>Digital Transformation</option>
</select>
</div>
<div className="col-12"><input className="form-control" placeholder="Subject" /></div>
<div className="col-12"><textarea className="form-control" rows={6} placeholder="Message" /></div>
<div className="col-12"><button className="btn btn-primary btn-lg" type="submit">Submit Inquiry</button></div>
</div>
</form>
</div>
<div className="col-lg-5">
<h2>Why Contact Us?</h2>
<ul className="list-group">
<li className="list-group-item">Engineering Consultation</li>
<li className="list-group-item">Industrial Automation Solutions</li>
<li className="list-group-item">OT Cybersecurity Services</li>
<li className="list-group-item">Digital Transformation Projects</li>
<li className="list-group-item">Partnership Opportunities</li>
<li className="list-group-item">General Business Enquiries</li>
</ul>
</div>
</div>
</div>
</section>

<section className="section-dark">
<div className="container">
<h2 className="text-center mb-4">Our Location</h2>
<div className="ratio ratio-16x9">
<iframe src="https://www.google.com/maps?q=Saudi%20Arabia&output=embed" loading="lazy" allowFullScreen></iframe>
</div>
</div>
</section>








    </GSAPWrapper>
  );
}
