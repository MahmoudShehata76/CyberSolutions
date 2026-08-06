import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h3>Cyber Solutions</h3>
            <p>
              Engineering Secure Digital Infrastructure
              for Critical Industries.
            </p>
          </div>
          <div className="col-lg-3">
            <h5>Quick Links</h5>
            <ul className="footer-links" style={{ listStyle: "none", padding: 0 }}>
              <li><Link href="/about" style={{ color: "#c6d3df", textDecoration: "none" }}>About</Link></li>
              <li><Link href="/solutions" style={{ color: "#c6d3df", textDecoration: "none" }}>Offered Solutions</Link></li>
              <li><Link href="/industries" style={{ color: "#c6d3df", textDecoration: "none" }}>Industries</Link></li>
              <li><Link href="/projects" style={{ color: "#c6d3df", textDecoration: "none" }}>Projects</Link></li>
              <li><Link href="/contact" style={{ color: "#c6d3df", textDecoration: "none" }}>Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Contact</h5>
            <p>
              Email<br />
              <strong>info@CyberSolutions.com.sa</strong>
            </p>
          </div>
        </div>
        <hr style={{ borderColor: "rgba(255,255,255,0.1)", margin: "40px 0" }} />
        <div className="text-center">
          <p style={{ color: "#a7b2bf" }}>
            © 2026 Cyber Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
