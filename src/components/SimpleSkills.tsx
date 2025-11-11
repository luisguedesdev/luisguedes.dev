"use client";

export default function SimpleSkills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "Python", level: 65 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      category: "Ferramentas",
      items: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 60 },
        { name: "Figma", level: 75 },
        { name: "VS Code", level: 95 },
        { name: "Linux", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-orange-500">Skills</span> & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-slate-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-6">
                {skillGroup.category}
              </h3>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-2">
                      <div
                        className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">8+</div>
            <div className="text-gray-400">Projetos Completos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">2+</div>
            <div className="text-gray-400">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-gray-400">Dedicação</div>
          </div>
        </div>
      </div>
    </section>
  );
}
