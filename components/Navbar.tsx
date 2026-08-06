"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    // Basic Navbar scroll effect from old app.js
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img src="/images/logo.png" height="60" alt="Cyber Solutions" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/" ? "active" : ""}`} href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/about" ? "active" : ""}`} href="/about">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
              >
                Offered Solutions
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/solutions#automation">
                    Industrial Automation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/solutions#plc">
                    PLC & SCADA
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/solutions#instrumentation">
                    Instrumentation
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/solutions#cyber">
                    OT Cybersecurity
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/solutions#smart">
                    Smart Infrastructure
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/solutions#datacenter">
                    Data Centers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/solutions#network">
                    Industrial Networking
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/industries" ? "active" : ""}`} href="/industries">
                Industries
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/projects" ? "active" : ""}`} href="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/insights" ? "active" : ""}`} href="/insights">
                Insights
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/careers" ? "active" : ""}`} href="/careers">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary ms-3" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
