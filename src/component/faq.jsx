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
                <summary className="px-4 py-6">What is Trip Yaatra?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Trip Yaatra is a contemporary travel collective offering comprehensive travel packages across India and internationally. We curate exceptional travel itineraries tailored for group travel, fostering connections among individuals with similar interests. Our spectrum of services encompasses road trips, trekking ventures, corporate excursions, and personalized tour packages.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">What sets Trip Yaatra apart from other online travel platforms?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  At Trip Yaatra, we embody our principles in action. Our in-house operations team meticulously oversees every aspect of our trips from start to finish. With no involvement of third parties, we ensure transparency and reliability in our services. When we affirm that your travel arrangements are entirely our commitment, we stand by our word. This fundamental approach sets us distinctly apart from others in the industry.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">How can I proceed with booking a trip through Trip Yaatra?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  It's as effortless as a stroll in the park. You have the option to book our trips directly from our website or submit your travel inquiry through our portal or social media channels. Our destination experts will promptly reach out to you, offering comprehensive trip details and assisting you through the booking procedure.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">Is it possible to modify the date after making a booking?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Certainly, alterations to trip dates can be accommodated up to 15 days prior to the departure date. However, this is subject to slot availability for the respective dates.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">What do you mean by community trips?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Community trips represent distinctive travel experiences where individuals journey alongside like-minded travel enthusiasts to explore captivating destinations. Throughout these trips, participants engage in interactive activities, foster connections with fellow travelers, and deeply engage in authentic local experiences.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">Are group trips deemed safe and suitable for solo female travelers</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  The safety and security of our travelers remain our foremost concern at Trip Yaatra. Specifically for solo female travelers, we take additional measures to ensure their utmost safety and comfort throughout the journey. Our trained team leaders are adept at creating a hassle-free and secure environment for all our travelers, especially women.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">As a solo traveler, which trip would be suitable for me?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  You are welcome to join any of our community trips. These journeys provide an excellent opportunity for solo travelers to connect with individuals from diverse backgrounds. Additionally, they are budget-friendly!
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">Is it possible for me to design a customized trip plan based on my preferred destination?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Certainly, we offer a wide range of destinations, and our team of destination experts is available to assist you in creating a tailored itinerary that aligns perfectly with your preferences and needs.
                </p>
              </details>
              <details className="w-[800px] rounded-lg ring-1 ring-darkvl md:w-[600px] sm:w-[400px] xs:w-[300px]">
                <summary className="px-4 py-6">Is the price mentioned inclusive of the flight ticket cost?</summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  The prices stated for our domestic group trips do not cover flight tickets. However, for international trips such as Bali and Dubai, we offer travel packages that include flights.
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