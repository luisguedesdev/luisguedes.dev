"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Header
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    'nav.hireme': 'Me contrate',
    
    // Hero
    'hero.greeting': 'Olá, eu sou',
    'hero.name': 'Luis Guedes',
    'hero.title': 'Engenheiro de Computação &',
    'hero.subtitle': 'Desenvolvedor Full Stack',
    'hero.description': 'Especialista em desenvolvimento web moderno com 3+ anos de experiência criando soluções escaláveis e inovadoras.',
    'hero.contact': 'Entre em contato',
    'hero.projects': 'Ver projetos',
    'hero.available': 'Disponível para trabalho',
    
    // About
    'about.subtitle': 'Sobre Mim',
    'about.title': 'Quem é Luis Guedes?',
    'about.description1': 'Sou um engenheiro de computação apaixonado por criar soluções digitais inovadoras. Com mais de 3 anos de experiência, especializo-me em desenvolvimento full stack, criando desde interfaces elegantes até arquiteturas robustas de backend.',
    'about.description2': 'Minha missão é transformar ideias complexas em experiências digitais simples e eficazes, sempre mantendo o foco na qualidade e performance.',
    'about.formation': 'Formação: Engenharia de Computação',
    'about.location': 'Localização: Brasil',
    'about.status': 'Status: Disponível para projetos',
    'about.download': 'Download CV',
    'about.projects': 'Projetos Concluídos',
    'about.clients': 'Clientes Satisfeitos',
    'about.experience': 'Anos de Experiência',
    
    // Projects
    'projects.subtitle': 'Meu Trabalho',
    'projects.title': 'Projetos Realizados',
    'projects.description': 'Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias e áreas.',
    'projects.viewproject': 'Ver Projeto',
    'projects.github': 'GitHub',
    'projects.viewall': 'Ver todos no GitHub',
    
    // Skills
    'skills.subtitle': 'Minhas Competências',
    'skills.title': 'Habilidades Técnicas',
    'skills.description': 'Tecnologias e ferramentas que domino para criar soluções completas e escaláveis.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Banco de Dados',
    'skills.devops': 'DevOps & Cloud',
    'skills.tools': 'Ferramentas',
    'skills.mobile': 'Mobile',
    
    // Contact
    'contact.subtitle': 'Vamos Conversar',
    'contact.title': 'Entre em Contato',
    'contact.description': 'Estou sempre aberto a novas oportunidades, parcerias e projetos interessantes. Vamos construir algo incrível juntos!',
    'contact.email': 'Para oportunidades profissionais',
    'contact.linkedin': 'Conecte-se comigo',
    'contact.github': 'Veja meus projetos',
    'contact.whatsapp': 'Para conversas rápidas',
    'contact.available': 'Disponível para novos projetos',
    'contact.sendemail': 'Enviar Email',
    'contact.response': 'Resposta em até 24 horas',
    
    // Services
    'services.subtitle': 'Minha Especialização',
    'services.title': 'Serviços que Ofereço',
    'services.ux.title': 'UI/UX Design',
    'services.ux.description': 'Crio interfaces intuitivas e experiências de usuário excepcionais, focando em usabilidade e design moderno.',
    'services.mobile.title': 'Desenvolvimento Mobile',
    'services.mobile.description': 'Desenvolvimento de aplicações mobile responsivas e performáticas usando React Native e tecnologias modernas.',
    'services.web.title': 'Desenvolvimento Web',
    'services.web.description': 'Construo websites e aplicações web completas, desde o front-end até APIs robustas e escaláveis.',
    'services.learnmore': 'Saiba mais',
    'services.viewall': 'Ver todos os serviços',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'nav.hireme': 'Hire me',
    
    // Hero
    'hero.greeting': 'Hello, I am',
    'hero.name': 'Luis Guedes',
    'hero.title': 'Computer Engineer &',
    'hero.subtitle': 'Full Stack Developer',
    'hero.description': 'Modern web development specialist with 3+ years of experience creating scalable and innovative solutions.',
    'hero.contact': 'Get in touch',
    'hero.projects': 'View projects',
    'hero.available': 'Available for work',
    
    // About
    'about.subtitle': 'About Me',
    'about.title': 'Who is Luis Guedes?',
    'about.description1': 'I am a computer engineer passionate about creating innovative digital solutions. With over 3 years of experience, I specialize in full stack development, creating everything from elegant interfaces to robust backend architectures.',
    'about.description2': 'My mission is to transform complex ideas into simple and effective digital experiences, always maintaining focus on quality and performance.',
    'about.formation': 'Education: Computer Engineering',
    'about.location': 'Location: Brazil',
    'about.status': 'Status: Available for projects',
    'about.download': 'Download CV',
    'about.projects': 'Completed Projects',
    'about.clients': 'Satisfied Clients',
    'about.experience': 'Years of Experience',
    
    // Projects
    'projects.subtitle': 'My Work',
    'projects.title': 'Completed Projects',
    'projects.description': 'Here are some of the projects I have developed, demonstrating my skills in different technologies and areas.',
    'projects.viewproject': 'View Project',
    'projects.github': 'GitHub',
    'projects.viewall': 'View all on GitHub',
    
    // Skills
    'skills.subtitle': 'My Competencies',
    'skills.title': 'Technical Skills',
    'skills.description': 'Technologies and tools I master to create complete and scalable solutions.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Database',
    'skills.devops': 'DevOps & Cloud',
    'skills.tools': 'Tools',
    'skills.mobile': 'Mobile',
    
    // Contact
    'contact.subtitle': 'Let\'s Talk',
    'contact.title': 'Get in Touch',
    'contact.description': 'I am always open to new opportunities, partnerships and interesting projects. Let\'s build something amazing together!',
    'contact.email': 'For professional opportunities',
    'contact.linkedin': 'Connect with me',
    'contact.github': 'See my projects',
    'contact.whatsapp': 'For quick conversations',
    'contact.available': 'Available for new projects',
    'contact.sendemail': 'Send Email',
    'contact.response': 'Response within 24 hours',
    
    // Services
    'services.subtitle': 'My Specialization',
    'services.title': 'Services I Offer',
    'services.ux.title': 'UI/UX Design',
    'services.ux.description': 'I create intuitive interfaces and exceptional user experiences, focusing on usability and modern design.',
    'services.mobile.title': 'Mobile Development',
    'services.mobile.description': 'Development of responsive and performant mobile applications using React Native and modern technologies.',
    'services.web.title': 'Web Development',
    'services.web.description': 'I build complete websites and web applications, from front-end to robust and scalable APIs.',
    'services.learnmore': 'Learn more',
    'services.viewall': 'View all services',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
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
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
