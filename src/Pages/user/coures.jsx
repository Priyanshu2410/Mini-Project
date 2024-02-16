import React from "react";

const Courses = () => {
    const courseData = [
        {
            title: "Introduction to React 1",
            description: "React is a popular frontend library used for creating UI components.",
            imageSrc: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Introduction to IOT",
            description: "IoT connects devices for seamless data exchange in real-time.",
            imageSrc: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Introduction to NodeJS",
            description: "Node.js is a JavaScript runtime for server-side development.",
            imageSrc: "https://www.bleepstatic.com/content/hl-images/2020/08/04/nodejs-header.jpg",
        },
        {
            title: "Introduction to arduino",
            description: "Arduino: Open-source platform for electronics prototyping and programming.",
            imageSrc: "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Introduction to AI",
            description: "AI: Creating intelligent machines that mimic human cognitive functions.",
            imageSrc: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Introduction to ML",
            description: "ML: Teaching machines to learn and improve from data.",
            imageSrc: "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        // Add more course data as needed
    ];

    return (
        <div className="mt-[40px]">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courseData.map((course, index) => (
            <div key={index} className="flex items-center justify-center px-5">
                <a href="#" className="group flex flex-col items-center overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 md:max-w-xl md:flex-row">
                    <img className="w-full h-auto md:w-48 md:h-60" src={course.imageSrc} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-blue-400">{course.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 group-hover:text-red-400">{course.description}</p>
                    </div>
                </a>
            </div>
        ))}
    </div>

    {/* Explore More Button */}
    <div className="flex justify-center mt-8">
        <button className="px-6 py-3 text-white bg-gray-800 rounded-md hover:bg-gray-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Explore More
        </button>
    </div>
</div>

    
    );
};

export default Courses;
