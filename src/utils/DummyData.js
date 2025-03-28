export const profiles = [
  {
      id: "1",
      name: "Javier Ríos",
      age: 45,
      status: "Empresario",
      interestRate: "5.5%",
      repaymentTime: "12-36 meses",
      investmentInterests: ["Tecnología", "Negocios", "Educación"],
      shortDescription: "Inversionista con experiencia en startups tecnológicas.",
      profileImage: "https://randomuser.me/api/portraits/men/10.jpg"
  },
  {
      id: "2",
      name: "Lucía Fernández",
      age: 38,
      status: "Abogada",
      interestRate: "6%",
      repaymentTime: "24-48 meses",
      investmentInterests: ["Salud", "Educación", "Inmobiliario"],
      shortDescription: "Apasionada por proyectos que generan impacto social.",
      profileImage: "https://randomuser.me/api/portraits/women/11.jpg"
  },
  {
      id: "3",
      name: "Fernando Salas",
      age: 50,
      status: "Contador Público",
      interestRate: "4.8%",
      repaymentTime: "18-60 meses",
      investmentInterests: ["Finanzas", "Inversión", "Negocios"],
      shortDescription: "Especialista en finanzas con más de 20 años de experiencia.",
      profileImage: "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
      id: "4",
      name: "Elena Gómez",
      age: 42,
      status: "Médica Especialista",
      interestRate: "5.2%",
      repaymentTime: "12-48 meses",
      investmentInterests: ["Salud", "Ciencia", "Educación"],
      shortDescription: "Interesada en apoyar proyectos médicos y de investigación.",
      profileImage: "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
      id: "5",
      name: "Carlos Herrera",
      age: 47,
      status: "Arquitecto",
      interestRate: "5.7%",
      repaymentTime: "24-60 meses",
      investmentInterests: ["Inmobiliario", "Diseño", "Construcción"],
      shortDescription: "Buscando oportunidades en desarrollo de infraestructuras innovadoras.",
      profileImage: "https://randomuser.me/api/portraits/men/14.jpg"
  },
  {
      id: "6",
      name: "Andrea Torres",
      age: 35,
      status: "Diseñadora de Moda",
      interestRate: "6.5%",
      repaymentTime: "12-36 meses",
      investmentInterests: ["Moda", "Arte", "Negocios"],
      shortDescription: "Apoya a emprendedores en el sector creativo.",
      profileImage: "https://randomuser.me/api/portraits/women/15.jpg"
  },
  {
      id: "7",
      name: "Martín López",
      age: 52,
      status: "Ingeniero Industrial",
      interestRate: "5.3%",
      repaymentTime: "18-48 meses",
      investmentInterests: ["Industria", "Energía", "Tecnología"],
      shortDescription: "Busca inversiones en eficiencia energética e innovación industrial.",
      profileImage: "https://randomuser.me/api/portraits/men/16.jpg"
  },
  {
      id: "8",
      name: "Sofía Méndez",
      age: 40,
      status: "Psicóloga",
      interestRate: "6.1%",
      repaymentTime: "12-36 meses",
      investmentInterests: ["Salud Mental", "Educación", "Bienestar"],
      shortDescription: "Interesada en proyectos que mejoren la calidad de vida.",
      profileImage: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
      id: "9",
      name: "Rodrigo Castillo",
      age: 44,
      status: "Chef Ejecutivo",
      interestRate: "5.8%",
      repaymentTime: "24-48 meses",
      investmentInterests: ["Gastronomía", "Turismo", "Negocios"],
      shortDescription: "Busca invertir en innovaciones en el sector de alimentos y bebidas.",
      profileImage: "https://randomuser.me/api/portraits/men/18.jpg"
  },
  {
      id: "10",
      name: "Camila Vargas",
      age: 36,
      status: "Economista",
      interestRate: "4.9%",
      repaymentTime: "18-60 meses",
      investmentInterests: ["Finanzas", "Educación", "Empresas"],
      shortDescription: "Enfocada en inversiones de alto impacto en educación financiera.",
      profileImage: "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
      id: "11",
      name: "Gonzalo Pérez",
      age: 55,
      status: "Empresario de Tecnología",
      interestRate: "5.4%",
      repaymentTime: "24-72 meses",
      investmentInterests: ["Tecnología", "Startups", "IA"],
      shortDescription: "Apasionado por la innovación y la transformación digital.",
      profileImage: "https://randomuser.me/api/portraits/men/20.jpg"
  },
  {
      id: "12",
      name: "Valeria Rojas",
      age: 33,
      status: "Emprendedora Social",
      interestRate: "6.2%",
      repaymentTime: "12-48 meses",
      investmentInterests: ["Impacto Social", "Sostenibilidad", "Educación"],
      shortDescription: "Fomenta proyectos con impacto ambiental y social positivo.",
      profileImage: "https://randomuser.me/api/portraits/women/21.jpg"
  }
];




