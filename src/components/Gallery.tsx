
import { useState } from 'react';
import { Image } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    title: 'Quiet Moments',
    category: 'Lifestyle',
  },
  {
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    title: 'Creative Space',
    category: 'Workspace',
  },
  {
    url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    title: 'Collaboration',
    category: 'People',
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    title: 'Focused Design',
    category: 'Technology',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                onClick={() => setSelectedImage(image.url)}
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
              className="max-w-4xl max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full h-full object-contain rounded-lg"
              />
              <button 
                className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
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
