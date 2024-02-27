import React from 'react';

const ChallengeCard = ({ title, description ,link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <a
        href={link}
        className="text-blue-500 pr-[50px] mt-4 inline-block hover:underline"
      >
        Learn on Youtube
      </a>
      <a
        href="#"
        className="text-blue-500 mt-4 inline-block hover:underline"
      >
        Start Challenge
      </a>
    </div>
  );
};

const Fronted = () => {
  const challenges = [
    {
        title: "HTML",
        description: "Implement basic of html(tag,Attributes)",
        link:"https://youtu.be/fq91zDQhpRE?si=lQJuS4ZA4xCxxBC-"
      },
    {
        title: "HTML Table",
        description: "Create table in html",
        link:"https://youtu.be/VjCHupej12U?si=RAMdoCLZLXmgR9Ce"
      },
      {
        title: "HTML Form",
        description: "Create form in html",
        link:"https://youtu.be/dYrwawDa92U?si=X0SNjBaWpwKwREyr"
      },
      {
        title: "CSS",
        description: "CSS  Introduction,Three ways of inserting a style sheet,CSS Id and Class,BOX model etc...",
        link:"https://youtu.be/hkQv0NIxKQY?si=XC368TQ9kbD83KkH"
      },

    {
        title: "CSS Animations",
        description: "Implement CSS animations for a loading spinner or other elements.",
        link:"https://youtu.be/IqdgKJLn_wI?si=Ft_OPllAfLdd-0Sb"
      },
    {
      title: "Responsive Layout",
      description: "Create a responsive layout using HTML and CSS.",
      link:"https://youtu.be/HG10yrq1pbk?si=e_R-4_sX9fMwN-2m"
      
    },
    {
      title: "Interactive Form Validation",
      description: "Build a form with interactive validation using JavaScript.",
      link:"https://youtu.be/1OgmEHMIirI?si=8Npx9F4X6r_WmqHp"
    },  
    {
      title: "To-Do List Application",
      description: "Develop a to-do list application using ReactJS.",
      link:"https://youtu.be/XXRptlP5P6U?si=UWb6HEnTvDSsxPAi"
    },
    {
      title: "Mobile-Friendly Design",
      description: "Make a website mobile-friendly with responsive design.",
      link:"https://youtu.be/wD_WfJkQq10?si=3JUzR1ktpv3V4pi0"
    },
    
    

  ];

  return (<>
    
    {/* <h1 className="text-6xl font-bold text-center p-3 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-200">Frontend Practice</h1> */}


    <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {challenges.map((challenge, index) => (
        <ChallengeCard
          key={index}
          title={challenge.title}
          description={challenge.description}
          link={challenge.link}
        />
      ))}
    </div>
  </>
  );
};

export default Fronted;