export const messages = [
    {
      id: "m1",
      profileId: "1",
      messages: [
        { sender: "Luis Pérez", text: "Hola, ¿cómo estás?", timestamp: "10:00 AM" },
        { sender: "Tú", text: "¡Hola Luis! Todo bien, ¿y tú?", timestamp: "10:05 AM" },
      ],
    },
    {
      id: "m2",
      profileId: "2",
      messages: [
        { sender: "María López", text: "¿Me podrías dar más detalles?", timestamp: "11:00 AM" },
        { sender: "Tú", text: "Por supuesto, te explico...", timestamp: "11:10 AM" },
      ],
    },
    {
      id: "m3",
      profileId: "3",
      messages: [
        { sender: "Pedro Martínez", text: "Estoy interesado en tu propuesta.", timestamp: "9:30 AM" },
        { sender: "Tú", text: "Genial, te paso más información.", timestamp: "9:40 AM" },
      ],
    },
    {
      id: "m4",
      profileId: "4",
      messages: [
        { sender: "Ana Ramírez", text: "Me gustaría saber más sobre el proyecto.", timestamp: "3:15 PM" },
        { sender: "Tú", text: "¡Claro! Te comparto los detalles.", timestamp: "3:20 PM" },
      ],
    },
    {
      id: "m5",
      profileId: "5",
      messages: [
        { sender: "Carlos López", text: "¿Cuándo podemos reunirnos?", timestamp: "1:00 PM" },
        { sender: "Tú", text: "¿Te parece bien el viernes a las 4 PM?", timestamp: "1:05 PM" },
      ],
    },
    {
      id: "m6",
      profileId: "6",
      messages: [
        { sender: "Andrea Gutiérrez", text: "Tengo una idea que quiero compartir contigo.", timestamp: "5:45 PM" },
        { sender: "Tú", text: "¡Me encantaría escucharla!", timestamp: "5:50 PM" },
      ],
    },
    {
      id: "m7",
      profileId: "7",
      messages: [
        { sender: "Martín Álvarez", text: "¿Tienes experiencia en inversiones energéticas?", timestamp: "8:10 AM" },
        { sender: "Tú", text: "Sí, he trabajado en varios proyectos de eficiencia energética.", timestamp: "8:15 AM" },
      ],
    },
    {
      id: "m8",
      profileId: "8",
      messages: [
        { sender: "Sofía Delgado", text: "Quiero invertir en salud mental, ¿qué opinas?", timestamp: "6:30 PM" },
        { sender: "Tú", text: "Es un sector clave, hay mucho potencial de impacto.", timestamp: "6:35 PM" },
      ],
    },
    {
      id: "m9",
      profileId: "9",
      messages: [
        { sender: "Rodrigo Méndez", text: "¿Tienes contactos en la industria gastronómica?", timestamp: "7:00 PM" },
        { sender: "Tú", text: "Sí, puedo ponerte en contacto con algunos chefs.", timestamp: "7:05 PM" },
      ],
    },
    {
      id: "m10",
      profileId: "10",
      messages: [
        { sender: "Camila Torres", text: "Quisiera aprender más sobre educación financiera.", timestamp: "2:00 PM" },
        { sender: "Tú", text: "¡Con gusto! Te recomiendo algunos recursos.", timestamp: "2:05 PM" },
      ],
    },
    {
      id: "m11",
      profileId: "11",
      messages: [
        { sender: "Gonzalo Herrera", text: "Estoy explorando oportunidades en IA.", timestamp: "4:30 PM" },
        { sender: "Tú", text: "Interesante, ¿tienes alguna idea en mente?", timestamp: "4:35 PM" },
      ],
    },
    {
      id: "m12",
      profileId: "12",
      messages: [
        { sender: "Valeria Pérez", text: "¿Cómo puedo hacer mi negocio más sostenible?", timestamp: "9:50 AM" },
        { sender: "Tú", text: "Podemos discutir estrategias de impacto social.", timestamp: "9:55 AM" },
      ],
    },
  ];