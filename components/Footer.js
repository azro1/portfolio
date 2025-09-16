'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center">
             © {currentYear} Simon Sutherland 
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/azro1"
              target="_blank" rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/simon-sutherland-b33065178/"
              target="_blank" rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:yourname@example.com"
              target="_blank" rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-emerald-400 transition-colors hover:scale-110 transform duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}