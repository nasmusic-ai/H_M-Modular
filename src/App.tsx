import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  ArrowRight,
} from "lucide-react";

const GITHUB_BASE = "https://raw.githubusercontent.com/etherneomdc3-IT/RAW/main/";
const LOGO_URL = `${GITHUB_BASE}noellogo.png`;
const HERO_VIDEO_URL = `${GITHUB_BASE}noel.mp4`;

const services = [
  {
    title: "Floating TV Consoles",
    description:
      "Hidden cables, LED lighting, and adjustable shelves for a modern look.",
    price: "₱18,500",
    image:
      "https://raw.githubusercontent.com/janzel2015/Modular-RAW/main/TV.jpg",
  },
  {
    title: "Modular Kitchens",
    description:
      "Soft-close doors and full-extension drawers for maximum efficiency.",
    price: "₱45,000",
    image:
      "https://imgs.search.brave.com/v4eFuVl1GdDIHex_gVcf9mwh7oUd0X6ebXqX9rYLVWM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVnYWxva2l0Y2hl/bnMuY29tL2FydGlj/bGVzaW1nLzY3LW1v/ZHVsYXIta2l0Y2hl/bi1kZXNpZ24taWRl/YXMtYW5kLWltYWdl/cy0yMDI0LmpwZw",
  },
  {
    title: "Custom Wardrobes",
    description:
      "Built-in storage solutions that maximize your bedroom space.",
    price: "₱32,000",
    image:
      "https://imgs.search.brave.com/iV9fhavoNBH5brOcRRGXeINE5cKbT9j07yJGMGHUKYg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NkL2Mx/L2Q2L2NkYzFkNjM5/YjIxMTJmYTBmOWI2/YjZkMDYyYzQ1Mzli/LmpwZw",
  },
];

const galleryImages = [
  { id: 1, url: `${GITHUB_BASE}project1.jpg`, title: "M&N Project 1", location: "Baclayun, Bohol", type: "TV Console" },
  { id: 2, url: `${GITHUB_BASE}project2.jpg`, title: "M&N Project 2", location: "Tagbilaran City", type: "Kitchen" },
  { id: 3, url: `${GITHUB_BASE}project3.jpg`, title: "M&N Project 3", location: "Bilar, Bohol", type: "Wardrobe" },
  { id: 4, url: `${GITHUB_BASE}project4.jpg`, title: "M&N Project 4", location: "Tagbilaran City", type: "Kitchen" },
  { id: 5, url: `${GITHUB_BASE}project5.jpg`, title: "M&N Project 5", location: "Dauis, Bohol", type: "TV Console" },
  { id: 6, url: `${GITHUB_BASE}project6.jpg`, title: "M&N Project 6", location: "Panglao, Bohol", type: "Kitchen" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-sans bg-stone-950 text-white">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-stone-900/80 backdrop-blur-md border-b border-amber-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src={LOGO_URL}
                alt="M&N Logo"
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tighter">
                  M&N
                </span>
                <span className="text-[8px] text-amber-400 tracking-[0.2em] uppercase font-bold">
                  Modular Cabinets
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {["Home", "About", "Materials", "Gallery", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-stone-300 hover:text-amber-400 transition-colors uppercase tracking-widest"
                  >
                    {item}
                  </a>
                )
              )}
              <button className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 transition-all">
                <Hammer size={16} /> BUILD NOW
              </button>
            </div>

            {/* Mobile Button */}
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
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-stone-900 border-b border-amber-900/30 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {["Home", "About", "Materials", "Gallery", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-4 text-base font-medium text-stone-300 hover:text-amber-400 border-b border-stone-800"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src={HERO_VIDEO_URL} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              MODULAR CABINETS
              <br />
              <span className="text-amber-400">BUILT FOR YOU</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-10">
              Premium TV Consoles, Kitchens, and Wardrobes handcrafted in Bohol.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-stone-950 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-400 transition-colors flex items-center gap-2">
                GET A QUOTE <ArrowRight size={20} />
              </button>

              <button className="border border-white/30 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors">
                VIEW GALLERY
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="materials" className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-stone-950 rounded-3xl overflow-hidden border border-amber-900/10 hover:border-amber-900/30 transition-colors group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-stone-400 mb-6 text-sm">
                  {service.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-emerald-400 font-bold">
                    Starts at {service.price}
                  </span>
                  <button className="text-amber-400 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    DETAILS <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                OUR <span className="text-amber-400">PROJECTS</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">
                Browse through our completed projects across Bohol
              </p>
            </motion.div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(image)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-stone-900"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=Project+Image";
                    }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                    <p className="text-amber-400 text-sm mb-2">{image.type}</p>
                    <p className="text-stone-300 text-sm flex items-center gap-1">
                      <MapPin size={14} /> {image.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-bold text-lg transition-all inline-flex items-center gap-2">
              VIEW ALL PROJECTS <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-stone-900 rounded-3xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Image */}
              <div className="aspect-video">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/800x600?text=Project+Image";
                  }}
                />
              </div>

              {/* Image Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <div className="flex flex-wrap gap-4 text-stone-300">
                  <p className="flex items-center gap-1">
                    <MapPin size={16} className="text-amber-400" /> {selectedImage.location}
                  </p>
                  <p className="flex items-center gap-1">
                    <Hammer size={16} className="text-amber-400" /> {selectedImage.type}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="py-12 bg-stone-950 border-t border-stone-900 text-center">
        <img
          src={LOGO_URL}
          alt="M&N Logo"
          className="h-12 mx-auto mb-6 opacity-50 grayscale"
        />
        <p className="text-stone-600 text-sm">
          © 2026 Website Develop by Jorjan Lanaja. All rights reserved.
        </p>
      </footer>
    </div>
  );
}