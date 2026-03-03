/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hammer, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  MapPin, 
  Phone, 
  Facebook, 
  Instagram,
  ArrowRight
} from 'lucide-react';

// Configuration for images
const GITHUB_BASE = "https://raw.githubusercontent.com/etherneomdc3-IT/RAW/main/";
const LOGO_URL = `${GITHUB_BASE}noellogo.png`;
const HERO_VIDEO_URL = `${GITHUB_BASE}noel.mp4`;

const services = [
  {
    title: "Floating TV Consoles",
    description: "Hidden cables, LED lighting, and adjustable shelves for a modern look.",
    price: "₱18,500",
    image: "https://raw.githubusercontent.com/janzel2015/Modular-RAW/main/TV.jpg"
  },
  {
    title: "Modular Kitchens",
    description: "Soft-close doors and full-extension drawers for maximum efficiency.",
    price: "₱45,000",
    image: "https://imgs.search.brave.com/v4eFuVl1GdDIHex_gVcf9mwh7oUd0X6ebXqX9rYLVWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVnYWxva2l0Y2hl/bnMuY29tL2FydGlj/bGVzaW1nLzY3LW1v/ZHVsYXIta2l0Y2hl/bi1kZXNpZ24taWRl/YXMtYW5kLWltYWdl/cy0yMDI0LmpwZw"
  },
  {
    title: "Custom Wardrobes",
    description: "Built-in storage solutions that maximize your bedroom space.",
    price: "₱32,000",
    image: "https://imgs.search.brave.com/iV9fhavoNBH5brOcRRGXeINE5cKbT9j07yJGMGHUKYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NkL2Mx/L2Q2L2NkYzFkNjM5/YjIxMTJmYTBmOWI2/YjZkMDYyYzQ1Mzli/LmpwZw"
  }
];

const galleryImages = [
  { id: 1, url: `${GITHUB_BASE}project1.jpg`, title: "M&N Project 1", location: "Baclayun, Bohol", type: "TV Console" },
  { id: 2, url: `${GITHUB_BASE}project2.jpg`, title: "M&N Project 2", location: "Tagbilaran City", type: "Kitchen" },
  { id: 3, url: `${GITHUB_BASE}project3.jpg`, title: "M&N Project 3", location: "Bilar, Bohol", type: "Wardrobe" },
  { id: 4, url: `${GITHUB_BASE}project4.jpg`, title: "M&N Project 4", location: "Tagbilaran City", type: "Kitchen" }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-stone-900/80 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="M&N Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tighter text-white leading-none">M&N</span>
                <span className="text-[8px] text-amber-400 tracking-[0.2em] uppercase font-bold">Modular Cabinets</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Materials', 'Gallery', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all">
                <Hammer size={16} /> BUILD NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-stone-300 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-stone-900 border-b border-amber-900/30 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {['Home', 'About', 'Materials', 'Gallery', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block px-3 py-4 text-base font-medium text-stone-300 hover:text-amber-400 border-b border-stone-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-4">
                  <button className="w-full bg-amber-600 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
                    <Hammer size={20} /> START YOUR PROJECT
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50">
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-widest mb-6 border border-emerald-500/20">
              ● BACLAYUN BOHOL SHOWROOM
            </span>
            <h1 className="font-display text-5xl md:text-8xl font-bold text-white mb-6 leading-[0.9] tracking-tighter">
              MODULAR CABINETS<br />
              <span className="text-amber-400">BUILT FOR YOU</span>
            </h1>
            <p className="text-lg md:text-2xl text-stone-300 max-w-2xl mx-auto mb-10 font-light">
              Premium TV Consoles, Kitchens, and Wardrobes handcrafted in Bilar and delivered across Bohol.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-white text-stone-950 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-amber-400 transition-colors flex items-center justify-center gap-2">
                GET A QUOTE <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
                VIEW GALLERY
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-stone-900 border-y border-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[{ label: 'ESTABLISHED', value: '2018' },
            { label: 'PROJECTS', value: '500+' },
            { label: 'WARRANTY', value: '5 YRS' },
            { label: 'DELIVERY', value: 'BOHOL' }].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-amber-400 mb-1">{stat.value}</div>
                <div className="text-[10px] tracking-widest text-stone-500 font-bold uppercase">{stat.label}</div>
              </div>
          ))}
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">SERVICES</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">We use high-quality materials and modern hardware to ensure your cabinets are both beautiful and durable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map(service => (
              <div key={service.title} className="bg-stone-950 rounded-3xl overflow-hidden border border-amber-900/10 hover:border-amber-900/30 transition-colors group">
                <div className="h-64 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-stone-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-400 font-bold">Starts at {service.price}</span>
                    <button className="text-amber-400 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      DETAILS <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-stone-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12 flex justify-between items-end">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">PROJECTS</h2>
            <p className="text-stone-400">Swipe through our latest modular installations.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button onClick={() => scroll('left')} className="p-4 rounded-full border border-stone-800 hover:bg-stone-800 text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scroll('right')} className="p-4 rounded-full border border-stone-800 hover:bg-stone-800 text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-4 md:px-[calc((100vw-1280px)/2)] no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing" style={{ scrollBehavior: 'smooth' }}>
          {galleryImages.map(img => (
            <motion.div key={img.id} className="flex-none w-[85vw] md:w-[400px] snap-center" whileHover={{ y: -10 }}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone-900 group">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">{img.type}</span>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">{img.title}</h3>
                  <div className="flex items-center gap-2 text-stone-300 text-sm">
                    <MapPin size={14} /> {img.location}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 md:hidden">
                  <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <div className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">{img.type}</div>
                    <div className="text-white font-bold">{img.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <p className="text-stone-500 text-xs tracking-widest uppercase font-bold">Swipe to explore ( images)</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-950">
        {/* Contact content remains unchanged */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-8">Ready to start your project?</h2>
              <p className="text-stone-400 text-lg mb-12">Visit our workshop in baclayun or message us for a free estimate. We deliver and install all over Bohol.</p>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Workshop Address</h4>
                    <p className="text-stone-400">Poblacion, Baclayun, Bohol (Near Public Market)</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-amber-600/10 flex items-center justify-center text-amber-400 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Call or Text</h4>
                    <p className="text-stone-400">+63 9954354710</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <button className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-colors">
                    <Facebook size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:text-amber-400 transition-colors">
                    <Instagram size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-stone-900 p-8 md:p-12 rounded-[2rem] border border-amber-900/20">
              <h3 className="text-2xl font-display font-bold text-white mb-8">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white focus:border-amber-600 outline-none transition-colors" placeholder="Juan Dela Cruz" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Phone Number</label>
                    <input type="text" className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white focus:border-amber-600 outline-none transition-colors" placeholder="0912 345 6789" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Project Type</label>
                  <select className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white focus:border-amber-600 outline-none transition-colors appearance-none">
                    <option>TV Console</option>
                    <option>Kitchen Cabinet</option>
                    <option>Wardrobe</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-stone-950 border border-stone-800 rounded-xl px-4 py-3 text-white focus:border-amber-600 outline-none transition-colors" placeholder="Tell us about your dream cabinet..."></textarea>
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-amber-600/20">
                  SEND INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <img src={LOGO_URL} alt="M&N Logo" className="h-12 w-auto mx-auto mb-6 opacity-50 grayscale" referrerPolicy="no-referrer" />
          <p className="text-stone-600 text-sm mb-4">© 2026 M&N Modular Cabinets. Website Develop by Jorjan Lanaja.</p>
          <div className="flex justify-center gap-6 text-stone-500 text-xs font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-amber-400">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}