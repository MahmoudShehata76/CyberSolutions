import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold mb-4 text-white">Cyber Solutions</h3>
            <p className="text-gray-light leading-relaxed pr-0 lg:pr-8">
              Engineering Secure Digital Infrastructure
              for Critical Industries. Empowering organizations with robust and resilient technology.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/75 hover:text-primary transition-all hover:-translate-y-1"><i className="fab fa-linkedin text-2xl"></i></a>
              <a href="#" className="text-white/75 hover:text-primary transition-all hover:-translate-y-1"><i className="fab fa-twitter text-2xl"></i></a>
              <a href="#" className="text-white/75 hover:text-primary transition-all hover:-translate-y-1"><i className="fab fa-youtube text-2xl"></i></a>
            </div>
          </div>
          
          <div className="lg:col-span-3 lg:col-start-6">
            <h5 className="text-xl font-bold mb-4 text-white">Quick Links</h5>
            <ul className="flex flex-col space-y-3">
              <li><Link href="/about" className="text-gray-light hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="text-gray-light hover:text-primary transition-colors">Offered Solutions</Link></li>
              <li><Link href="/industries" className="text-gray-light hover:text-primary transition-colors">Industries</Link></li>
              <li><Link href="/projects" className="text-gray-light hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/insights" className="text-gray-light hover:text-primary transition-colors">Insights</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <h5 className="text-xl font-bold mb-4 text-white">Contact Us</h5>
            <p className="text-gray-light mb-4">
              Have a project in mind? Let&apos;s talk.<br />
              <a href="mailto:info@CyberSolutions.com.sa" className="text-secondary font-semibold hover:text-white transition-colors block mt-1">
                info@CyberSolutions.com.sa
              </a>
            </p>
            <Link href="/contact" className="inline-block border border-white/20 text-white hover:bg-white hover:text-navy hover:border-white transition-all rounded-full px-6 py-2.5 font-medium mt-2">
              Get in Touch
            </Link>
          </div>
        </div>
        
        <hr className="border-white/10 my-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray">
          <p className="mb-4 md:mb-0">
            © {new Date().getFullYear()} Cyber Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
