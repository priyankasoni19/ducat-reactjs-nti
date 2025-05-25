import React from 'react';

const recruiters = [
  { name: 'HCL', logo: 'https://placehold.co/150x80.png?text=HCL', hint: 'company logo' },
  { name: 'Wipro', logo: 'https://placehold.co/150x80.png?text=Wipro', hint: 'tech company' },
  { name: 'Infosys', logo: 'https://placehold.co/150x80.png?text=Infosys', hint: 'corporate logo' },
  { name: 'Accenture', logo: 'https://placehold.co/150x80.png?text=Accenture', hint: 'business logo' },
  { name: 'Tech Mahindra', logo: 'https://placehold.co/150x80.png?text=Tech+Mahindra', hint: 'IT services' },
  { name: 'Capgemini', logo: 'https://placehold.co/150x80.png?text=Capgemini', hint: 'consulting firm' },
  { name: 'Cognizant', logo: 'https://placehold.co/150x80.png?text=Cognizant', hint: 'technology solutions' },
  { name: 'TCS', logo: 'https://placehold.co/150x80.png?text=TCS', hint: 'global company' },
];

const RecruitersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Top Recruiters</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We have strong ties with leading companies who trust our students' skills.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 items-center">
          {recruiters.map((recruiter) => (
            <div
              key={recruiter.name}
              className="flex justify-center items-center p-4 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={recruiter.logo}
                alt={recruiter.name}
                width="120"
                height="60"
                className="object-contain"
                data-ai-hint={recruiter.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;
