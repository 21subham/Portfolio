import useIntersectionObserver from "../hooks/useIntersectionObserver";
import trend from "../assets/Images/Trendbazaar.png";
import anon from "../assets/Images/anon.jpg";

const Projects = () => {
  const isInView = useIntersectionObserver("startPoint1", { threshold: 0.5 });

  const projects = [
    {
      title: "Blog Site",
      description: `
      A blog site with features such as login and signup made with Reactjs, redux and Appwrite. 
    `,
      gif: trend,
      link: "https://trendbazaar-three.vercel.app/",
    },
    {
      title: "Anon Message",
      description: `
     A message sharing platform where users can share messages anonymously with signup/login, OTP verification and AI message suggestions. Created using Nextjs, NExtauth,GEMINI AI api, ResendEmail, MongoDB, REST apis .
    `,
      gif: anon,
      link: "https://learnnext-mocha.vercel.app/",
    },
  ];

  return (
    <div className={`projects flex flex-col items-center p-8`}>
      <h2 id="startPoint1" className="text-2xl text-text font-bold mb-8">
        Recent Projects
      </h2>
      <div
        className={`grid grid-cols-2 gap-4 ${
          isInView ? "animate-pop-out" : ""
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project bg-tertiary p-4 rounded-lg cursor-pointer"
            onClick={() => (window.location.href = project.link)}
          >
            <img
              src={project.gif}
              alt={project.title}
              className="w-full h-auto"
            />
            <h3 className="text-lg text-text font-bold">{project.title}</h3>
            <p className="text-sm text-text">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
