import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import resume from '../assets/resume.pdf';
const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
  
      // Calculate rotation based on mouse position relative to center
      const rotateX = (clientY - centerY) / 50;
      const rotateY = (clientX - centerX) / 50;
  
      setMousePosition({ x: rotateY, y: rotateX });
    };
  
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  return (
    <div
      id="Home"
      className="bg-gray-100 min-h-screen flex items-center justify-center ml-[0px] overflow-hidden"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-start">
        <div 
          className="relative group perspective-1000"
          style={{
            transform: `rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
            transition: "transform 0.5s ease-out"
          }}
        >
          <div className="animate-float">
            <img
              src="/personal.png"
              alt="profile"
              className="rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px] object-cover shadow-xl mb-6 md:mb-0 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-all duration-500"></div>
          </div>
        </div>
        <div className="text-center md:text-left md:ml-8 max-w-xl">
          <p className="text-2xl text-gray-700 font-semibold mb-4 animate-fadeIn">
            Hi, I am <span className="text-indigo-600">Anshik Suhane</span>, a
            Full-Stack Web Developer
          </p>
          <p className="text-gray-600 text-lg mb-6 animate-fadeIn animation-delay-200">
            Specializing in <span className="text-indigo-600">React.js</span>,{" "}
            <span className="text-indigo-600">Node.js</span>, and more.
            Passionate about building user-friendly, responsive web
            applications.
          </p>
          <div className="flex justify-center gap-6 animate-fadeIn animation-delay-400">
            <button
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact me
            </button>

            <a href={resume} download="resume"
              className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1"
            >
              Resume <ArrowDown className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;