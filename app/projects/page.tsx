import type { Metadata } from "next";

import AnimatedSection from "@/components/AnimatedSection";
import GSAPWrapper from "@/components/GSAPWrapper";

export const metadata: Metadata = {
     title: "Projects",
     description: "Cyber Solutions - Projects",
};

export default function Projects() {
     return (
          <GSAPWrapper>














               <header className="pt-40 pb-28 relative overflow-hidden">

                    <div className="container mx-auto px-8">

                         <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

                              <div className="w-full lg:w-7/12 px-8">

                                   <h6 className="text-secondary font-bold tracking-widest mb-5">

                                        PROJECT EXPERIENCE

                                   </h6>

                                   <h1>

                                        Delivering Engineering Excellence
                                        Across Critical Industries

                                   </h1>

                                   <p>

                                        Cyber Solutions delivers integrated engineering projects that
                                        combine Industrial Automation,
                                        OT Cybersecurity,
                                        Networking,
                                        Instrumentation,
                                        Data Centers,
                                        Industrial Communications,
                                        and Smart Infrastructure into secure,
                                        future-ready operational environments.

                                   </p>

                                   <p>

                                        Our multidisciplinary engineering teams support customers from
                                        concept development and detailed engineering through
                                        implementation,
                                        commissioning,
                                        optimization,
                                        and long-term lifecycle support.

                                   </p>

                                   <a href="/contact"
                                        className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all hover:shadow-glow text-lg px-8 py-4 mt-8">

                                        Discuss Your Project

                                   </a>

                              </div>

                              <div className="w-full lg:w-5/12 px-8 text-center">

                                   <img src="/images/projects/project-team.webp"
                                        className="max-w-full h-auto hero-image"
                                        alt="Projects" />

                              </div>

                         </div>

                    </div>

               </header>





               <section className="bg-navy py-20">

                    <div className="container mx-auto px-8">

                         <div className="text-center mb-12">

                              <h6 className="section-subtitle">

                                   PROJECT PORTFOLIO

                              </h6>

                              <h2>

                                   Integrated Engineering Solutions
                                   Delivered with Confidence

                              </h2>

                              <p>

                                   Every project is executed using proven engineering practices,
                                   international standards,
                                   structured project management,
                                   and rigorous quality assurance to ensure predictable,
                                   high-quality outcomes.

                              </p>

                         </div>

                         <div className="flex flex-wrap -mx-4 gap-y-6">

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-gears"></i>

                                        <h4>

                                             Automation

                                        </h4>

                                        <p>

                                             PLC,
                                             SCADA,
                                             DCS,
                                             HMI,
                                             Process Control,
                                             Migration,
                                             Advanced Automation.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-shield-halved"></i>

                                        <h4>

                                             Cybersecurity

                                        </h4>

                                        <p>

                                             Industrial Firewalls,
                                             IEC62443,
                                             Network Segmentation,
                                             SOC Integration,
                                             Risk Assessment.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-server"></i>

                                        <h4>

                                             Infrastructure

                                        </h4>

                                        <p>

                                             Servers,
                                             Storage,
                                             Virtualization,
                                             Data Centers,
                                             Backup,
                                             Disaster Recovery.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-network-wired"></i>

                                        <h4>

                                             Networking

                                        </h4>

                                        <p>

                                             Industrial Ethernet,
                                             Fiber,
                                             LAN,
                                             WAN,
                                             Wireless,
                                             Secure Communications.

                                        </p>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>





               <section className="bg-gray-50 text-navy py-20">

                    <div className="container mx-auto px-8">

                         <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

                              <div className="w-full lg:w-1/2 px-4">

                                   <img src="/images/projects/featured-project.webp"
                                        className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
                                        alt="Featured Project" />

                              </div>

                              <div className="w-full lg:w-1/2 px-4">

                                   <h6 className="section-subtitle">

                                        FEATURED PROJECT

                                   </h6>

                                   <h2>

                                        Integrated Digital Infrastructure Modernization

                                   </h2>

                                   <p>

                                        A comprehensive modernization program involving industrial
                                        automation,
                                        secure networking,
                                        instrumentation upgrades,
                                        control system integration,
                                        OT cybersecurity enhancement,
                                        and centralized operational monitoring.

                                   </p>

                                   <p>

                                        The project delivered improved operational visibility,
                                        higher system availability,
                                        reduced maintenance effort,
                                        strengthened cybersecurity,
                                        and a scalable platform ready for future digital
                                        transformation initiatives.

                                   </p>

                                   <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 mt-8">

                                        <div className="w-full md:w-1/2 px-4">

                                             <h5>Scope</h5>

                                             <ul>

                                                  <li>Automation</li>

                                                  <li>SCADA</li>

                                                  <li>Networking</li>

                                                  <li>Cybersecurity</li>

                                             </ul>

                                        </div>

                                        <div className="w-full md:w-1/2 px-4">

                                             <h5>Deliverables</h5>

                                             <ul>

                                                  <li>Engineering</li>

                                                  <li>Implementation</li>

                                                  <li>Commissioning</li>

                                                  <li>Training</li>

                                             </ul>

                                        </div>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>









               <section className="bg-navy py-20">

                    <div className="container mx-auto px-8">

                         <div className="text-center mb-12">

                              <h6 className="section-subtitle">

                                   PROJECT CATEGORY

                              </h6>

                              <h2>

                                   Industrial Automation Projects

                              </h2>

                              <p>

                                   Modern automation projects engineered to maximize operational
                                   availability, improve process efficiency, and support future
                                   digital transformation.

                              </p>

                         </div>

                         <div className="flex flex-wrap -mx-4 gap-y-6">

                              <div className="w-full lg:w-1/2 px-4">

                                   <div className="project-card">

                                        <img src="/images/projects/client-meeting.webp"
                                             className="max-w-full h-auto"
                                             alt="Automation Project" />

                                        <div className="project-content">

                                             <span className="project-tag">

                                                  Industrial Automation

                                             </span>

                                             <h3>

                                                  Control System Modernization

                                             </h3>

                                             <p>

                                                  Replacement of legacy PLC platforms with modern redundant
                                                  controllers, engineering new control logic, upgrading operator
                                                  interfaces, integrating field instrumentation, and improving
                                                  overall plant reliability.

                                             </p>

                                             <ul>

                                                  <li>PLC Engineering</li>

                                                  <li>SCADA Upgrade</li>

                                                  <li>Industrial Networking</li>

                                                  <li>Factory Acceptance Testing</li>

                                                  <li>Site Commissioning</li>

                                             </ul>

                                        </div>

                                   </div>

                              </div>

                              <div className="w-full lg:w-1/2 px-4">

                                   <div className="project-card">

                                        <img src="/images/projects/control-panels.webp"
                                             className="max-w-full h-auto"
                                             alt="Advanced Process Control" />

                                        <div className="project-content">

                                             <span className="project-tag">

                                                  Process Optimization

                                             </span>

                                             <h3>

                                                  Advanced Process Optimization

                                             </h3>

                                             <p>

                                                  Engineering advanced automation strategies that increase
                                                  production efficiency, reduce operating costs, improve energy
                                                  utilization, and enhance process stability through intelligent
                                                  control.

                                             </p>

                                             <ul>

                                                  <li>Advanced Control</li>

                                                  <li>Performance Monitoring</li>

                                                  <li>Alarm Rationalization</li>

                                                  <li>Operator Dashboards</li>

                                                  <li>KPI Reporting</li>

                                             </ul>

                                        </div>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>





               <section className="bg-gray-50 text-navy py-20">

                    <div className="container mx-auto px-8">

                         <div className="text-center mb-12">

                              <h6 className="section-subtitle">

                                   PROJECT CATEGORY

                              </h6>

                              <h2>

                                   Operational Technology Cybersecurity

                              </h2>

                         </div>

                         <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4">

                              <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-shield-halved"></i>

                                        <h4>

                                             Security Assessment

                                        </h4>

                                        <p>

                                             Industrial asset discovery,
                                             security assessments,
                                             risk analysis,
                                             security maturity evaluation,
                                             and cybersecurity improvement roadmaps.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-network-wired"></i>

                                        <h4>

                                             Network Segmentation

                                        </h4>

                                        <p>

                                             Secure industrial architectures,
                                             firewalls,
                                             industrial DMZ,
                                             zone & conduit implementation,
                                             and resilient network design.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-user-lock"></i>

                                        <h4>

                                             Secure Remote Access

                                        </h4>

                                        <p>

                                             VPN,
                                             multi-factor authentication,
                                             privileged access,
                                             encrypted communications,
                                             and secure engineering access.

                                        </p>

                                   </div>

                              </div>

                         </div>

                         <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 mt-12 items-center">

                              <div className="w-full lg:w-1/2 px-4">

                                   <img src="/images/projects/network-security.webp"
                                        className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
                                        alt="Cybersecurity Project" />

                              </div>

                              <div className="w-full lg:w-1/2 px-4">

                                   <h3>

                                        Industrial Cybersecurity Transformation

                                   </h3>

                                   <p>

                                        Deployment of secure OT architecture protecting critical
                                        industrial assets through industrial firewalls,
                                        continuous monitoring,
                                        network segmentation,
                                        endpoint protection,
                                        and secure operational communications.

                                   </p>

                                   <p>

                                        The project significantly improved cybersecurity posture while
                                        maintaining uninterrupted industrial operations.

                                   </p>

                              </div>

                         </div>

                    </div>

               </section>





               <section className="bg-navy py-20">

                    <div className="container mx-auto px-8">

                         <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

                              <div className="w-full lg:w-1/2 px-4 order-lg-2">

                                   <img src="/images/projects/server-room-installation.webp"
                                        className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
                                        alt="Data Center" />

                              </div>

                              <div className="w-full lg:w-1/2 px-4 order-lg-1">

                                   <h6 className="section-subtitle">

                                        PROJECT CATEGORY

                                   </h6>

                                   <h2>

                                        Enterprise Data Center Deployment

                                   </h2>

                                   <p>

                                        Engineering and deployment of enterprise-grade data centers
                                        supporting virtualization,
                                        storage,
                                        high-availability servers,
                                        backup systems,
                                        business continuity,
                                        and disaster recovery infrastructure.

                                   </p>

                                   <p>

                                        Projects include complete infrastructure integration,
                                        power redundancy,
                                        structured cabling,
                                        environmental monitoring,
                                        rack systems,
                                        and cybersecurity controls.

                                   </p>

                                   <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 mt-8">

                                        <div className="w-full md:w-1/2 px-4">

                                             <ul>

                                                  <li>Enterprise Servers</li>

                                                  <li>Virtualization</li>

                                                  <li>SAN Storage</li>

                                                  <li>Backup Systems</li>

                                             </ul>

                                        </div>

                                        <div className="w-full md:w-1/2 px-4">

                                             <ul>

                                                  <li>UPS Integration</li>

                                                  <li>Monitoring</li>

                                                  <li>Cooling</li>

                                                  <li>Disaster Recovery</li>

                                             </ul>

                                        </div>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>





               <section className="bg-gray-50 text-navy py-20">

                    <div className="container mx-auto px-8">

                         <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

                              <div className="w-full lg:w-1/2 px-4">

                                   <img src="/images/projects/fiber-optic-installation.webp"
                                        className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
                                        alt="Networking" />

                              </div>

                              <div className="w-full lg:w-1/2 px-4">

                                   <h6 className="section-subtitle">

                                        PROJECT CATEGORY

                                   </h6>

                                   <h2>

                                        Industrial & Enterprise Networking

                                   </h2>

                                   <p>

                                        Design and implementation of secure,
                                        high-performance communication infrastructures connecting
                                        industrial plants,
                                        enterprise systems,
                                        remote facilities,
                                        and smart infrastructure.

                                   </p>

                                   <p>

                                        Our networking projects include industrial Ethernet,
                                        fiber optic backbone,
                                        wireless communications,
                                        LAN/WAN architectures,
                                        routing,
                                        switching,
                                        redundancy,
                                        and network monitoring.

                                   </p>

                                   <p>

                                        Every deployment is engineered for maximum availability,
                                        cyber resilience,
                                        and long-term scalability.

                                   </p>

                              </div>

                         </div>

                    </div>

               </section>










               <section className="bg-navy py-20">

                    <div className="container mx-auto px-8">

                         <div className="text-center mb-12">

                              <h6 className="section-subtitle">

                                   PROJECT CATEGORY

                              </h6>

                              <h2>

                                   Smart Infrastructure & Digital Transformation

                              </h2>

                              <p>

                                   Engineering intelligent infrastructure by integrating
                                   Operational Technology (OT), Information Technology (IT),
                                   Industrial IoT, secure networking, analytics, and centralized
                                   management platforms into one unified ecosystem.

                              </p>

                         </div>

                         <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

                              <div className="w-full lg:w-1/2 px-4">

                                   <img src="/images/projects/monitoring-center.webp"
                                        className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
                                        alt="Smart Infrastructure" />

                              </div>

                              <div className="w-full lg:w-1/2 px-4">

                                   <h3>

                                        Connected Infrastructure Deployment

                                   </h3>

                                   <p>

                                        Deployment of integrated digital platforms connecting buildings,
                                        utilities, industrial assets, enterprise systems, and field
                                        devices through secure communication networks and centralized
                                        monitoring.

                                   </p>

                                   <p>

                                        The solution provides real-time operational visibility,
                                        predictive analytics, intelligent alarming, KPI dashboards,
                                        energy monitoring, and centralized asset management.

                                   </p>

                                   <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 mt-8">

                                        <div className="w-full md:w-1/2 px-4">

                                             <ul>

                                                  <li>Industrial IoT</li>

                                                  <li>Smart Sensors</li>

                                                  <li>Edge Computing</li>

                                                  <li>Asset Monitoring</li>

                                             </ul>

                                        </div>

                                        <div className="w-full md:w-1/2 px-4">

                                             <ul>

                                                  <li>Analytics</li>

                                                  <li>Dashboards</li>

                                                  <li>Cloud Integration</li>

                                                  <li>Operational KPIs</li>

                                             </ul>

                                        </div>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>





               <section className="bg-gray-50 text-navy py-20">

                    <div className="container mx-auto px-8">

                         <div className="text-center mb-12">

                              <h6 className="section-subtitle">

                                   PROJECT DELIVERY

                              </h6>

                              <h2>

                                   Our Engineering Lifecycle

                              </h2>

                              <p>

                                   Every engagement follows a structured delivery methodology,
                                   ensuring technical excellence, predictable execution, and
                                   long-term operational value.

                              </p>

                         </div>

                         <div className="flex flex-wrap -mx-4 gap-y-6">

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-lightbulb"></i>

                                        <h4>

                                             01

                                        </h4>

                                        <h5>

                                             Consult

                                        </h5>

                                        <p>

                                             Business analysis,
                                             site surveys,
                                             engineering workshops,
                                             technical studies,
                                             and project planning.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-compass-drafting"></i>

                                        <h4>

                                             02

                                        </h4>

                                        <h5>

                                             Design

                                        </h5>

                                        <p>

                                             Architecture,
                                             engineering calculations,
                                             system design,
                                             documentation,
                                             and integration planning.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-gears"></i>

                                        <h4>

                                             03

                                        </h4>

                                        <h5>

                                             Implement

                                        </h5>

                                        <p>

                                             Installation,
                                             configuration,
                                             testing,
                                             factory acceptance testing,
                                             site commissioning,
                                             and optimization.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-headset"></i>

                                        <h4>

                                             04

                                        </h4>

                                        <h5>

                                             Support

                                        </h5>

                                        <p>

                                             Training,
                                             preventive maintenance,
                                             technical support,
                                             system upgrades,
                                             and lifecycle services.

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

                                   TECHNOLOGIES

                              </h6>

                              <h2>

                                   Platforms & Technologies

                              </h2>

                         </div>

                         <div className="flex flex-wrap -mx-4 text-center gap-y-6">

                              <div className="w-full md:w-1/3 lg:w-1/4 px-8">

                                   <div className="tech-card">

                                        <i className="fas fa-microchip fa-3x"></i>

                                        <h5>PLC</h5>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/3 lg:w-1/4 px-8">

                                   <div className="tech-card">

                                        <i className="fas fa-desktop fa-3x"></i>

                                        <h5>SCADA</h5>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/3 lg:w-1/4 px-8">

                                   <div className="tech-card">

                                        <i className="fas fa-network-wired fa-3x"></i>

                                        <h5>Industrial Ethernet</h5>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/3 lg:w-1/4 px-8">

                                   <div className="tech-card">

                                        <i className="fas fa-shield-halved fa-3x"></i>

                                        <h5>OT Security</h5>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/3 lg:w-1/4 px-8">

                                   <div className="tech-card">

                                        <i className="fas fa-server fa-3x"></i>

                                        <h5>Virtualization</h5>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/3 lg:w-1/4 px-8">

                                   <div className="tech-card">

                                        <i className="fas fa-cloud fa-3x"></i>

                                        <h5>Cloud Ready</h5>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>





               <section className="bg-gray-50 text-navy py-20">

                    <div className="container mx-auto px-8">

                         <div className="text-center mb-12">

                              <h6 className="section-subtitle">

                                   BUSINESS VALUE

                              </h6>

                              <h2>

                                   Project Outcomes

                              </h2>

                         </div>

                         <div className="flex flex-wrap -mx-4 gap-y-6">

                              <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-arrow-trend-up"></i>

                                        <h4>

                                             Higher Productivity

                                        </h4>

                                        <p>

                                             Automation and intelligent monitoring improve operational
                                             performance while reducing manual intervention.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-clock"></i>

                                        <h4>

                                             Reduced Downtime

                                        </h4>

                                        <p>

                                             Predictive maintenance,
                                             real-time diagnostics,
                                             and resilient system architectures improve availability.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/3 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-chart-line"></i>

                                        <h4>

                                             Long-Term ROI

                                        </h4>

                                        <p>

                                             Scalable engineering solutions reduce lifecycle costs while
                                             supporting future expansion and digital transformation.

                                        </p>

                                   </div>

                              </div>

                         </div>

                    </div>

               </section>









               <section className="statistics">

                    <div className="container mx-auto px-8">

                         <div className="text-center mb-12">

                              <h6 className="section-subtitle">

                                   OUR TRACK RECORD

                              </h6>

                              <h2>

                                   Engineering Results That Matter

                              </h2>

                         </div>

                         <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 text-center">

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
                                        data-target="12">

                                        0

                                   </h2>

                                   <p>

                                        Industries Served

                                   </p>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <h2 className="counter"
                                        data-target="25">

                                        0

                                   </h2>

                                   <p>

                                        Years of Engineering Experience

                                   </p>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <h2 className="counter"
                                        data-target="99">

                                        0

                                   </h2>

                                   <p>

                                        Customer Satisfaction %

                                   </p>

                              </div>

                         </div>

                    </div>

               </section>





               <section className="bg-navy py-20">

                    <div className="container mx-auto px-8">

                         <div className="text-center mb-12">

                              <h6 className="section-subtitle">

                                   CLIENT ENGAGEMENT

                              </h6>

                              <h2>

                                   Working Together From Concept to Operation

                              </h2>

                              <p>

                                   Every engagement is managed by experienced engineering and
                                   project management professionals who ensure technical quality,
                                   schedule compliance, risk management, and successful delivery.

                              </p>

                         </div>

                         <div className="flex flex-wrap -mx-4 gap-y-6">

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-handshake"></i>

                                        <h4>

                                             Understand

                                        </h4>

                                        <p>

                                             Capture business objectives, operational challenges, and
                                             technical requirements through collaborative workshops and
                                             engineering reviews.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-file-lines"></i>

                                        <h4>

                                             Plan

                                        </h4>

                                        <p>

                                             Develop execution strategies, engineering documentation,
                                             resource plans, schedules, and project governance.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-screwdriver-wrench"></i>

                                        <h4>

                                             Deliver

                                        </h4>

                                        <p>

                                             Execute engineering, installation, integration, testing,
                                             commissioning, and operational readiness activities.

                                        </p>

                                   </div>

                              </div>

                              <div className="w-full md:w-1/2 lg:w-1/4 px-4">

                                   <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                                        <i className="fas fa-life-ring"></i>

                                        <h4>

                                             Support

                                        </h4>

                                        <p>

                                             Provide training, maintenance, modernization, and lifecycle
                                             support to maximize long-term value.

                                        </p>

                                   </div>

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

                                   A Trusted Engineering Partner

                              </h2>

                         </div>

                         <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4">

                              <div className="w-full lg:w-1/2 px-4">

                                   <ul className="flex flex-col space-y-4">

                                        <li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                                             ✔ Integrated Industrial Automation & Control expertise

                                        </li>

                                        <li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                                             ✔ Secure OT & IT infrastructure design

                                        </li>

                                        <li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                                             ✔ Multidisciplinary engineering capabilities

                                        </li>

                                        <li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                                             ✔ Proven project management methodology

                                        </li>

                                        <li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                                             ✔ Complete project lifecycle services

                                        </li>

                                   </ul>

                              </div>

                              <div className="w-full lg:w-1/2 px-4">

                                   <ul className="flex flex-col space-y-4">

                                        <li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                                             ✔ Smart Infrastructure & Digital Transformation

                                        </li>

                                        <li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                                             ✔ Industrial Cybersecurity specialists

                                        </li>

                                        <li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                                             ✔ Scalable future-ready architectures

                                        </li>

                                        <li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                                             ✔ Focus on operational excellence

                                        </li>

                                        <li className="flex items-center space-x-3 text-navy bg-white p-4 rounded-xl shadow-sm border border-gray-100">

                                             ✔ Long-term customer partnerships

                                        </li>

                                   </ul>

                              </div>

                         </div>

                    </div>

               </section>





               <section className="contact-section">

                    <div className="container mx-auto px-8">

                         <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

                              <div className="w-full lg:w-2/3 px-8">

                                   <h2>

                                        Ready to Deliver Your Next Engineering Project?

                                   </h2>

                                   <p>

                                        Whether you are planning a new industrial facility,
                                        modernizing an existing control system,
                                        deploying secure OT infrastructure,
                                        building a resilient data center,
                                        or implementing a smart infrastructure initiative,
                                        Cyber Solutions is ready to support your success.

                                   </p>

                              </div>

                              <div className="w-full lg:w-1/3 px-8 text-lg-end">

                                   <a href="/contact"
                                        className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all hover:shadow-glow text-lg px-8 py-4">

                                        Start Your Project

                                   </a>

                              </div>

                         </div>

                    </div>

               </section>




















          </GSAPWrapper>
     );
}
