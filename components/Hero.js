'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    let timeout;
    const text = texts[currentIndex];
    let index = 0;

    const typeText = () => {
      if (index <= text.length) {
        setCurrentText(text.substring(0, index));
        index++;
        timeout = setTimeout(typeText, 100);
      }
    };

    setCurrentText('');
    typeText();

    return () => clearTimeout(timeout);
  }, [currentIndex, mounted]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-32 h-32 bg-slate-700 rounded-full mx-auto mb-8 animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-12 bg-slate-700 rounded animate-pulse"></div>
            <div className="h-6 bg-slate-700 rounded animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-[72%] right-[38%] w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="absolute top-[16%] right-[22%] w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 py-32 text-center z-10">
        <div className="animate-fadeInUp">
          {/* Profile Image Placeholder */}
          <div className="relative mb-8 group">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full p-1">
              <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                {/* Replace this div with your actual image */}
                <div className="text-center">
                  <div className="text-2xl md:text-4xl mb-1 md:mb-2">👤</div>
                  <div className="text-xs text-gray-400">Your Photo</div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-slideInUp"> 
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"> 
              Simon Sutherland 
            </span> 
         </h1>

          
          <div className="text-lg md:text-xl lg:text-2xl text-white mb-8 h-6 md:h-8 animate-slideInUp delay-200">
            <span className="inline-block min-w-[250px] md:min-w-[300px] text-center">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto animate-slideInUp delay-400 px-4">
            Passionate about creating beautiful, functional, and user-friendly applications that solve real-world problems. 
            Let&apos;s build something amazing together.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-slideInUp delay-600">
            <a href="https://github.com/azro1" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 group">
              <Github className="w-6 h-6 group-hover:text-white transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/simon-sutherland-b33065178/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-cyan-600 transition-all duration-300 hover:scale-110 group">
              <Linkedin className="w-6 h-6 group-hover:text-white transition-colors" />
            </a>
            <a href="mailto:yourname@example.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800/50 rounded-full hover:bg-emerald-600 transition-all duration-300 hover:scale-110 group">
              <Mail className="w-6 h-6 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => scrollToProjects()}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slideInUp delay-800"
          >
            View My Work
            <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}