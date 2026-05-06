import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, Send, ArrowRight, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Success Stories', href: '/testimonies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];



  const resources = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: '#1877F2' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: '#E4405F' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: '#FF0000' }
  ];

  const stats = [
    { value: '1200+', label: 'Students' },
    { value: '92%', label: 'Success Rate' },
    { value: '6+', label: 'Years' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0B1922] to-[#13262F] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-[#EE7B30] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#2E8B57] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      {/* Newsletter Section */}
      <div className="relative border-b border-[#C9D1D9]/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Stay Updated with{' '}
                <span className="bg-gradient-to-r from-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
                  Coach lilian's community
                </span>
              </h3>
              <p className="text-[#C9D1D9] text-lg">
                Get weekly tips, job opportunities, and exclusive resources delivered to your inbox.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#F9F6F1]/10 border border-[#C9D1D9]/20 rounded-full px-6 py-4 text-white placeholder-[#C9D1D9]/50 focus:outline-none focus:border-[#EE7B30] transition-all duration-300"
              />
              <button className="group bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(238,123,48,0.5)] hover:scale-105 flex items-center justify-center gap-2">
                <span>Subscribe</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#EE7B30] to-[#C9D1D9] bg-clip-text text-transparent">
                Coach Lilian's community
              </h2>
              <p className="text-[#C9D1D9] mt-4 leading-relaxed">
                Empowering individuals to achieve remote career success and financial freedom through expert coaching and comprehensive training programs.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:hello@classsee.com" className="flex items-center gap-3 text-[#C9D1D9] hover:text-[#EE7B30] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#EE7B30]/10 flex items-center justify-center group-hover:bg-[#EE7B30]/20 transition-all">
                  <Mail className="w-5 h-5 text-[#EE7B30]" />
                </div>
                <span>hello@globaltalent.com</span>
              </a>
              
              <a href="tel:+2348012345678" className="flex items-center gap-3 text-[#C9D1D9] hover:text-[#EE7B30] transition-colors group">
                <div className="w-10 h-10 rounded-full bg-[#EE7B30]/10 flex items-center justify-center group-hover:bg-[#EE7B30]/20 transition-all">
                  <Phone className="w-5 h-5 text-[#EE7B30]" />
                </div>
                <span>+234 803 461 9094</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-full bg-[#F9F6F1]/10 border border-[#C9D1D9]/20 flex items-center justify-center hover:border-[#EE7B30] hover:bg-[#EE7B30] transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-[#C9D1D9] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#C9D1D9] hover:text-[#EE7B30] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>



          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-[#C9D1D9] hover:text-[#EE7B30] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{resource.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6 mb-12 p-8 bg-gradient-to-r from-[#F9F6F1]/5 to-[#F9F6F1]/10 rounded-3xl border border-[#C9D1D9]/10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-[#EE7B30] mb-2">{stat.value}</div>
              <div className="text-[#C9D1D9] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C9D1D9]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#C9D1D9] text-sm text-center md:text-left">
              © {new Date().getFullYear()} Coach Lilian's community. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-[#C9D1D9] hover:text-[#EE7B30] transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-[#C9D1D9] hover:text-[#EE7B30] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#EE7B30] to-[#EE7B30]/80 text-white rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(238,123,48,0.5)] transition-all duration-300 hover:scale-110 flex items-center justify-center group z-50"
        aria-label="Scroll to top"
      >
        <ArrowRight className="w-5 h-5 -rotate-90 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}