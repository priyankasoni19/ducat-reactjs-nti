import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const courseLinks = [
    { name: 'Java Training', href: '/courses/java' },
    { name: 'Python Training', href: '/courses/python' },
    { name: 'Data Science Course', href: '/courses/data-science' },
    { name: 'Software Testing', href: '/courses/software-testing' },
    { name: 'Digital Marketing', href: '/courses/digital-marketing' },
    { name: 'Full Stack Development', href: '/courses/full-stack' },
  ];

  const usefulLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Placements', href: '/placements' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            {/* Replace with your logo */}
            <div className="text-2xl font-bold text-primary">NTI TECH</div>
            <p className="mt-4 text-sm leading-relaxed">
              NTI TECH India is a leading IT training institute providing high-quality education and placement assistance to students and professionals.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" aria-label="YouTube" className="hover:text-accent transition-colors"><Youtube size={20} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Popular Courses</h4>
            <ul className="space-y-2">
              {courseLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Contact Info</h4>
            <address className="not-italic text-sm space-y-3">
              <p className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 shrink-0 text-accent" />
                <span>Lig 2\21\422, Nehru, Nagar, Huzur, Rewa, Madhya Pradesh 486001</span>
              </p>
              <p className="flex items-center">
                <Phone size={16} className="mr-2 shrink-0 text-accent" />
                <a href="tel:09174253016" className="hover:text-accent transition-colors">091742 53016</a>
              </p>
              <p className="flex items-center">
                <Mail size={16} className="mr-2 shrink-0 text-accent" />
                <a href="mailto:info@ntitechacademy.com" className="hover:text-accent transition-colors">info@ntitechacademy.com</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary/30 pt-8 text-center text-xs">
          <p>&copy; {currentYear} NTI TECH India. All rights reserved. Designed with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
