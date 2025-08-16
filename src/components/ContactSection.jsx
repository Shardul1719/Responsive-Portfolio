import {
  Instagram,
  Linkedin,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunites.
                </p>

                <div className="flex justify-center">
                    <div className="space-y-8 text-center">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                
                                <div className="text-left">
                                    <h4 className="font-medium">Email</h4>
                                    <a 
                                        href="mailto:sharduljadhav8452@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        sharduljadhav8452@gmail.com
                                    </a>
                                </div>
                            </div>


                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-medium">Phone</h4>
                                    <a 
                                        href="tel:+918452880249"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        +91 8452880249
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />{" "}
                                </div>

                                <div className="text-left">
                                    <h4 className="font-medium">Location</h4>
                                    <a 
                                    
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Mumbai, Mahrashtra, India
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <LinkedinIcon className="h-6 w-6 text-primary" />{" "}
                                </div>

                                <div className="text-left">
                                    <h4 className="font-medium">LinkedIn</h4>
                                    <a 
                                        href="https://www.linkedin.com/in/shardul-jadhav-685329301/" target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Shardul
                                    </a>
                                </div>
                            </div>


                        {/* <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/shardul-jadhav-685329301/" target="_blank">
                                    <Linkedin />
                                </a>
                            </div>
                        </div> */}
                    </div>

                </div>
            </div>
        </section>
    );
};