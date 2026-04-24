import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Instagram, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

const PROJECTS = [
  {
    id: 1,
    title: "Mesa Verde Residence",
    category: "Residential Architecture",
    image: "https://images.unsplash.com/photo-1600585154340-be6199f7a009?auto=format&fit=crop&q=80&w=1200",
    year: "2023"
  },
  {
    id: 2,
    title: "The Glass Pavilion",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    year: "2024"
  },
  {
    id: 3,
    title: "Nordic Shelter",
    category: "Sustainable Living",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1200",
    year: "2022"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-studio-gold selection:text-white">
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
          scrolled ? "bg-studio-base/80 backdrop-blur-md py-4 border-studio-ink/5" : "bg-transparent py-8 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-black rotate-45" />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase font-sans">AURA</span>
          </motion.div>

          <div className="hidden md:flex gap-12 items-center text-[11px] uppercase tracking-[0.2em] font-medium text-studio-ink/40">
            {['Services', 'Work', 'Vision', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-studio-ink transition-colors">
                {item}
              </a>
            ))}
          </div>

          <button className="px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Estimate Project
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-studio-base z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Services', 'Work', 'Vision', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-serif"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-studio-ink/10 mt-32 mx-12 hidden md:block" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-1 hidden lg:flex flex-col items-center">
            <span className="vertical-text text-studio-muted">EST. MMXXIV</span>
          </div>

          <div className="lg:col-span-7 pt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-sm text-[10px] uppercase tracking-[0.3em] bg-white/5 text-white/40">
                Design & Architecture Studio
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-[110px] leading-[0.9] mb-8 italic">
                Crafting Spaces <br />
                <span className="not-italic font-bold text-white/20 block mt-4">for Digital Essence.</span>
              </h1>
              <p className="max-w-md text-white/50 leading-relaxed font-light mb-10 text-xl">
                We specialize in creating high-end digital environments that blend Swiss minimalism with architectural precision.
              </p>
              <button className="group flex items-center gap-4 text-[11px] uppercase tracking-[0.2em] font-semibold border border-white/20 px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all duration-500">
                View Portfolio
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="oval-mask lg:translate-y-20 relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" 
                alt="Portrait Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-studio-gold/30 rounded-full -z-0 hidden md:block" />
          </div>
        </div>
      </header>

      {/* Philosophy Section */}
      <section id="vision" className="py-32 bg-white/5 text-studio-ink overflow-hidden border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-full aspect-square object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" 
                  alt="Detail 1"
                />
                <div className="h-40 border border-white/10 rounded-t-full" />
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-40 border border-white/10 rounded-b-full" />
                <img 
                  src="https://images.unsplash.com/photo-1518005020411-38051ee39a1a?auto=format&fit=crop&q=80&w=600" 
                  className="rounded-full aspect-square object-cover grayscale opacity-50 hover:opacity-100 transition-opacity" 
                  alt="Detail 2"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-white/30 mb-6 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-6xl mb-10 leading-tight">
              Quiet Elegance & <br />
              <span className="italic font-light text-white/40">Structural Honesty</span>
            </h2>
            <p className="text-white/40 leading-loose text-lg font-light mb-8 max-w-xl">
              Architecture is not just about shelter; it is about the poetry of light, 
              the honesty of materials, and the rhythm of geometric forms. 
              We strip away the excess to reveal the essence of beauty.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12 bg-white/5 p-8 rounded-2xl border border-white/10">
              <div>
                <div className="text-3xl font-light mb-1 italic">98%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">Renewable Materials</div>
              </div>
              <div>
                <div className="text-3xl font-light mb-1 italic">15+</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">Global Awards</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="work" className="py-32 bg-studio-base">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-studio-muted mb-4 block">Selected Archive</span>
              <h2 className="text-5xl md:text-7xl">Timeless Works</h2>
            </div>
            <div className="text-[11px] uppercase tracking-widest font-semibold flex items-center gap-4 group cursor-pointer">
              Explore All <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-6 aspect-[4/5] bg-white/5 relative border border-white/5 group-hover:border-white/20 transition-colors">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-70 transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                  <div className="absolute top-6 left-6 text-[10px] font-medium text-white/80 mix-blend-difference">{project.year}</div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl mb-1">{project.title}</h3>
                    <p className="text-[11px] uppercase tracking-widest text-studio-muted">{project.category}</p>
                  </div>
                  <div className="w-10 h-[10px] border-b border-studio-ink/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="pt-32 pb-12 border-t border-studio-ink/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-6">
              <h2 className="text-5xl md:text-8xl mb-8">Let's build <br /> <span className="italic">something new.</span></h2>
              <div className="flex gap-6 mt-12">
                {[Instagram, Linkedin, Mail].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full border border-studio-ink/10 flex items-center justify-center hover:bg-studio-ink hover:text-white transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-3 space-y-12">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-studio-muted">Locate Us</span>
                <p className="text-lg font-light leading-relaxed">
                  Studio 402, Nordic Square<br />
                  Copenhagen, DK 2100
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-studio-muted">Inquiries</span>
                <p className="text-lg font-light leading-relaxed">
                  hello@aura.studio<br />
                  +45 20 12 34 56
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white/5 text-white p-10 rounded-2xl border border-white/10">
                <h4 className="text-2xl font-light mb-6 italic">Start a Project</h4>
                <p className="text-white/40 text-sm mb-8">Share your vision with us and receive a tailored consulting session.</p>
                <button className="w-full py-4 bg-white text-black rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-white/90 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-studio-ink/5 gap-6">
            <div className="text-xl font-serif">AURA</div>
            <div className="text-[10px] uppercase tracking-widest text-studio-muted">© 2026 Aura Design Studio — All Rights Reserved</div>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest font-semibold text-studio-muted">
              <a href="#" className="hover:text-studio-ink">Privacy</a>
              <a href="#" className="hover:text-studio-ink">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
