const sections = [
  { name: "Web Design", color: "bg-ciano" },
  { name: "App Design", color: "bg-turquesa" },
  { name: "Dashboard", color: "bg-azul" },
  { name: "Wireframe", color: "bg-ciano" },
];

export default function SectionNav() {
  return (
    <div className="w-full py-6 bg-marinho">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {sections.map((section) => (
            <div
              key={section.name}
              className={`${section.color} text-marinho font-black uppercase tracking-wider px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer text-sm`}
            >
              {section.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
