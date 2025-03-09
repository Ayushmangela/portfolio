
import { GraduationCap, Camera, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import myImage from '../assets/img1.png';

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 z-10">
        <AnimatedSection className="flex-1 text-center md:text-left" animation="fade-in-left">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-6">
            My Portfolio
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Hi, I'm <span className="text-primary">Archi</span>
            <br />Student & Photography Enthusiast
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl">
            Exploring the world through education and the lens of my camera. Join me on this journey of learning and creating memories.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm">Computer Science Student</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm">Photography Lover</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm">Adventure Seeker</span>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="flex-1" animation="fade-in-right">
          <div className="relative">
            <div className="w-64 h-80 md:w-72 md:h-96 bg-secondary rounded-2xl overflow-hidden relative">
              <img 
                src={myImage}
                alt="Sarah" 
                className="w-full h-full object-cover image-mask animate-image-shine"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-2xl -z-10" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
