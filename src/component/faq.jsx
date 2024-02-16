import React from "react";

const Faq = () => {
    return(
        <div className="flex items-center justify-center">
        <div className="flex flex-col items-center justify-start gap-1">
          <span className="text-[50px] text-gray-700 font-bold text-darkbl md:text-[40px] sm:text-[33px] xs:text-[25px] transition-all duration-300 hover:text-[#1a4e63] hover:transform hover:translate-y-1">
            Frequently Asked Questions
          </span>
          <span className="text-2xl font-bold text-gray-700 md:text-xl ">
            Your right to Know!
          </span>
          <div className="bg-darkvl w-[120px] h-[3px] mt-[10px] md:w-[100px]"></div>
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto">
            <div className="space-y-4 cursor-pointer">
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">What is CVM Education Portal?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                The CVM Education Portal is an online platform provided by CVM University to facilitate easy access to a wide range of educational resources. It offers a variety of courses, ranging from academic subjects to practical skills development, providing an interactive and user-friendly learning experience.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">How do I access the CVM Education Portal?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                To access the CVM Education Portal, simply visit our website and click on the "Login" or "Sign Up" button. If you're a new user, you'll need to create an account. If you're an existing user, enter your credentials to log in and explore the available courses and features.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">What types of courses does CVM University offer on the portal?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                CVM University offers a diverse range of courses on the portal, including academic courses, professional development, and practical skills training. These courses cover various subjects and are designed to cater to different interests and educational needs.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">How do I find and enroll in courses on the portal?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                To find and enroll in courses, log in to your account and browse the course catalog. You can use filters or search by keywords to narrow down your options. Once you find a course of interest, click on it to view details and enroll. Follow the prompts to complete the enrollment process.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">What is CodeHub, and how does it work?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                CodeHub is a feature on the CVM Education Portal dedicated to coding and programming resources. It provides interactive coding challenges, projects, and learning materials. Users can practice coding skills, submit their code for feedback, and engage in a supportive learning community.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">How do I update my profile information on the portal?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                To update your profile information, log in to your account and navigate to the profile settings. Here, you can edit and save changes to your personal details, including your name, contact information, and profile picture.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">Is there a fee for enrolling in courses on the portal?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                While some courses on the portal may have a fee associated with them, there are also many free courses available. The fees, if any, vary depending on the course type and content. CVM University aims to provide a mix of affordable and accessible educational options.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">How can I contact technical support for assistance?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                If you encounter technical issues or need assistance, you can reach out to our technical support team through the "Contact Us" section on the portal. Provide detailed information about the problem you're facing, and our support team will respond to your inquiry as soon as possible.
                </p>
              </details>
             
            </div>
          </div>
  
          {/* section */}
        </div>
      </div>
    )
};

export default Faq;