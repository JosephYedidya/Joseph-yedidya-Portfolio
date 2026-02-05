import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { personalInfo } from "@/data/portfolioData";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    { icon: Phone, label: "Téléphone", value: "+237 6 91 12 98 81" },
    { icon: MapPin, label: "Localisation", value: "Douala, Cameroun" },
    { icon: Mail, label: "Email", value: personalInfo.email },
    { icon: Github, label: "GitHub", value: "@dountiojoseph" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai rapidement.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold relative inline-block pb-4">
            Contactez-Moi
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
          </h2>
          <p className="text-primary mt-6 text-2xl font-semibold">
            Des Questions ?
          </p>
          <p className="text-muted-foreground mt-2 uppercase tracking-wider">
            Je suis à votre service
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="text-primary" size={24} />
              </div>
              <h4 className="font-semibold mb-2">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <p className="text-primary text-xl font-semibold">
              Envoyez-moi un message
            </p>
            <p className="text-muted-foreground mt-2">
              Je réponds rapidement aux messages
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <Input
                type="text"
                name="name"
                placeholder="Votre Nom"
                required
                className="h-12 rounded-xl"
              />
              <Input
                type="email"
                name="email"
                placeholder="Votre Email"
                required
                className="h-12 rounded-xl"
              />
            </div>
            <Input
              type="text"
              name="subject"
              placeholder="Sujet"
              required
              className="h-12 rounded-xl"
            />
            <Textarea
              name="message"
              placeholder="Votre Message"
              required
              rows={6}
              className="rounded-xl resize-none"
            />
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="rounded-full px-10 shadow-elegant hover:scale-105 transition-transform"
              >
                {isSubmitting ? (
                  "Envoi en cours..."
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    Envoyer le Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
