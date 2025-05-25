import React from 'react';
import HeroSection from './components/sections/HeroSection';
import WhyDucatSection from './components/sections/WhyDucatSection';
import CoursesSection from './components/sections/CoursesSection';
import PlacementSection from './components/sections/PlacementSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import RecruitersSection from './components/sections/RecruitersSection';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';



function App() {
  return (
    <div>
      <Header/>
      <HeroSection />
      <WhyDucatSection />
      <CoursesSection />
      <PlacementSection />
      <TestimonialsSection />
      <RecruitersSection />
       <Footer/>
    </div>
  );
}

export default App;
