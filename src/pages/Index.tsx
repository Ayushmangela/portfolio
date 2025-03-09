
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Hobbies from '@/components/Hobbies';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section id="about" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-4">
              About Me
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">
              Passionate Student & Creative Soul
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              As a student pursuing a degree in Computer Science, I balance my academic pursuits with creative hobbies that feed my soul. Photography has become my favorite way to document life's journey.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not studying or coding, you'll find me behind the camera, exploring new places, or immersed in a good book. I believe in continuous learning, both inside and outside the classroom.
            </p>
          </AnimatedSection>
        </div>
        <div className="section-divider"></div>
      </section>
      
      <Education />
      <Hobbies />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
