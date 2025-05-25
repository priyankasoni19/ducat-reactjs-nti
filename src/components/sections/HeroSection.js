import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router
import { ChevronRight } from 'lucide-react';
// Import your Button component if you have it, or use a standard button

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary via-primary/90 to-secondary text-primary-foreground py-20 md:py-32 min-h-[70vh] flex items-center overflow-hidden">
      <img
        src="https://placehold.co/1920x1080.png?text=Tech+Education+Banner"
        alt="NTI Tech India IT Training"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight shadow-sm">
          Launch Your Career in IT with NTI Tech India
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-primary-foreground/90">
          India's leading IT training institute offering job-oriented courses in cutting-edge technologies.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Explore Courses <ChevronRight size={20} className="ml-2" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg text-primary-foreground border border-primary-foreground/50 hover:bg-primary-foreground/10 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Request a Callback
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
