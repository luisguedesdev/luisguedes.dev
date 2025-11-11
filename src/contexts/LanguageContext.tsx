"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Header
    "nav.home": "Início",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",
    "nav.hireme": "Me contrate",

    // Hero
    "hero.greeting": "Olá, eu sou",
    "hero.name": "Luis Guedes",
    "hero.title": "Engenheiro de Computação &",
    "hero.subtitle": "Desenvolvedor Full Stack",
    "hero.description":
      "Especialista em desenvolvimento web moderno com 3+ anos de experiência criando soluções escaláveis e inovadoras.",
    "hero.contact": "Entre em contato",
    "hero.projects": "Ver projetos",
    "hero.available": "Disponível para trabalho",
    "hero.badge.available": "Disponível para novos projetos",
    "hero.cta.start": "Começar meu projeto agora",
    "hero.cta.viewCases": "Ver cases de sucesso",

    // About
    "about.subtitle": "Sobre Mim",
    "about.title": "Quem é Luis Guedes?",
    "about.description1":
      "Sou um engenheiro de computação apaixonado por criar soluções digitais inovadoras. Com mais de 3 anos de experiência, especializo-me em desenvolvimento full stack, criando desde interfaces elegantes até arquiteturas robustas de backend.",
    "about.description2":
      "Minha missão é transformar ideias complexas em experiências digitais simples e eficazes, sempre mantendo o foco na qualidade e performance.",
    "about.formation": "Formação: Engenharia de Computação",
    "about.location": "Localização: Brasil",
    "about.status": "Status: Disponível para projetos",
    "about.download": "Download CV",
    "about.projects": "Projetos Concluídos",
    "about.clients": "Clientes Satisfeitos",
    "about.experience": "Anos de Experiência",

    // Projects
    "projects.subtitle": "Meu Trabalho",
    "projects.title": "Projetos Realizados",
    "projects.description":
      "Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e áreas.",
    "projects.viewproject": "Ver Projeto",
    "projects.github": "GitHub",
    "projects.viewall": "Ver todos no GitHub",

    // Skills
    "skills.subtitle": "Minhas Competências",
    "skills.title": "Habilidades Técnicas",
    "skills.description":
      "Tecnologias e ferramentas que domino para criar soluções completas e escaláveis.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Banco de Dados",
    "skills.devops": "DevOps & Cloud",
    "skills.tools": "Ferramentas",
    "skills.mobile": "Mobile",

    // Contact
    "contact.subtitle": "Vamos Conversar",
    "contact.title": "Entre em Contato",
    "contact.description":
      "Estou sempre aberto a novas oportunidades, parcerias e projetos interessantes. Vamos construir algo incrível juntos!",
    "contact.email": "Para oportunidades profissionais",
    "contact.linkedin": "Conecte-se comigo",
    "contact.github": "Veja meus projetos",
    "contact.whatsapp": "Para conversas rápidas",
    "contact.available": "Disponível para novos projetos",
    "contact.sendemail": "Enviar Email",
    "contact.response": "Resposta em até 24 horas",

    // Services
    "services.subtitle": "Minha Especialização",
    "services.title": "Serviços que Ofereço",
    "services.header.title": "Serviços que geram resultados",
    "services.header.subtitle":
      "Soluções completas de desenvolvimento focadas no crescimento do seu negócio",
    "services.ux.title": "UI/UX Design",
    "services.ux.description":
      "Crio interfaces intuitivas e experiências de usuário excepcionais, focando em usabilidade e design moderno.",
    "services.mobile.title": "Desenvolvimento Mobile",
    "services.mobile.description":
      "Desenvolvimento de aplicações mobile responsivas e performáticas usando React Native e tecnologias modernas.",
    "services.web.title": "Desenvolvimento Web",
    "services.web.description":
      "Construo websites e aplicações web completas, desde o front-end até APIs robustas e escaláveis.",
    "services.learnmore": "Saiba mais",
    "services.viewall": "Ver todos os serviços",
    "services.popular": "MAIS POPULAR",
    "services.cta.request": "Solicitar orçamento",
    "services.other.title": "Outros serviços disponíveis",
    "services.process.title": "Como funciona nosso processo",
    "services.process.step1.title": "Descoberta",
    "services.process.step1.desc": "Entendemos seu negócio e objetivos",
    "services.process.step2.title": "Planejamento",
    "services.process.step2.desc": "Criamos estratégia e cronograma",
    "services.process.step3.title": "Desenvolvimento",
    "services.process.step3.desc": "Construímos com atualizações semanais",
    "services.process.step4.title": "Lançamento",
    "services.process.step4.desc": "Deploy e suporte pós-lançamento",
    "services.notfound.title": "Não encontrou o que precisa?",
    "services.notfound.subtitle":
      "Cada projeto é único. Vamos conversar sobre suas necessidades específicas.",
    "services.notfound.cta": "Falar com especialista",

    // Credibility
    "cred.title": "Qualidade em cada projeto",
    "cred.description":
      "Trabalhando com dedicação, aprendendo e entregando soluções que funcionam",
    "cred.metrics.sales": "Horas de código",
    "cred.metrics.projects": "Projetos entregues",
    "cred.metrics.satisfaction": "Aprendizado contínuo",
    "cred.metrics.roi": "Código limpo sempre",
    "cred.testimonials.title": "O que meus clientes estão dizendo",
    "cred.testimonials.result": "Resultado:",
    "cred.testimonials.1.text":
      "Luis desenvolveu nosso site em React com grande atenção aos detalhes. Entrega no prazo e suporte excelente!",
    "cred.testimonials.1.role": "Dono de Agência Digital",
    "cred.testimonials.2.text":
      "Projeto bem executado, muito profissional. Recomendo para quem quer qualidade com preço justo.",
    "cred.testimonials.2.role": "Cliente Freelance",
    "cred.testimonials.3.text":
      "Ótima comunicação durante o projeto, resolveu problemas rapidamente e aprendeu muito no processo.",
    "cred.testimonials.3.role": "Gestor de Projeto",
    "cred.companies.title": "Projetos que realizei",
    "cred.cta.title": "Vamos trabalhar juntos?",
    "cred.cta.subtitle":
      "Estou aberto a novos projetos e oportunidades de aprendizado",
    "cred.cta.button": "Entre em contato",

    // Projects (UI)
    "projects.header.title": "Meus Projetos",
    "projects.header.subtitle":
      "Projetos que implementei, aprendendo e crescendo com cada um",
    "projects.category.all": "Todos os Projetos",
    "projects.category.fintech": "Fintech",
    "projects.category.ecommerce": "E-commerce",
    "projects.category.saas": "SaaS",
    "projects.category.mobile": "Mobile",
    "projects.category.analytics": "Analytics",
    "projects.resultLabel": "TECNOLOGIA USADA",
    "projects.viewDetails": "Ver código no GitHub",
    "projects.cta.title": "Mais projetos em meu GitHub",
    "projects.cta.subtitle":
      "Confira meu repositório para ver mais sobre minhas contribuições",
    "projects.cta.button": "Acessar GitHub",

    // Contact
    "contact.header.title": "Vamos conversar?",
    "contact.header.subtitle":
      "Estou sempre disponível para discutir novos projetos, ideias e oportunidades.",
    "contact.form.title": "Me mande uma mensagem",
    "contact.form.name": "Seu nome",
    "contact.form.email": "Seu email",
    "contact.form.company": "Sua empresa/projeto (opcional)",
    "contact.form.projectType": "Tipo de interesse",
    "contact.form.projectType.placeholder": "Escolha...",
    "contact.form.budget": "Orçamento (opcional)",
    "contact.form.budget.placeholder": "Aproximadamente...",
    "contact.form.urgency": "Quando você precisa?",
    "contact.form.message": "Sua mensagem",
    "contact.form.placeholder.name": "Seu nome",
    "contact.form.placeholder.email": "seu@email.com",
    "contact.form.placeholder.company": "Sua empresa ou projeto",
    "contact.form.placeholder.message":
      "Me conte sobre sua ideia, projeto ou oportunidade",
    "contact.projectTypes.website": "Website/Landing Page",
    "contact.projectTypes.ecommerce": "E-commerce",
    "contact.projectTypes.webapp": "Sistema Web",
    "contact.projectTypes.mobile": "App Mobile",
    "contact.projectTypes.mvp": "MVP/Startup",
    "contact.projectTypes.consulting": "Consultoria/Mentoring",
    "contact.projectTypes.other": "Outro",
    "contact.budget.1": "R$ 500 - R$ 1.500",
    "contact.budget.2": "R$ 1.500 - R$ 3.000",
    "contact.budget.3": "R$ 3.000 - R$ 5.000",
    "contact.budget.4": "R$ 5.000+",
    "contact.budget.5": "Vamos negociar",
    "contact.urgency.normal": "Sem pressa (4-8 semanas)",
    "contact.urgency.urgent": "Rápido (1-2 semanas)",
    "contact.form.submit": "Enviar mensagem",
    "contact.methods.title": "Outras formas de contato",
    "contact.methods.whatsapp.title": "WhatsApp",
    "contact.methods.whatsapp.desc": "Resposta em até 2 horas",
    "contact.methods.whatsapp.highlight": "Mais rápido",
    "contact.methods.email.title": "Email Profissional",
    "contact.methods.email.desc": "Resposta em até 24 horas",
    "contact.methods.email.highlight": "Mais detalhado",
    "contact.methods.meeting.title": "Agendar Reunião",
    "contact.methods.meeting.desc": "Conversa de 30 minutos grátis",
    "contact.methods.meeting.highlight": "Mais completo",
    "contact.methods.linkedin.title": "LinkedIn",
    "contact.methods.linkedin.desc": "Rede profissional",
    "contact.faq.title": "Perguntas frequentes",
    "contact.faq.q1.title": "Quanto tempo leva?",
    "contact.faq.q1.answer":
      "Depende do projeto. Websites simples: 2-4 semanas. Aplicações: 4-8 semanas.",
    "contact.faq.q2.title": "Como funciona o pagamento?",
    "contact.faq.q2.answer":
      "50% para iniciar, 50% na entrega. Posso negociar conforme necessário.",
    "contact.faq.q3.title": "Oferece suporte depois?",
    "contact.faq.q3.answer":
      "Sim! 2 semanas de suporte gratuito + hospedagem e manutenção opcionais.",
    "contact.guarantees.title": "� Meu compromisso",
    "contact.guarantees.item1": "Entrega conforme combinado",
    "contact.guarantees.item2": "Código comentado e documentado",
    "contact.guarantees.item3": "Revisões até você estar satisfeito",
    "contact.guarantees.item4": "Aprendizado contínuo e qualidade",

    // Skills
    "skills.proficiency": "Níveis de proficiência",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.hireme": "Hire me",

    // Hero
    "hero.greeting": "Hello, I am",
    "hero.name": "Luis Guedes",
    "hero.title": "Computer Engineer &",
    "hero.subtitle": "Full Stack Developer",
    "hero.description":
      "Modern web development specialist with 3+ years of experience creating scalable and innovative solutions.",
    "hero.contact": "Get in touch",
    "hero.projects": "View projects",
    "hero.available": "Available for work",
    "hero.badge.available": "Available for new projects",
    "hero.cta.start": "Start my project now",
    "hero.cta.viewCases": "See success stories",

    // About
    "about.subtitle": "About Me",
    "about.title": "Who is Luis Guedes?",
    "about.description1":
      "I am a computer engineer passionate about creating innovative digital solutions. With over 3 years of experience, I specialize in full stack development, creating everything from elegant interfaces to robust backend architectures.",
    "about.description2":
      "My mission is to transform complex ideas into simple and effective digital experiences, always maintaining focus on quality and performance.",
    "about.formation": "Education: Computer Engineering",
    "about.location": "Location: Brazil",
    "about.status": "Status: Available for projects",
    "about.download": "Download CV",
    "about.projects": "Completed Projects",
    "about.clients": "Satisfied Clients",
    "about.experience": "Years of Experience",

    // Projects
    "projects.subtitle": "My Work",
    "projects.title": "Completed Projects",
    "projects.description":
      "Here are some of the projects I have developed, demonstrating my skills in different technologies and areas.",
    "projects.viewproject": "View Project",
    "projects.github": "GitHub",
    "projects.viewall": "View all on GitHub",

    // Skills
    "skills.subtitle": "My Competencies",
    "skills.title": "Technical Skills",
    "skills.description":
      "Technologies and tools I master to create complete and scalable solutions.",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Database",
    "skills.devops": "DevOps & Cloud",
    "skills.tools": "Tools",
    "skills.mobile": "Mobile",

    // Contact
    "contact.subtitle": "Let's Talk",
    "contact.title": "Get in Touch",
    "contact.description":
      "I am always open to new opportunities, partnerships and interesting projects. Let's build something amazing together!",
    "contact.email": "For professional opportunities",
    "contact.linkedin": "Connect with me",
    "contact.github": "See my projects",
    "contact.whatsapp": "For quick conversations",
    "contact.available": "Available for new projects",
    "contact.sendemail": "Send Email",
    "contact.response": "Response within 24 hours",

    // Services
    "services.subtitle": "My Specialization",
    "services.title": "Services I Offer",
    "services.header.title": "Services that drive results",
    "services.header.subtitle":
      "End-to-end development solutions focused on growing your business",
    "services.ux.title": "UI/UX Design",
    "services.ux.description":
      "I create intuitive interfaces and exceptional user experiences, focusing on usability and modern design.",
    "services.mobile.title": "Mobile Development",
    "services.mobile.description":
      "Development of responsive and performant mobile applications using React Native and modern technologies.",
    "services.web.title": "Web Development",
    "services.web.description":
      "I build complete websites and web applications, from front-end to robust and scalable APIs.",
    "services.learnmore": "Learn more",
    "services.viewall": "View all services",
    "services.popular": "MOST POPULAR",
    "services.cta.request": "Request quote",
    "services.other.title": "Other services available",
    "services.process.title": "How our process works",
    "services.process.step1.title": "Discovery",
    "services.process.step1.desc": "We learn your business and goals",
    "services.process.step2.title": "Planning",
    "services.process.step2.desc": "We create strategy and timeline",
    "services.process.step3.title": "Development",
    "services.process.step3.desc": "We build with weekly updates",
    "services.process.step4.title": "Launch",
    "services.process.step4.desc": "Deploy and post-launch support",
    "services.notfound.title": "Didn't find what you need?",
    "services.notfound.subtitle":
      "Every project is unique. Let's talk about your specific needs.",
    "services.notfound.cta": "Talk to a specialist",

    // Credibility
    "cred.title": "Quality in every project",
    "cred.description":
      "Working with dedication, learning and delivering solutions that work",
    "cred.metrics.sales": "Hours of code",
    "cred.metrics.projects": "Projects delivered",
    "cred.metrics.satisfaction": "Continuous learning",
    "cred.metrics.roi": "Clean code always",
    "cred.testimonials.title": "What my clients are saying",
    "cred.testimonials.result": "Result:",
    "cred.testimonials.1.text":
      "Luis developed our React website with great attention to detail. On-time delivery and excellent support!",
    "cred.testimonials.1.role": "Digital Agency Owner",
    "cred.testimonials.2.text":
      "Well executed project, very professional. I recommend for those who want quality at fair price.",
    "cred.testimonials.2.role": "Freelance Client",
    "cred.testimonials.3.text":
      "Great communication throughout the project, solved problems quickly and learned a lot in the process.",
    "cred.testimonials.3.role": "Project Manager",
    "cred.companies.title": "Projects I've completed",
    "cred.cta.title": "Let's work together?",
    "cred.cta.subtitle": "I'm open to new projects and learning opportunities",
    "cred.cta.button": "Get in touch",

    // Projects (UI)
    "projects.header.title": "My Projects",
    "projects.header.subtitle":
      "Projects I've implemented, learning and growing with each one",
    "projects.category.all": "All Projects",
    "projects.category.fintech": "Fintech",
    "projects.category.ecommerce": "E-commerce",
    "projects.category.saas": "SaaS",
    "projects.category.mobile": "Mobile",
    "projects.category.analytics": "Analytics",
    "projects.resultLabel": "TECHNOLOGY USED",
    "projects.viewDetails": "View code on GitHub",
    "projects.cta.title": "More projects on my GitHub",
    "projects.cta.subtitle":
      "Check my repository to see more about my contributions",
    "projects.cta.button": "Visit GitHub",

    // Contact
    "contact.header.title": "Let's chat?",
    "contact.header.subtitle":
      "I'm always available to discuss new projects, ideas and opportunities.",
    "contact.form.title": "Send me a message",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.company": "Your company/project (optional)",
    "contact.form.projectType": "Type of interest",
    "contact.form.projectType.placeholder": "Choose...",
    "contact.form.budget": "Budget (optional)",
    "contact.form.budget.placeholder": "Approximately...",
    "contact.form.urgency": "When do you need it?",
    "contact.form.message": "Your message",
    "contact.form.placeholder.name": "Your name",
    "contact.form.placeholder.email": "you@example.com",
    "contact.form.placeholder.company": "Your company or project",
    "contact.form.placeholder.message":
      "Tell me about your idea, project or opportunity",
    "contact.projectTypes.website": "Website/Landing Page",
    "contact.projectTypes.ecommerce": "E-commerce",
    "contact.projectTypes.webapp": "Web Application",
    "contact.projectTypes.mobile": "Mobile App",
    "contact.projectTypes.mvp": "MVP/Startup",
    "contact.projectTypes.consulting": "Consulting/Mentoring",
    "contact.projectTypes.other": "Other",
    "contact.budget.1": "$200 - $600",
    "contact.budget.2": "$600 - $1,200",
    "contact.budget.3": "$1,200 - $2,000",
    "contact.budget.4": "$2,000+",
    "contact.budget.5": "Let's negotiate",
    "contact.urgency.normal": "No rush (4-8 weeks)",
    "contact.urgency.urgent": "Quick (1-2 weeks)",
    "contact.form.submit": "Send message",
    "contact.methods.title": "Other ways to reach me",
    "contact.methods.whatsapp.title": "WhatsApp",
    "contact.methods.whatsapp.desc": "Quick response",
    "contact.methods.whatsapp.highlight": "Most direct",
    "contact.methods.email.title": "Email",
    "contact.methods.email.desc": "For formal messages",
    "contact.methods.email.highlight": "Professional",
    "contact.methods.meeting.title": "LinkedIn",
    "contact.methods.meeting.desc": "Connect professionally",
    "contact.methods.meeting.highlight": "Networking",
    "contact.methods.linkedin.title": "GitHub",
    "contact.methods.linkedin.desc": "See my code and projects",
    "contact.faq.title": "Frequently asked questions",
    "contact.faq.q1.title": "How long does it take?",
    "contact.faq.q1.answer":
      "Depends on the project. Simple websites: 2-4 weeks. Applications: 4-8 weeks.",
    "contact.faq.q2.title": "How does payment work?",
    "contact.faq.q2.answer":
      "50% to start + 50% on delivery. I can negotiate based on needs.",
    "contact.faq.q3.title": "Do you offer support after?",
    "contact.faq.q3.answer":
      "Yes! 2 weeks free support + optional hosting and maintenance.",
    "contact.guarantees.title": "� My Commitment",
    "contact.guarantees.item1": "Delivery as promised",
    "contact.guarantees.item2": "Commented and documented code",
    "contact.guarantees.item3": "Revisions until you're satisfied",
    "contact.guarantees.item4": "Continuous learning and quality",

    // Skills
    "skills.proficiency": "Proficiency Levels",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  // initialize from localStorage or browser settings
  useEffect(() => {
    try {
      const stored = localStorage.getItem("language") as Language | null;
      if (stored === "pt" || stored === "en") {
        setLanguageState(stored);
        document.documentElement.setAttribute("lang", stored);
        return;
      }
    } catch {}
    // fallback to browser
    const browserLang = navigator.language?.toLowerCase().startsWith("pt")
      ? "pt"
      : "en";
    setLanguageState(browserLang as Language);
    document.documentElement.setAttribute("lang", browserLang);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("language", lang);
    } catch {}
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
