
import { Camera, Book, Music, Palette, Code, Bike } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const hobbies = [
  {
    title: 'Photography',
    description: 'Capturing moments and exploring visual storytelling through my camera lens.',
    icon: <Camera className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Reading',
    description: 'Diving into fiction and non-fiction books to expand my knowledge and imagination.',
    icon: <Book className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Music',
    description: 'Playing piano and listening to a wide range of musical genres to relax and inspire.',
    icon: <Music className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Digital Art',
    description: 'Creating digital illustrations and exploring different artistic styles.',
    icon: <Palette className="w-6 h-6 text-primary" />,
  },
  {
    title: 'Cycling',
    description: 'Exploring nature and staying active through regular cycling adventures.',
    icon: <Bike className="w-6 h-6 text-primary" />,
  },
];

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              What I Love To Do
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">My Hobbies & Interests</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exploring creative outlets and activities that bring joy and balance to my life.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full border border-border/50 card-hover">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  {hobby.icon}
                </div>
                <h3 className="font-medium text-xl mb-2">{hobby.title}</h3>
                <p className="text-muted-foreground">{hobby.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
};

export default Hobbies;
