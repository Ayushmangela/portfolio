
import { useState } from 'react';
import { Image } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    title: 'Quiet Moments',
    category: 'Lifestyle',
    description: 'One peaceful afternoon during my final semester, I found this perfect spot by the window. The sunlight was streaming in just right, creating this serene atmosphere that helped me focus on my studies while still feeling connected to the outside world.'
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    title: 'Creative Space',
    category: 'Workspace',
    description: 'I designed this little corner of my room to be my creative sanctuary. It\'s where I brainstorm project ideas, sketch designs, and let my imagination run free. The plants and natural light help keep my mind fresh and inspired throughout the day.'
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    title: 'Collaboration',
    category: 'People',
    description: 'This was taken during our team project for the Computer Science fair. We spent weeks collaborating on an AI-driven application that ended up winning second place! The energy in the room that day was incredible - everyone bringing their unique skills to the table.'
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'Focused Design',
    category: 'Technology',
    description: 'Late night coding session during my web development course. I was working on my first major project that combined both frontend and backend skills. The satisfaction of seeing everything finally work after hours of debugging was absolutely worth the lack of sleep!'
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              Through My Lens
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-4">Photography Memories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of moments captured through my camera that tell stories and preserve memories.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <AnimatedSection 
              key={index} 
              className="group" 
              delay={index * 150}
              animation={index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}
            >
              <div 
                className="relative overflow-hidden rounded-2xl cursor-pointer card-hover"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.url} 
                    alt={image.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-medium text-primary-foreground/80 bg-primary/80 px-2 py-1 rounded-full">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-medium mt-2">{image.title}</h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="max-w-4xl max-h-[90vh] relative bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2">
                <div className="h-[300px] md:h-[500px] overflow-hidden">
                  <img 
                    src={selectedImage.url} 
                    alt={selectedImage.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <div>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-2">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-2xl font-semibold mb-4">{selectedImage.title}</h3>
                    <p className="text-muted-foreground">{selectedImage.description}</p>
                  </div>
                  <button 
                    className="mt-auto ml-auto text-primary hover:text-primary/80 transition-colors"
                    onClick={() => setSelectedImage(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
              <button 
                className="absolute top-4 right-4 text-gray-700 bg-white/90 p-2 rounded-full shadow-md"
                onClick={() => setSelectedImage(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
