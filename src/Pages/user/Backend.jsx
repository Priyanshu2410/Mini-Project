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

const Backend = () => {
  const challenges = [
    {
        title: "What is HTTP?",
        description: "HTTP,its uses,function,feature",
        link:"https://youtu.be/qgZiUvV41TI?si=EFyJ3rKOCHWDMfTR"
      },
    {
        title: "HTTP and HTTPS",
        description: "Differentiate between HTTP and HTTPS",
        link:"https://youtu.be/CfQ2INQHkHU?si=irXJEj9JiCpq69PB"
      },
      {
        title: "Building RESTful APIs ",
        description: "Creating web services for seamless data communication with REST principles.",
        link:"https://youtu.be/-MTSQjw5DrM?si=uPQtIITwCCl6U9E5"
      },
      {
        title: "Database Design",
        description:"Structuring and organizing data for efficient storage and retrieval.",
        link:"https://youtu.be/7m6gXeMDaHc?si=KxogAbOnM--jBOrS"
      },

    {
        title: "Authentication and Authorization",
        description: "Ensuring secure access and permissions for users in web applications.",
        link:"https://youtu.be/jJVwNdeS4Ms?si=NJME_jSA5hoje05B"
      },
    {
      title: "Testing and Debugging",
      description: "Ensuring code quality through thorough testing and effective debugging.",
      link:"https://youtu.be/zi6IbWyu9Og?si=G19_n4UJA1Cr3Cj4"
      
    },
    {
      title: "Continuous Integration and Deployment",
      description:"Automating code integration, testing, and deployment for streamlined development workflows.",
      link:"https://youtu.be/1OgmEHMIirI?si=8Npx9F4X6r_WmqHp"
    },  
    {
      title: "Serverless Architecture",
      description: "Building Backend without Servers",
      link:"https://youtu.be/XXRptlP5P6U?si=UWb6HEnTvDSsxPAi"
    },
    {
      title: "Backend Development",
      description: "Backend Development with Python and Django",
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

export default Backend;
