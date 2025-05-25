import React from 'react';
import { Link } from 'react-router-dom'; // Use <a> if not using React Router
import { ArrowRight } from 'lucide-react';

const courses = [
  {
    title: 'Full Stack Web Development',
    description: 'Master front-end and back-end technologies to build complete web applications.',
    image: 'https://placehold.co/600x400.png?text=Full+Stack',
    imageHint: 'web development',
    href: '/courses/full-stack',
  },
  {
    title: 'Data Science & Machine Learning',
    description: 'Unlock insights from data and build intelligent systems with Python, R, and ML algorithms.',
    image: 'https://placehold.co/600x400.png?text=Data+Science',
    imageHint: 'data analytics',
    href: '/courses/data-science',
  },
  {
    title: 'Cloud Computing (AWS/Azure)',
    description: 'Become proficient in cloud platforms like AWS and Azure for scalable solutions.',
    image: 'https://placehold.co/600x400.png?text=Cloud+Computing',
    imageHint: 'cloud server',
    href: '/courses/cloud-computing',
  },
  {
    title: 'Software Testing (Manual & Automation)',
    description: 'Ensure software quality with comprehensive testing methodologies and tools.',
    image: 'https://placehold.co/600x400.png?text=Software+Testing',
    imageHint: 'quality assurance',
    href: '/courses/software-testing',
  },
  {
    title: 'Digital Marketing',
    description: 'Learn SEO, SEM, SMM, Content Marketing and more to excel in online marketing.',
    image: 'https://placehold.co/600x400.png?text=Digital+Marketing',
    imageHint: 'social media',
    href: '/courses/digital-marketing',
  },
  {
    title: 'Java Programming',
    description: 'Build robust enterprise applications with comprehensive Java training.',
    image: 'https://placehold.co/600x400.png?text=Java',
    imageHint: 'programming code',
    href: '/courses/java',
  },
];

const CoursesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Popular Courses</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a wide range of courses designed to make you industry-ready.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="p-0">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  data-ai-hint={course.imageHint}
                />
              </div>
              <div className="flex-grow p-6">
                <h3 className="text-xl text-primary mb-2 font-semibold">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 h-20 overflow-hidden">
                  {course.description}
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  to={course.href}
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-white bg-primary hover:bg-primary/90 rounded-md text-sm font-medium transition-transform duration-300 hover:scale-105"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-lg border border-primary text-primary hover:bg-primary/10 transition-transform duration-300"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
