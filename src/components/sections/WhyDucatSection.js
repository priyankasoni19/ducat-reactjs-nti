import React from 'react';
import { Briefcase, Award, Users, BookOpen, ShieldCheck, TrendingUp } from 'lucide-react';

// Placeholder Card components (replace with your own or a UI library if needed)
const Card = ({ children, className }) => (
  <div className={`rounded-lg overflow-hidden shadow-md bg-white ${className}`}>{children}</div>
);

const CardHeader = ({ children, className }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`text-xl font-bold ${className}`}>{children}</h3>
);

const features = [
  {
    icon: <Award size={40} className="text-accent" />,
    title: 'Industry-Recognized Certification',
    description: 'Gain certifications valued by top employers in the IT industry.',
  },
  {
    icon: <Briefcase size={40} className="text-accent" />,
    title: '100% Placement Assistance',
    description: 'Dedicated placement cell to help you secure your dream job.',
  },
  {
    icon: <Users size={40} className="text-accent" />,
    title: 'Expert Trainers',
    description: 'Learn from experienced industry professionals with real-world knowledge.',
  },
  {
    icon: <BookOpen size={40} className="text-accent" />,
    title: 'Comprehensive Curriculum',
    description: 'Courses designed to meet current industry demands and future trends.',
  },
  {
    icon: <ShieldCheck size={40} className="text-accent" />,
    title: 'Trusted Since 2001',
    description: 'Over two decades of excellence in IT training and education.',
  },
  {
    icon: <TrendingUp size={40} className="text-accent" />,
    title: 'Career Growth Focus',
    description: 'Equipping you with skills for continuous professional development.',
  },
];

const WhyDucatSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose NTI Tech Academy India?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing the best IT training to empower your career.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader className="flex flex-col items-center text-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDucatSection;
