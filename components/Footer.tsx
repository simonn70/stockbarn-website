import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
 
} from "lucide-react";


const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <h2 className="text-2xl font-bold">Stockbarn</h2>
            <p className="text-sm text-blue-100">
              Your trusted market service provider.
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-blue-100 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-blue-400 pt-6 text-sm text-blue-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Stockbarn. All rights reserved.</p>
            </div>
            <div className="text-center md:text-right">
              <a
                href="mailto:stockbarnhelp@gmail.com"
                className="hover:text-white"
              >
                stockbarnhelp@gmail.com
              </a>
              <span className="mx-2">|</span>
              <a href="tel:+2330544199680" className="hover:text-white">
                +233 (054) 419 9680
              </a>
              <span className="mx-2">|</span>
              <span>Accra, Ghana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
