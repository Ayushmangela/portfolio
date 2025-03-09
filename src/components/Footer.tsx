
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/80 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="font-serif text-2xl font-medium text-primary mb-4">Sarah</div>
        <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">
          Student, photographer, and life-long learner capturing moments and creating memories.
        </p>
        <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-primary fill-primary" />
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
