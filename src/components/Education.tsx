
import { Award, BookOpen, Star, Camera } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const educationData = [
  {
    period: '2021 - Present',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    description: 'Focusing on software development, artificial intelligence, and data structures.',
    icon: <BookOpen className="w-5 h-5 text-primary" />,
  },
  {
    period: '2019 - 2021',
    degree: 'Associate Degree in Digital Media',
    institution: 'Community College',
    description: 'Studied digital design, photography composition, and media production.',
    icon: <Camera className="w-5 h-5 text-primary" />,
  },
  {
    period: '2015 - 2019',
    degree: 'High School Diploma',
    institution: 'Westview High School',
    description: 'Specialized in STEM subjects with honors in Mathematics and Art.',
    icon: <Award className="w-5 h-5 text-primary" />,
  },
];

const achievements = [
  "Dean's List 2021-2022",
  "Photography Exhibition Winner 2020",
  "Student Leadership Award",
  "National Merit Scholarship Finalist",
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              My Academic Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Education & Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building knowledge and skills through formal education and continuous learning.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-5 gap-8 mb-16">
          <div className="md:col-span-3">
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <AnimatedSection key={index} delay={index * 200}>
                  <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/50 card-hover">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-primary">{item.period}</span>
                        <h3 className="font-medium text-xl mb-1">{item.degree}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.institution}</p>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <AnimatedSection animation="fade-in-right">
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 h-full">
                <h3 className="font-medium text-xl mb-6 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Notable Achievements
                </h3>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
};

export default Education;
