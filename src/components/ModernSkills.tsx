"use client";
import { useLanguage } from '../contexts/LanguageContext';

export default function ModernSkills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: "🎨",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      color: "border-ciano text-ciano"
    },
    {
      title: t('skills.backend'),
      icon: "⚙️",
      skills: ["Node.js", "Express", "NestJS", "Python", "FastAPI"],
      color: "border-turquesa text-turquesa"
    },
    {
      title: t('skills.database'),
      icon: "🗄️",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
      color: "border-azul text-azul"
    },
    {
      title: t('skills.devops'),
      icon: "☁️",
      skills: ["Docker", "AWS", "Azure", "CI/CD", "Kubernetes"],
      color: "border-ciano text-ciano"
    },
    {
      title: t('skills.tools'),
      icon: "🛠️",
      skills: ["Git", "GitHub", "VSCode", "Figma", "Postman"],
      color: "border-turquesa text-turquesa"
    },
    {
      title: t('skills.mobile'),
      icon: "📱",
      skills: ["React Native", "Expo", "PWA", "Responsive Design"],
      color: "border-azul text-azul"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-turquesa font-semibold text-lg uppercase tracking-wider">{t('skills.subtitle')}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6">
            {t('skills.title')}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {t('skills.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className={`bg-marinho rounded-2xl p-8 border-2 ${category.color} hover:shadow-xl hover:scale-105 transition-all duration-300`}>
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className={`text-xl font-bold mb-6 ${category.color}`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${category.color.includes('ciano') ? 'bg-ciano' : category.color.includes('turquesa') ? 'bg-turquesa' : 'bg-azul'}`}></div>
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="bg-marinho rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {['JavaScript', 'React', 'Node.js', 'TypeScript'].map((skill) => (
                <div key={skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill}</span>
                    <span className="text-ciano font-bold">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-ciano to-turquesa h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {['Python', 'Docker', 'AWS', 'MongoDB'].map((skill) => (
                <div key={skill}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill}</span>
                    <span className="text-turquesa font-bold">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-turquesa to-azul h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
