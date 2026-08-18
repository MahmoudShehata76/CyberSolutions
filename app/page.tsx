import type { Metadata } from "next";

import AnimatedSection from "@/components/AnimatedSection";
import GSAPWrapper from "@/components/GSAPWrapper";

export const metadata: Metadata = {
    title: "Home",
    description: "Cyber Solutions - Home",
};

export default function Index() {
    return (
        <GSAPWrapper>
            <div className="binary-background"><div className="overlay"></div></div>
























            <header className="pt-40 pb-28 relative overflow-hidden">

                <div className="container mx-auto px-8">

                    <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

                        <div className="w-full lg:w-1/2 px-4">

                            <AnimatedSection animation="slide-right">

                                <h5 className="text-secondary font-bold tracking-widest mb-5">

                                    ENGINEERING • DIGITALIZATION • CYBERSECURITY

                                </h5>

                                <h1>

                                    Engineering Secure Digital Infrastructure

                                    for Critical Industries

                                </h1>

                                <p>

                                    Cyber Solutions delivers integrated Industrial Automation,

                                    OT Cybersecurity,

                                    Instrumentation,

                                    Smart Infrastructure,

                                    Data Centers,

                                    Networking,

                                    and Digital Transformation solutions that enhance reliability,

                                    operational excellence,

                                    and business resilience across mission-critical environments.

                                </p>

                                <div className="mt-12 flex flex-wrap gap-y-12 lg:gap-y-0 gap-6 items-center">

                                    <a href="/solutions"
                                        className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all hover:shadow-glow text-lg px-8 py-4 min-w-[200px]">
                                        Explore Solutions
                                    </a>

                                    <a href="/contact"
                                        className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-navy font-semibold rounded-full transition-all text-lg px-8 py-4 min-w-[200px]">
                                        Contact Us
                                    </a>

                                </div>

                            </AnimatedSection>

                        </div>

                        <div className="w-full lg:w-1/2 px-4 text-center mt-12 lg:mt-0">

                            <AnimatedSection animation="zoom-in">

                                <img src="/images/hero/industrial-control-room.webp"

                                    className="max-w-full h-auto hero-image"

                                    alt="Industrial Control Room" />

                            </AnimatedSection>

                        </div>

                    </div>

                </div>

            </header>





            <section className="bg-navy py-20">

                <div className="container mx-auto px-8">

                    <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

                        <div className="w-full lg:w-1/2 px-4">

                            <img src="/images/about/about-company.webp"

                                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg" alt="About Company - Cyber Solutions" />

                        </div>

                        <div className="w-full lg:w-1/2 px-4 mt-12 lg:mt-0">

                            <h6 className="section-subtitle">

                                WHO WE ARE

                            </h6>

                            <h2>

                                Empowering Industry Through Technology

                            </h2>

                            <p>

                                Cyber Solutions is a Saudi technology company specializing in industrial automation, digital transformation, operational technology cybersecurity, smart infrastructure, instrumentation, networking, and mission-critical data center solutions. Our multidisciplinary engineering team combines extensive project experience with deep domain knowledge to deliver reliable, secure, and scalable systems for industrial and infrastructure sectors.

                            </p>

                            <p>

                                We partner with clients throughout the full project lifecycle—from consulting and system architecture through detailed engineering, implementation, commissioning, optimization, and long-term technical support. Our approach emphasizes engineering excellence, operational continuity, cybersecurity by design, and sustainable digital transformation aligned with Saudi Vision 2030.

                            </p>

                            <a href="/about"

                                className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all hover:shadow-glow">

                                Read More

                            </a>

                        </div>

                    </div>

                </div>

            </section>





            <section className="bg-gray-50 text-navy py-20">

                <div className="container mx-auto px-8">

                    <div className="text-center mb-12">

                        <h6 className="section-subtitle">

                            WHY CYBER SOLUTIONS

                        </h6>

                        <h2>

                            Trusted Engineering Partner

                        </h2>

                    </div>

                    <div className="flex flex-wrap -mx-4 gap-y-6">

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                <i className="fas fa-industry"></i>

                                <h4>

                                    Industrial Expertise

                                </h4>

                                <p>

                                    Comprehensive engineering solutions tailored for critical industrial operations.

                                </p>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                <i className="fas fa-shield-halved"></i>

                                <h4>

                                    Secure by Design

                                </h4>

                                <p>

                                    OT cybersecurity integrated into every stage of system architecture and implementation.

                                </p>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                <i className="fas fa-network-wired"></i>

                                <h4>

                                    End-to-End Delivery

                                </h4>

                                <p>

                                    Consulting, engineering, implementation, commissioning, and lifecycle support.

                                </p>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                <i className="fas fa-server"></i>

                                <h4>

                                    Mission Critical Infrastructure

                                </h4>

                                <p>

                                    Reliable, resilient and scalable digital infrastructure for demanding environments.

                                </p>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                <i className="fas fa-microchip"></i>

                                <h4>

                                    Advanced Automation

                                </h4>

                                <p>

                                    Modern PLC, SCADA, DCS, HMI and Industrial IoT solutions.

                                </p>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                <i className="fas fa-lightbulb"></i>

                                <h4>

                                    Innovation

                                </h4>

                                <p>

                                    Helping organizations accelerate digital transformation while maintaining operational excellence.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>





            <section className="bg-navy py-20">

                <div className="container mx-auto px-8">

                    <div className="text-center mb-12">

                        <h6 className="section-subtitle">

                            OUR EXPERTISE

                        </h6>

                        <h2>

                            Offered Solutions

                        </h2>

                        <p>

                            Integrated engineering solutions designed to improve productivity, security, reliability, and operational performance.

                        </p>

                    </div>

                    <div className="flex flex-wrap -mx-4 gap-y-6">

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="solution-card">

                                <img src="/images/solutions/industrial-automation.webp"
                                    className="max-w-full h-auto" alt="Industrial Automation - Cyber Solutions" />

                                <h4>Industrial Automation</h4>

                                <p>
                                    PLC, DCS, SCADA, HMI, Process Control and Digital Twin solutions.
                                </p>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="solution-card">

                                <img src="/images/solutions/ot-cybersecurity-soc.webp"
                                    className="max-w-full h-auto" alt="Ot Cybersecurity Soc - Cyber Solutions" />

                                <h4>OT Cybersecurity</h4>

                                <p>
                                    IEC62443, risk assessment, secure architecture, monitoring and protection.
                                </p>

                            </div>

                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="solution-card">

                                <img src="/images/solutions/data-center-solution.webp"
                                    className="max-w-full h-auto"
                                    alt="Data Centers" />

                                <h4>Data Centers</h4>

                                <p>
                                    Enterprise servers, virtualization, storage,
                                    disaster recovery, backup and resilient
                                    infrastructure.
                                </p>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="solution-card">

                                <img src="/images/solutions/industrial-networking.webp"
                                    className="max-w-full h-auto"
                                    alt="Networking" />

                                <h4>Networking</h4>

                                <p>
                                    Enterprise LAN, WAN, Industrial Ethernet,
                                    Wireless, Fiber Optics and secure communications.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="text-center mt-12">

                        <a href="/solutions"
                            className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all hover:shadow-glow text-lg px-8 py-4">

                            View All Solutions

                        </a>

                    </div>

                </div>

            </section>





            <section className="bg-gray-50 text-navy py-20">

                <div className="container mx-auto px-8">

                    <div className="text-center mb-12">

                        <h6 className="section-subtitle">

                            INDUSTRIES

                        </h6>

                        <h2>

                            Serving Mission Critical Industries

                        </h2>

                        <p>

                            Delivering engineering excellence across industrial,
                            government and infrastructure sectors.

                        </p>

                    </div>

                    <div className="flex flex-wrap -mx-4 text-center gap-y-6">

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="industry-card">

                                <i className="fas fa-oil-well"></i>

                                <h4>Oil & Gas</h4>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="industry-card">

                                <i className="fas fa-bolt"></i>

                                <h4>Power</h4>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="industry-card">

                                <i className="fas fa-water"></i>

                                <h4>Water</h4>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="industry-card">

                                <i className="fas fa-industry"></i>

                                <h4>Manufacturing</h4>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="industry-card">

                                <i className="fas fa-city"></i>

                                <h4>Smart Cities</h4>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="industry-card">

                                <i className="fas fa-building"></i>

                                <h4>Commercial Buildings</h4>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="industry-card">

                                <i className="fas fa-server"></i>

                                <h4>Data Centers</h4>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <div className="industry-card">

                                <i className="fas fa-train"></i>

                                <h4>Transportation</h4>

                            </div>

                        </div>

                    </div>

                </div>

            </section>





            <section className="bg-navy py-20">

                <div className="container mx-auto px-8">

                    <div className="text-center mb-12">

                        <h6 className="section-subtitle">

                            PROJECTS

                        </h6>

                        <h2>

                            Engineering Success Stories

                        </h2>

                    </div>

                    <div className="flex flex-wrap -mx-4 gap-y-6">

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="project-card">

                                <img src="/images/projects/client-meeting.webp"
                                    className="max-w-full h-auto"
                                    alt="Automation" />

                                <div className="project-content">

                                    <h4>

                                        Industrial Automation

                                    </h4>

                                    <p>

                                        Control system modernization,
                                        PLC migration,
                                        SCADA integration,
                                        commissioning and optimization.

                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="project-card">

                                <img src="/images/projects/control-panels.webp"
                                    className="max-w-full h-auto"
                                    alt="Cyber" />

                                <div className="project-content">

                                    <h4>

                                        OT Cybersecurity

                                    </h4>

                                    <p>

                                        Industrial cybersecurity,
                                        network segmentation,
                                        asset visibility,
                                        security monitoring.

                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="project-card">

                                <img src="/images/projects/fiber-optic-installation.webp"
                                    className="max-w-full h-auto"
                                    alt="Infrastructure" />

                                <div className="project-content">

                                    <h4>

                                        Digital Infrastructure

                                    </h4>

                                    <p>

                                        Networking,
                                        data centers,
                                        industrial communications
                                        and smart infrastructure.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>





            <section className="statistics">

                <div className="container mx-auto px-8">

                    <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 text-center">

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <h2 className="counter"
                                data-target="25">

                                0

                            </h2>

                            <p>

                                Years Experience

                            </p>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <h2 className="counter"
                                data-target="100">

                                0

                            </h2>

                            <p>

                                Projects Delivered

                            </p>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <h2 className="counter"
                                data-target="500">

                                0

                            </h2>

                            <p>

                                Systems Engineered

                            </p>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                            <h2 className="counter"
                                data-target="99">

                                0

                            </h2>

                            <p>

                                Client Satisfaction %

                            </p>

                        </div>

                    </div>

                </div>

            </section>





            <section className="bg-gray-50 text-navy py-20">

                <div className="container mx-auto px-8">

                    <div className="text-center mb-12">

                        <h6 className="section-subtitle">

                            INSIGHTS

                        </h6>

                        <h2>

                            Latest Technology Trends

                        </h2>

                    </div>

                    <div className="flex flex-wrap -mx-4 gap-y-6">

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="blog-card">

                                <h4>

                                    OT Cybersecurity

                                </h4>

                                <p>

                                    Strengthening industrial resilience through modern cybersecurity strategies.

                                </p>

                                <a href="/insights">

                                    Read More

                                </a>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="blog-card">

                                <h4>

                                    Industrial AI

                                </h4>

                                <p>

                                    Using advanced analytics and artificial intelligence
                                    to optimize industrial operations.

                                </p>

                                <a href="/insights">

                                    Read More

                                </a>

                            </div>

                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                            <div className="blog-card">

                                <h4>

                                    Digital Transformation

                                </h4>

                                <p>

                                    Building secure,
                                    connected,
                                    future-ready industrial enterprises.

                                </p>

                                <a href="/insights">

                                    Read More

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>





            <section className="contact-section">

                <div className="container mx-auto px-8">

                    <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4">

                        <div className="w-full lg:w-1/2 px-4">

                            <h6 className="section-subtitle">

                                CONTACT

                            </h6>

                            <h2>

                                Let's Build Your Next Digital Transformation Project

                            </h2>

                            <p>

                                Our engineering specialists are ready to discuss your industrial automation,
                                OT cybersecurity,
                                smart infrastructure,
                                networking and digital transformation initiatives.

                            </p>

                            <div className="contact-email">

                                <i className="fas fa-envelope"></i>

                                info@CyberSolutions.com.sa

                            </div>

                        </div>

                        <div className="w-full lg:w-1/2 px-4">

                            <form>

                                <input className="form-control"
                                    placeholder="Full Name" />

                                <input className="form-control"
                                    placeholder="Company" />

                                <input className="form-control"
                                    placeholder="Email" />

                                <input className="form-control"
                                    placeholder="Subject" />

                                <textarea className="form-control"
                                    rows={6}
                                    placeholder="Message" />

                                <button className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all hover:shadow-glow text-lg px-8 py-4">

                                    Send Message

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </section>
















        </GSAPWrapper>
    );
}
