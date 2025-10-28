// import { ArrowRight, ExternalLink, Github } from "lucide-react";

// const projects = [
//     {
//         id: 1,
//         title: "Modern Saas Website",
//         description: "A beautiful landing page using React and Tailwind",
//         image: "/Projects/Project 1.png",
//         tags: ["React, TailwindCSS"],
//         demoUrl: "https://modern-saas-website-tau.vercel.app/",
//         githubUrl: "https://github.com/Shardul1719/Modern-Saas-Website",
//     },

//     {
//         id: 2,
//         title: " UI/UX Saas Landing Page",
//         description: "Built a responsive SaaS landing page using React, Vite, and TailwindCSS",
//         image: "/Projects/Project 2.png",
//         tags: ["React, TailwindCSS, Vite"],
//         demoUrl: "https://ui-ux-saas-landing-page-nmrm.vercel.app/",
//         githubUrl: "https://github.com/Shardul1719/UI-UX-Saas-Landing-Page",
//     },

//     {
//         id: 3,
//         title: "E-commerce Platform",
//         description: "Full-featured E-commerce platform using HTML and CSS",
//         image: "/Projects/Project 3.png",
//         tags: ["HTML, CSS"],
//         // demoUrl: "#",
//         githubUrl: "https://github.com/Shardul1719/nike",
//     },
// ];

// export const ProjectsSection = () =>{
//     return (
//         <section id="projects" className="py-24 px-4 relative">
//             <div className="container max-auto max-w-5xl">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//                     {" "}
//                     Featured <span className="text-primary"> Projects </span>
//                 </h2>

//                 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//                     Here are some of my recent projects. Each project was carefully crafted with attention to detail, peroformance and user experience.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {projects.map((project , key) => (
//                         <div
//                           key={key}
//                           className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
//                         >
//                             <div className="h-48 overflow-hidden">
//                                 <img
//                                   src={project.image}
//                                   alt={project.title}
//                                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                                 />
//                             </div>

//                             <div className="p-6">
//                                 <div className="flex flex-wrap gap-2 mb-4">
//                                     {project.tags.map((tag) =>(
//                                         <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
//                                 <p className="text-muted-foreground text-sm mb-4">
//                                     {project.description}
//                                 </p>
//                                 <div className="flex justify-between items-center">
//                                     <div className="flex space-x-3">
//                                         <a 
//                                           href={project.demoUrl}
//                                           target="_blank"
//                                           className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                                         >
//                                           <ExternalLink size={20} />
//                                         </a>

//                                         <a 
//                                           href={project.githubUrl}
//                                           target="_blank"
//                                           className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                                         >
//                                           <Github size={20} />
//                                         </a>
                                        
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="text-center mt-12">
//                     <a
//                       className="cosmic-button w-fit flex items-center mx-auto gap-2 "
//                       target="_blank"
//                       href="https://github.com/Shardul1719"
//                     >
//                       Check My Github <ArrowRight size={16} />

//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// };

import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Modern Saas Website",
        description: "A beautiful landing page using React and Tailwind",
        image: "/Projects/Project 1.png",
        tags: ["React, TailwindCSS"],
        demoUrl: "https://modern-saas-website-tau.vercel.app/",
        githubUrl: "https://github.com/Shardul1719/Modern-Saas-Website",
    },

    {
        id: 2,
        title: " UI/UX Saas Landing Page",
        description: "Built a responsive SaaS landing page using React, Vite, and TailwindCSS",
        image: "/Projects/Project 2.png",
        tags: ["React, TailwindCSS, Vite"],
        demoUrl: "https://ui-ux-saas-landing-page-nmrm.vercel.app/",
        githubUrl: "https://github.com/Shardul1719/UI-UX-Saas-Landing-Page",
    },

    {
        id: 3,
        title: "E-commerce Platform",
        description: "Built a responsive landing page using React and Tailwind CSS, featuring scroll-triggered (AOS) and carousel card animations to create an engaging user experience",
        image: "/Projects/Project 3.png",
        tags: ["React, TailwindCSS"],
        demoUrl: "https://new-psi-brown.vercel.app/",
        githubUrl: "https://github.com/Shardul1719/new",
    },
];

export const ProjectsSection = () =>{
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container max-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, peroformance and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project , key) => (
                        <div
                          key={key}
                          className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                  src={project.image}
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) =>(
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl && (
                                            <a 
                                                href={project.demoUrl}
                                                target="_blank"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}

                                        <a 
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                      className="cosmic-button w-fit flex items-center mx-auto gap-2 "
                      target="_blank"
                      href="https://github.com/Shardul1719"
                    >
                      Check My Github <ArrowRight size={16} />

                    </a>
                </div>
            </div>
        </section>
    );
};