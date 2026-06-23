import Hero from '@/components/Hero';
import About from '@/components/About';
import Lineup from '@/components/Lineup';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Lineup />
      <Visit />
      <Footer />
    </main>
  );
}
