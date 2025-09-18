'use client';

import { useEffect, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedBars, setAnimatedBars] = useState({});

  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-orange-400 to-red-500' },
    { name: 'React', level: 85, color: 'from-purple-400 to-cyan-500' },
    { name: 'Node.js', level: 80, color: 'from-emerald-400 to-teal-500' },
    { name: 'Git', level: 75, color: 'from-cyan-500 to-purple-600' },
    { name: 'CSS/Tailwind', level: 88, color: 'from-pink-400 to-purple-500' },
    { name: 'MongoDB', level: 70, color: 'from-emerald-500 to-cyan-600' },
  ];

  const technologies = [
    'React', 'Next.js', 'Vue.js', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'TypeScript',
    'Git', 'Docker', 'AWS', 'Figma', 'Photoshop'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with delays
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedBars(prev => ({
                ...prev,
                [skill.name]: true
              }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills with Progress Bars */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-8 text-white">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out relative`}
                      style={{
                        width: animatedBars[skill.name] ? `${skill.level}%` : '0%'
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Cloud */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-semibold mb-8 text-white">Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className={`px-4 py-2 bg-gray-800/60 text-gray-300 rounded-full text-sm font-medium 
                    hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:text-white 
                    transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ 
                    transitionDelay: `${600 + index * 50}ms`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-3">Always Learning</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Technology evolves rapidly, and I&apos;m committed to staying current with the latest trends, 
                frameworks, and best practices. Currently exploring AI integration, Web3 technologies, 
                and advanced React patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}