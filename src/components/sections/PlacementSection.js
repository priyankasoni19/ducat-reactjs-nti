import React from 'react';
import { Link } from 'react-router-dom'; // Use <a> if not using React Router
import { TrendingUp, Briefcase, Users, Star } from 'lucide-react';

const stats = [
  {
    icon: <Briefcase size={32} className="text-accent" />,
    value: '5000+',
    label: 'Companies Hiring',
  },
  {
    icon: <Users size={32} className="text-accent" />,
    value: '2 Lakh+',
    label: 'Students Placed',
  },
  {
    icon: <TrendingUp size={32} className="text-accent" />,
    value: '₹64 LPA',
    label: 'Highest Package',
  },
  {
    icon: <Star size={32} className="text-accent" />,
    value: '95%',
    label: 'Placement Record',
  },
];

const PlacementSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Dedicated Placement Support for Your Success
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Ducat, we are committed to not just training you but also helping you launch your career. Our dedicated placement cell works tirelessly to connect you with top companies.
            </p>
            <ul className="space-y-3 mb-8 text-muted-foreground">
              <li className="flex items-center"><Star size={18} className="text-accent mr-2" /> Resume Building Workshops</li>
              <li className="flex items-center"><Star size={18} className="text-accent mr-2" /> Mock Interviews and GD Practice</li>
              <li className="flex items-center"><Star size={18} className="text-accent mr-2" /> Connections with Top Recruiters</li>
              <li className="flex items-center"><Star size={18} className="text-accent mr-2" /> Regular Job Updates and Alerts</li>
            </ul>
            <Link
              to="/placements"
              className="inline-block px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-transform duration-300 hover:scale-105"
            >
              Learn More About Placements
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="shadow-lg text-center bg-card rounded-lg p-6">
                  <div className="p-3 bg-accent/10 rounded-full inline-block mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
