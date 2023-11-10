const data = {
  en: {
    headings: {
      skills: "Skills",
      profile: "Profile",
      basicInfo: "Basic Information",
      birthDate: "Birth Date",
      cityOfResidence: "City",
      academicStatus: "Academic Status",
      role: "Preferred Roles",
      projects: "Projects",
      aboutMe: 'About Me',
      footerHeading: 'Send me a message!'
    },
    skills: ["react", "js", "redux", "node", "vscode", "figma"],
    linkedinUrl: "",
    githubUrl: "",
    basicInfo: {
      birthDate: "28.11.1995",
      cityOfResidence: "Istanbul",
      academicStatus: "BS Mechatronics Engineer, Sabanci University",
      role: "Front-end Web Developer, UI Developer",
      aboutMe: `I'm Arda, a front-end developer passionate about crafting user-friendly web experiences. 
      I specialize in turning ideas into clean, interactive interfaces using HTML, CSS, and JavaScript. 
      I love the challenge of bringing creativity and attention to detail to every project. 
      Let's collaborate on building visually stunning and responsive websites!`,
      email: "arda.sem@gmail.com",
      contactMe: `  Currently Freelancing for UX, UI, & Web Design Project . Invite me to
      join your team - ardaçsem@gmail.com`,
      heroTextBig:'I am a Frontend Developer...',
      heroTextSmall:'...who likes to craft solid and scalable frontend products with great user experiences.',
      footerMessage: 'Got a question or proposal, or just want to say hello? Go ahead.'
    },
    projects: [
      {
        id: "1",
        projectName: "Project Name 1",
        tags: ["react", "redux", "tailwind"],
        projectInfo: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Sint eius distinctio veniam esse beatae quam nihil aperiam pariatur odio odit id cumque ad facere iste praesentium,
         aspernatur officia fugit culpa.`,
        projectUrl: "https://github.com",
        projectRepo:"https://github.com",
        projectImg: "src/assets/project.png",
      },
      {
        id: "2",
        projectName: "Project Name 2",
        tags: ["react", "tailwind"],
        projectInfo: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Sint eius distinctio veniam esse beatae quam nihil aperiam pariatur odio odit id cumque ad facere iste praesentium,
         aspernatur officia fugit culpa.`,
        projectUrl: "https://github.com",
        projectRepo:"https://github.com",
        projectImg: "src/assets/project.png",
      },
      {
        id: "3",
        projectName: "Project Name 3",
        tags: ["react", "redux", "vercel","tailwind"],
        projectInfo: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Sint eius distinctio veniam esse beatae quam nihil aperiam pariatur odio odit id cumque ad facere iste praesentium,
         aspernatur officia fugit culpa.`,
        projectUrl: "https://github.com",
        projectRepo:"https://github.com",
        projectImg: "src/assets/project.png",
      },
    ],
  },
  tr: {
    headings: {
      skills: "Beceriler",
      profile: "Kişisel Profil",
      basicInfo: "Temel Bilgiler",
      birthDate: "Doğum Tarihi",
      cityOfResidence: "İkamet Şehri",
      academicStatus: "Eğitim Durumu",
      role: "Tercih edilen Roller ",
      projects: "Projeler",
      aboutMe: 'Hakkımda',
      footerHeading: 'Bana mesaj gönderin!'
    },
    skills: ["react", "js", "redux", "node", "vscode", "figma"],
    linkedinUrl: "",
    githubUrl: "",
    basicInfo: {
      birthDate: "28.11.1995",
      cityOfResidence: "Istanbul",
      academicStatus: "BS Mekatronik Muhendisligi, Sabanci Universitesi",
      role: "Front-end Web Gelistirici, UI Gelistirici",
      aboutMe: `Ben Arda, kullanıcı dostu web deneyimleri oluşturmaya tutkulu bir front-end geliştiriciyim. HTML, CSS ve JavaScript kullanarak fikirleri temiz, etkileşimli arayüzler haline getirme konusunda uzmanım.
       Her projeye yaratıcılık ve detaylı bir bakış açısı katmayı seviyorum.
        Birlikte görsel olarak etkileyici ve duyarlı web siteleri inşa etmeye hazır mısınız?`,
      email: "arda.sem@gmail.com",
      contactMe: `  Şu anda freelancer olarak UX, UI, & Web Design Projelerı yapıyorum . Beni takımınıza davet edin! - pratamaiosi@gmail.com`,
      heroTextBig:"Ben bir front-end developer'ım...",
      heroTextSmall:'...mükemmel kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir ön uç ürünleri oluşturmayı severim.',
      footerMessage: 'Bir sorunuz veya mesajınız mı var? Bana ulaşın.'
    },
    projects: [
      {
        id: "1",
        projectName: "Proje Adı 1",
        tags: ["react", "redux", "tailwind"],
        projectInfo: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Sint eius distinctio veniam esse beatae quam nihil aperiam pariatur odio odit id cumque ad facere iste praesentium,
         aspernatur officia fugit culpa.`,
        projectUrl: "https://github.com",
        projectRepo:"https://github.com",
        projectImg: "src/assets/project1.png",
      },
      {
        id: "2",
        projectName: "Proje Adı 2",
        tags: ["react", "tailwind",'redux','javascript'],
        projectInfo: `
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Sint eius distinctio veniam esse beatae quam nihil aperiam pariatur odio odit id cumque ad facere iste praesentium,
         aspernatur officia fugit culpa.`,
        projectUrl: "https://github.com",
        projectRepo:"https://github.com",
        projectImg: "src/assets/project2.png",
      },
      
    ],
  },
};

export default data;
