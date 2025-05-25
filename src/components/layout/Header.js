import { useState, useEffect } from 'react';
import { Search, Phone, Mail, Menu, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';
import Logo from './Logo'; // Adjust this import based on your file structure
import NavLink from './NavLink';

import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Sheet, SheetContent, SheetTrigger } from '../ui/Sheet';
import { Separator } from '../ui/Separator';


const navItems = [
  { name: 'Home', href: '/' },
  { name: 'All Courses', href: '/courses' },
  { name: 'Placements', href: '/placements' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Online Registration', href: '/online-registration' },
  { name: 'Certificate', href: '/certificate' },
];

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const TopBar = () => (
    <div className="bg-secondary text-secondary-foreground py-2 px-4 md:px-8 text-xs">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <a href="tel:+919999993213" className="flex items-center hover:text-accent transition-colors">
            <Phone size={14} className="mr-1" /> 9174253016
          </a>
          <a href="mailto:info@ntitechacademy.com" className="flex items-center hover:text-accent transition-colors">
            <Mail size={14} className="mr-1" /> info@ntitechacademy.com
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook size={16} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter size={16} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin size={16} /></a>
          <a href="#" aria-label="YouTube" className="hover:text-accent transition-colors"><Youtube size={16} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={16} /></a>
        </div>
      </div>
    </div>
  );

  const MainNav = () => (
    <div className="bg-background/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href} className="text-sm font-medium">
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <Input type="search" placeholder="Search courses..." className="h-9 text-sm w-48" />
          <Button variant="outline" size="icon" className="h-9 w-9">
            <Search size={18} />
          </Button>
        </div>
        <div className="md:hidden">
          {isMounted && (
            <Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu size={24} />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="mb-6">
                  <Logo />
                </div>
                <Separator className="my-4" />
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      className="text-lg"
                      onClick={() => setIsMobileNavOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
                <Separator className="my-6" />
                <div className="space-y-4">
                  <Input type="search" placeholder="Search courses..." className="h-10 text-sm" />
                  <Button variant="default" className="w-full">
                    Search <Search size={18} className="ml-2" />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <header>
      <TopBar />
      <MainNav />
    </header>
  );
};

export default Header;
