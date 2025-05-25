import React from 'react';
import { Star } from 'lucide-react';

// Replace with your own Card components or use a UI library if needed
const Card = ({ children, className }) => (
  <div className={`rounded-lg overflow-hidden shadow-md bg-white ${className}`}>{children}</div>
);

const CardHeader = ({ children, className }) => (
  <div className={`flex items-center p-4 border-b ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const testimonials = [
  {
    name: 'Priya Sharma',
    course: 'Full Stack Developer',
    quote: "Ducat's training was exceptional. The trainers are knowledgeable, and the placement support helped me get a job at a top MNC. Highly recommended!",
    image: 'https://placehold.co/100x100.png?text=PS',
    imageHint: 'student portrait',
    rating: 5,
  },
  {
    name: 'Amit Singh',
    course: 'Data Science',
    quote: 'The Data Science course at NTI provided in-depth knowledge and practical skills. The projects were very helpful. Thank you, NTI !',
    image: 'https://placehold.co/100x100.png?text=AS',
    imageHint: 'student smiling',
    rating: 5,
  },
  {
    name: 'Ritu Verma',
    course: 'Software Testing',
    quote: "I'm grateful to NTI for their excellent Software Testing program. The mock interviews and resume workshops were invaluable.",
    image: 'https://placehold.co/100x100.png?text=RV',
    imageHint: 'professional headshot',
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our successful alumni about their experience at NTI Tech Academy India.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardHeader className="flex-row space-x-4 pb-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                  data-ai-hint={testimonial.imageHint}
                />
                <div>
                  <h4 className="font-semibold text-lg text-primary">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.course}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <blockquote className="text-sm text-muted-foreground italic border-l-4 border-accent pl-4">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
