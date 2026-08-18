import type { Metadata } from "next";

import AnimatedSection from "@/components/AnimatedSection";
import GSAPWrapper from "@/components/GSAPWrapper";

export const metadata: Metadata = {
  title: "Careers",
  description: "Cyber Solutions - Careers",
};

export default function Careers() {
  return (
    <GSAPWrapper>














      <header className="pt-40 pb-28 relative overflow-hidden">

        <div className="container mx-auto px-8">

          <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

            <div className="w-full lg:w-7/12 px-8">

              <h6 className="text-secondary font-bold tracking-widest mb-5">

                CAREERS

              </h6>

              <h1>

                Shape the Future of Engineering

              </h1>

              <p>

                Join Cyber Solutions and become part of a multidisciplinary
                team delivering Industrial Automation,
                OT Cybersecurity,
                Industrial Networking,
                Data Centers,
                Smart Infrastructure,
                Instrumentation,
                and Digital Transformation projects that support the Kingdom's
                future.

              </p>

              <p>

                We believe our people are our greatest strength.
                We invest in talent,
                innovation,
                continuous learning,
                and professional growth to build engineering leaders.

              </p>

              <a href="#vacancies"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all hover:shadow-glow text-lg px-8 py-4 mt-8">

                View Opportunities

              </a>

            </div>

            <div className="w-full lg:w-5/12 px-8 text-center">

              <img src="/images/careers/careers-hero.webp"
                className="hero-image"
                alt="Engineering Careers" />

            </div>

          </div>

        </div>

      </header>





      <section className="bg-navy py-20">

        <div className="container mx-auto px-8">

          <div className="text-center mb-12">

            <h6 className="section-subtitle">

              WHY CYBER SOLUTIONS

            </h6>

            <h2>

              Build a Career That Makes an Impact

            </h2>

            <p>

              Our engineers help design and implement technologies that
              improve critical infrastructure,
              industrial productivity,
              cyber resilience,
              and digital transformation throughout Saudi Arabia.

            </p>

          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6">

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-lightbulb"></i>

                <h4>

                  Innovation

                </h4>

                <p>

                  Work with emerging technologies including AI,
                  Industrial IoT,
                  Digital Twins,
                  automation,
                  and OT cybersecurity.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-graduation-cap"></i>

                <h4>

                  Learning

                </h4>

                <p>

                  Professional certifications,
                  technical workshops,
                  vendor training,
                  and continuous engineering development.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-users"></i>

                <h4>

                  Collaboration

                </h4>

                <p>

                  Join multidisciplinary teams solving complex engineering
                  challenges for leading organizations.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-chart-line"></i>

                <h4>

                  Growth

                </h4>

                <p>

                  Clear career pathways,
                  leadership opportunities,
                  and exposure to strategic national projects.

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

              <img src="/images/careers/team-work.webp"
                className="w-full h-auto object-cover rounded shadow aspect-video"
                alt="Engineering Team" />

            </div>

            <div className="w-full lg:w-1/2 px-4">

              <h6 className="section-subtitle">

                OUR CULTURE

              </h6>

              <h2>

                People First.
                Engineering Excellence Always.

              </h2>

              <p>

                We foster an environment built on integrity,
                collaboration,
                technical excellence,
                continuous improvement,
                and customer success.

              </p>

              <p>

                Every employee is encouraged to contribute ideas,
                develop innovative solutions,
                share knowledge,
                and pursue lifelong professional growth.

              </p>

              <p>

                Our culture combines entrepreneurial thinking with disciplined
                engineering execution,
                allowing our teams to solve complex technical challenges while
                maintaining the highest quality standards.

              </p>

            </div>

          </div>

        </div>

      </section>





      <section className="bg-navy py-20">

        <div className="container mx-auto px-8">

          <div className="text-center mb-12">

            <h6 className="section-subtitle">

              EARLY CAREERS

            </h6>

            <h2>

              Graduate & Internship Programs

            </h2>

          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6">

            <div className="w-full lg:w-1/2 px-4">

              <div className="project-card">

                <img src="/images/careers/graduate-engineer.webp"
                  className="max-w-full h-auto"
                  alt="Graduates" />

                <div className="project-content">

                  <h3>

                    Graduate Engineers

                  </h3>

                  <p>

                    Start your engineering career working alongside experienced
                    professionals in automation,
                    instrumentation,
                    networking,
                    cybersecurity,
                    and smart infrastructure projects.

                  </p>

                  <ul>

                    <li>Structured onboarding</li>

                    <li>Mentoring program</li>

                    <li>Vendor certifications</li>

                    <li>Hands-on project experience</li>

                  </ul>

                </div>

              </div>

            </div>

            <div className="w-full lg:w-1/2 px-4">

              <div className="project-card">

                <img src="/images/careers/young-engineers.webp"
                  className="max-w-full h-auto"
                  alt="Internship" />

                <div className="project-content">

                  <h3>

                    Internships

                  </h3>

                  <p>

                    Gain practical engineering experience through structured
                    internship opportunities supporting real customer projects.

                  </p>

                  <ul>

                    <li>Engineering exposure</li>

                    <li>Field experience</li>

                    <li>Technical workshops</li>

                    <li>Career mentoring</li>

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

              EXPERIENCED PROFESSIONALS

            </h6>

            <h2>

              Advance Your Engineering Career

            </h2>

            <p>

              Cyber Solutions welcomes experienced engineers,
              consultants,
              project managers,
              and technology specialists who are passionate about delivering
              world-class engineering solutions across critical industries.

            </p>

          </div>

          <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

            <div className="w-full lg:w-1/2 px-4">

              <img src="/images/careers/company-culture.webp"
                className="w-full h-auto object-cover rounded shadow aspect-video"
                alt="Experienced Engineers" />

            </div>

            <div className="w-full lg:w-1/2 px-4">

              <h3>

                Lead Complex Engineering Projects

              </h3>

              <p>

                Work on high-value projects involving Industrial Automation,
                OT Cybersecurity,
                Industrial Networking,
                Instrumentation,
                Smart Infrastructure,
                Enterprise IT,
                Data Centers,
                and Digital Transformation initiatives.

              </p>

              <p>

                Our senior professionals contribute to solution architecture,
                engineering design,
                technical leadership,
                customer engagement,
                and strategic innovation.

              </p>

              <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 mt-8">

                <div className="w-full md:w-1/2 px-4">

                  <ul>

                    <li>Project Leadership</li>

                    <li>Solution Architecture</li>

                    <li>Customer Consulting</li>

                    <li>Technical Mentoring</li>

                  </ul>

                </div>

                <div className="w-full md:w-1/2 px-4">

                  <ul>

                    <li>Innovation Programs</li>

                    <li>R&D Initiatives</li>

                    <li>Vendor Collaboration</li>

                    <li>Strategic Projects</li>

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

              EMPLOYEE BENEFITS

            </h6>

            <h2>

              Supporting Your Professional Journey

            </h2>

          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6">

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-award"></i>

                <h4>

                  Professional Development

                </h4>

                <p>

                  Continuous technical training,
                  international certifications,
                  leadership programs,
                  and vendor-sponsored education.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-user-graduate"></i>

                <h4>

                  Career Growth

                </h4>

                <p>

                  Structured career progression,
                  technical specialization,
                  project leadership,
                  and management opportunities.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-globe"></i>

                <h4>

                  Innovative Projects

                </h4>

                <p>

                  Work on automation,
                  smart infrastructure,
                  digital transformation,
                  and industrial cybersecurity initiatives.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-heart"></i>

                <h4>

                  Employee Wellbeing

                </h4>

                <p>

                  Supportive work environment,
                  employee engagement initiatives,
                  health-focused programs,
                  and work-life balance.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-users-gear"></i>

                <h4>

                  Collaborative Teams

                </h4>

                <p>

                  Cross-functional engineering teams sharing expertise,
                  knowledge,
                  and innovation across every project.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-lightbulb"></i>

                <h4>

                  Innovation Culture

                </h4>

                <p>

                  Encouraging creativity,
                  continuous improvement,
                  research,
                  and engineering excellence.

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

              <img src="/images/careers/training-session.webp"
                className="w-full h-auto object-cover rounded shadow aspect-video"
                alt="Training" />

            </div>

            <div className="w-full lg:w-1/2 px-4">

              <h6 className="section-subtitle">

                LEARNING & DEVELOPMENT

              </h6>

              <h2>

                Continuous Learning Never Stops

              </h2>

              <p>

                Technology evolves rapidly,
                and so do we.
                Cyber Solutions invests in continuous professional development
                to ensure our engineers remain at the forefront of industrial
                innovation.

              </p>

              <p>

                Employees are encouraged to pursue globally recognized
                certifications,
                participate in technical workshops,
                attend industry conferences,
                and collaborate with leading technology partners.

              </p>

              <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 mt-8">

                <div className="w-full md:w-1/2 px-4">

                  <ul>

                    <li>PMP</li>

                    <li>IEC 62443</li>

                    <li>Cisco</li>

                    <li>Microsoft</li>

                  </ul>

                </div>

                <div className="w-full md:w-1/2 px-4">

                  <ul>

                    <li>Schneider Electric</li>

                    <li>Siemens</li>

                    <li>ABB</li>

                    <li>Honeywell</li>

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

              CAREER PATHS

            </h6>

            <h2>

              Engineering Disciplines

            </h2>

          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6">

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-microchip"></i>

                <h4>

                  Automation

                </h4>

                <p>

                  PLC,
                  SCADA,
                  DCS,
                  Advanced Process Control,
                  Industrial Automation.

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
                  Enterprise Networks,
                  Fiber,
                  Wireless,
                  Network Security.

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

                  Operational Technology,
                  Risk Assessment,
                  Firewalls,
                  Industrial Security.

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
                  Cloud,
                  Data Centers.

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

              OUR PEOPLE

            </h6>

            <h2>

              What Our Team Says

            </h2>

          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6">

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="testimonial-card">

                <p>

                  "The diversity of engineering projects and the opportunity to
                  work with cutting-edge technologies have accelerated my
                  professional growth."

                </p>

                <hr />

                <h5>

                  Senior Automation Engineer

                </h5>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="testimonial-card">

                <p>

                  "Cyber Solutions encourages continuous learning and gives us
                  the freedom to innovate while maintaining world-class
                  engineering standards."

                </p>

                <hr />

                <h5>

                  Cybersecurity Consultant

                </h5>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="testimonial-card">

                <p>

                  "The collaborative environment and exposure to strategic
                  projects make every day an opportunity to learn something
                  new."

                </p>

                <hr />

                <h5>

                  Project Engineer

                </h5>

              </div>

            </div>

          </div>

        </div>

      </section>





      <section className="bg-gray-50 text-navy py-20">

        <div className="container mx-auto px-8">

          <div className="text-center mb-12">

            <h6 className="section-subtitle">

              EXPERIENCED PROFESSIONALS

            </h6>

            <h2>

              Advance Your Engineering Career

            </h2>

            <p>

              Cyber Solutions welcomes experienced engineers,
              consultants,
              project managers,
              automation specialists,
              cybersecurity professionals,
              network engineers,
              and technology experts who are passionate about delivering
              high-quality engineering solutions across Saudi Arabia.

            </p>

          </div>

          <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 items-center">

            <div className="w-full lg:w-1/2 px-4">

              <img src="/images/careers/company-culture.webp"
                className="w-full h-auto object-cover rounded shadow aspect-video"
                alt="Experienced Engineers" />

            </div>

            <div className="w-full lg:w-1/2 px-4">

              <h3>

                Lead Complex Engineering Projects

              </h3>

              <p>

                Our senior professionals participate in solution architecture,
                engineering design,
                customer consulting,
                technical leadership,
                project execution,
                commissioning,
                and long-term customer support.

              </p>

              <p>

                Working at Cyber Solutions means contributing to industrial
                automation,
                OT cybersecurity,
                data centers,
                industrial networking,
                smart infrastructure,
                instrumentation,
                and digital transformation projects that directly support
                Saudi Vision 2030.

              </p>

              <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 mt-8">

                <div className="w-full md:w-1/2 px-4">

                  <ul>

                    <li>Solution Architecture</li>

                    <li>Technical Leadership</li>

                    <li>Project Management</li>

                    <li>Customer Consulting</li>

                  </ul>

                </div>

                <div className="w-full md:w-1/2 px-4">

                  <ul>

                    <li>Innovation Programs</li>

                    <li>R&D Activities</li>

                    <li>Vendor Collaboration</li>

                    <li>Engineering Excellence</li>

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

              EMPLOYEE BENEFITS

            </h6>

            <h2>

              Supporting Your Professional Journey

            </h2>

          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6">

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-user-graduate"></i>

                <h4>

                  Continuous Learning

                </h4>

                <p>

                  Technical workshops,
                  professional certifications,
                  vendor training,
                  engineering seminars,
                  and continuous development programs.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-award"></i>

                <h4>

                  Career Development

                </h4>

                <p>

                  Clear career progression,
                  leadership opportunities,
                  technical specialization,
                  and professional mentoring.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-lightbulb"></i>

                <h4>

                  Innovation Culture

                </h4>

                <p>

                  An engineering environment that encourages creativity,
                  continuous improvement,
                  knowledge sharing,
                  and innovative thinking.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-users"></i>

                <h4>

                  Collaborative Teams

                </h4>

                <p>

                  Work alongside multidisciplinary engineering teams delivering
                  complex industrial technology projects.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-globe"></i>

                <h4>

                  National Projects

                </h4>

                <p>

                  Contribute to strategic initiatives supporting Saudi Arabia's
                  industrial modernization and digital transformation.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-handshake"></i>

                <h4>

                  Supportive Environment

                </h4>

                <p>

                  Integrity,
                  respect,
                  collaboration,
                  and employee wellbeing are at the heart of our culture.

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

              <img src="/images/careers/training-session.webp"
                className="w-full h-auto object-cover rounded shadow aspect-video"
                alt="Training" />

            </div>

            <div className="w-full lg:w-1/2 px-4">

              <h6 className="section-subtitle">

                LEARNING & DEVELOPMENT

              </h6>

              <h2>

                Investing in Engineering Excellence

              </h2>

              <p>

                Technology evolves rapidly,
                and so do our engineers.

              </p>

              <p>

                Cyber Solutions encourages every employee to pursue
                professional certifications,
                vendor qualifications,
                technical training,
                industry conferences,
                and continuous learning opportunities that strengthen both
                technical expertise and leadership capabilities.

              </p>

              <p>

                We believe investing in people is essential to delivering
                world-class engineering services.

              </p>

            </div>

          </div>

        </div>

      </section>





      <section id="vacancies" className="bg-navy py-20">

        <div className="container mx-auto px-8">

          <div className="text-center mb-12">

            <h6 className="section-subtitle">

              CURRENT OPPORTUNITIES

            </h6>

            <h2>

              Join Our Growing Team

            </h2>

            <p>

              We are continuously looking for talented professionals who
              share our passion for innovation,
              engineering excellence,
              and secure digital transformation.

            </p>

          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6">

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="project-card">

                <div className="project-content">

                  <span className="project-tag">

                    Engineering

                  </span>

                  <h3>

                    Automation Engineer

                  </h3>

                  <p>

                    PLC,
                    SCADA,
                    commissioning,
                    control systems,
                    and industrial automation projects.

                  </p>

                  <a href="/contact"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all hover:shadow-glow btn-sm">

                    Apply Now

                  </a>

                </div>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="project-card">

                <div className="project-content">

                  <span className="project-tag">

                    Cybersecurity

                  </span>

                  <h3>

                    OT Cybersecurity Engineer

                  </h3>

                  <p>

                    Industrial cybersecurity,
                    IEC 62443,
                    network security,
                    risk assessments,
                    and secure architectures.

                  </p>

                  <a href="/contact"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all hover:shadow-glow btn-sm">

                    Apply Now

                  </a>

                </div>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/3 px-4">

              <div className="project-card">

                <div className="project-content">

                  <span className="project-tag">

                    Infrastructure

                  </span>

                  <h3>

                    Network & Systems Engineer

                  </h3>

                  <p>

                    Enterprise networking,
                    data centers,
                    servers,
                    virtualization,
                    and infrastructure deployment.

                  </p>

                  <a href="/contact"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-all hover:shadow-glow btn-sm">

                    Apply Now

                  </a>

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

              OUR HIRING PROCESS

            </h6>

            <h2>

              Simple, Transparent, Professional

            </h2>

          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6">

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-file-lines"></i>

                <h4>

                  Apply

                </h4>

                <p>

                  Submit your application
                  and supporting documents.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-user-check"></i>

                <h4>

                  Review

                </h4>

                <p>

                  Our recruitment team evaluates
                  your experience and qualifications.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-comments"></i>

                <h4>

                  Interview

                </h4>

                <p>

                  Meet our engineering leaders
                  and discuss your technical expertise.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-rocket"></i>

                <h4>

                  Welcome

                </h4>

                <p>

                  Join Cyber Solutions and begin your engineering journey.

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

              WHY WORK WITH US

            </h6>

            <h2>

              Building Careers That Shape the Future

            </h2>

            <p>

              At Cyber Solutions, we believe exceptional engineering starts
              with exceptional people. We provide an environment where
              innovation, collaboration, and continuous improvement enable
              every employee to reach their full potential.

            </p>

          </div>

          <div className="flex flex-wrap -mx-4 gap-y-6">

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-microchip"></i>

                <h4>

                  Latest Technologies

                </h4>

                <p>

                  Work with Industrial Automation,
                  AI,
                  Industrial IoT,
                  Digital Infrastructure,
                  and OT Cybersecurity technologies.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-network-wired"></i>

                <h4>

                  Large-Scale Projects

                </h4>

                <p>

                  Participate in mission-critical projects supporting major
                  industrial organizations throughout the Kingdom.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-people-group"></i>

                <h4>

                  Team Collaboration

                </h4>

                <p>

                  Join experienced multidisciplinary teams that value knowledge
                  sharing and technical excellence.

                </p>

              </div>

            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4">

              <div className="glass p-8 h-full transition-transform hover:-translate-y-2 hover:shadow-card-hover">

                <i className="fas fa-ranking-star"></i>

                <h4>

                  Professional Growth

                </h4>

                <p>

                  Expand your expertise through challenging engineering projects
                  and continuous learning opportunities.

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

              FREQUENTLY ASKED QUESTIONS

            </h6>

            <h2>

              Careers FAQ

            </h2>

          </div>

          <div className="w-full max-w-3xl mx-auto space-y-4 pb-20">
            <details className="group border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ listStyle: "none" }}>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-navy transition-colors hover:bg-gray-50 list-none">
                <h3 className="font-semibold text-lg md:text-xl m-0">Do you offer internships?</h3>
                <span className="shrink-0 rounded-full bg-blue-100 p-2 text-primary sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="p-6 border-t border-gray-100 bg-gray-50/50 text-gray-700 leading-relaxed">
                Yes. Cyber Solutions welcomes students and recent graduates through structured internship opportunities that provide practical engineering experience.
              </div>
            </details>

            <details className="group border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ listStyle: "none" }}>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-navy transition-colors hover:bg-gray-50 list-none">
                <h3 className="font-semibold text-lg md:text-xl m-0">Can I apply even if no suitable vacancy is listed?</h3>
                <span className="shrink-0 rounded-full bg-blue-100 p-2 text-primary sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="p-6 border-t border-gray-100 bg-gray-50/50 text-gray-700 leading-relaxed">
                Absolutely. We continuously review applications from talented professionals for future opportunities.
              </div>
            </details>

            <details className="group border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ listStyle: "none" }}>
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-navy transition-colors hover:bg-gray-50 list-none">
                <h3 className="font-semibold text-lg md:text-xl m-0">Which engineering disciplines do you recruit?</h3>
                <span className="shrink-0 rounded-full bg-blue-100 p-2 text-primary sm:p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-180" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </summary>
              <div className="p-6 border-t border-gray-100 bg-gray-50/50 text-gray-700 leading-relaxed">
                We recruit professionals across Industrial Automation, Instrumentation, OT Cybersecurity, Networking, Data Centers, Software, Project Management, and Digital Infrastructure.
              </div>
            </details>
          </div>

        </div>
      </section>





      <section className="relative z-10 py-24 bg-navy-light/20">

        <div className="container mx-auto px-8">

          <div className="flex flex-wrap gap-y-12 lg:gap-y-0 -mx-4 justify-center">

            <div className="w-full lg:w-3/4 mx-auto text-center space-y-6">

              <h2 className="m-0 text-white">

                Ready to Build the Future With Us?

              </h2>

              <p className="text-gray-light text-lg">

                If you are passionate about engineering,
                innovation,
                and secure digital transformation,
                we would love to hear from you.

              </p>

              <div className="pt-4">
                <a href="/contact"

                  className="inline-block bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all hover:shadow-glow text-lg px-10 py-4">

                  Apply Today

                </a>
              </div>

            </div>

          </div>

        </div>

      </section>




















    </GSAPWrapper>
  );
}
