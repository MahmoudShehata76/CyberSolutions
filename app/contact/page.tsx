import type { Metadata } from "next";

import AnimatedSection from "@/components/AnimatedSection";
import GSAPWrapper from "@/components/GSAPWrapper";

export const metadata: Metadata = {
  title: "Contact",
  description: "Cyber Solutions - Contact",
};

export default function Contact() {
  return (
    <GSAPWrapper>




<header className="pt-40 pb-28 relative overflow-hidden">
<div className="container mx-auto px-8 text-center">
<h6 className="text-secondary font-bold tracking-widest mb-5">CONTACT</h6>
<h1>Let's Build the Future Together</h1>
<p className="lead">Whether you need engineering consultation, industrial automation, OT cybersecurity, networking, or digital transformation services, our team is ready to help.</p>
<a href="#contact-form" className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all hover:shadow-glow text-lg px-8 py-4">Send a Message</a>
</div>
</header>

<section className="bg-navy py-20">
<div className="container mx-auto px-8">
<div className="flex flex-wrap -mx-4 gap-y-6">
<div className="w-full md:w-1/3 px-8">
<div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover text-center">
<i className="fas fa-envelope fa-2x mb-6"></i>
<h4>Email</h4>
<p>info@CyberSolutions.com.sa</p>
</div>
</div>
<div className="w-full md:w-1/3 px-8">
<div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover text-center">
<i className="fas fa-location-dot fa-2x mb-6"></i>
<h4>Office</h4>
<p>Kingdom of Saudi Arabia</p>
</div>
</div>
<div className="w-full md:w-1/3 px-8">
<div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover text-center">
<i className="fas fa-clock fa-2x mb-6"></i>
<h4>Business Hours</h4>
<p>Sunday – Thursday<br />8:00 AM – 5:00 PM</p>
</div>
</div>
</div>
</div>
</section>

<section id="contact-form" className="bg-gray-50 text-navy py-20">
<div className="container mx-auto px-8">
<div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4">
<div className="w-full lg:w-7/12 px-8">
<h2>Send Us a Message</h2>
<form>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
<div><input className="form-control" placeholder="Full Name" /></div>
<div><input className="form-control" placeholder="Company" /></div>
<div><input type="email" className="form-control" placeholder="Email" /></div>
<div>
<select className="form-control">
<option>Service of Interest</option>
<option>Industrial Automation</option>
<option>OT Cybersecurity</option>
<option>Networking</option>
<option>Smart Infrastructure</option>
<option>Digital Transformation</option>
</select>
</div>
<div className="md:col-span-2"><input className="form-control" placeholder="Subject" /></div>
<div className="md:col-span-2"><textarea className="form-control" rows={6} placeholder="Message" /></div>
<div className="md:col-span-2"><button className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full transition-all hover:shadow-glow text-lg" type="submit">Submit Inquiry</button></div>
</div>
</form>
</div>
<div className="w-full lg:w-5/12 px-8">
<h2>Why Contact Us?</h2>
<ul className="flex flex-col space-y-4">
<li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<i className="fas fa-check-circle text-primary"></i>
<span>Engineering Consultation</span>
</li>
<li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<i className="fas fa-check-circle text-primary"></i>
<span>Industrial Automation Solutions</span>
</li>
<li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<i className="fas fa-check-circle text-primary"></i>
<span>OT Cybersecurity Services</span>
</li>
<li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<i className="fas fa-check-circle text-primary"></i>
<span>Digital Transformation Projects</span>
</li>
<li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<i className="fas fa-check-circle text-primary"></i>
<span>Partnership Opportunities</span>
</li>
<li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<i className="fas fa-check-circle text-primary"></i>
<span>General Business Enquiries</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-navy py-20">
<div className="container mx-auto px-8">
<h2 className="text-center mb-8">Our Location</h2>
<div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-white/10">
<iframe src="https://www.google.com/maps?q=Saudi%20Arabia&output=embed" className="w-full h-full border-0" loading="lazy" allowFullScreen></iframe>
</div>
</div>
</section>








    </GSAPWrapper>
  );
}
