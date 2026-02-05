import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/portfolioData";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold relative inline-block pb-4">
            Témoignages
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Ce que disent les personnes avec lesquelles j'ai travaillé
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="relative p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all"
            >
              {/* Quote Icon */}
              <Quote 
                className="absolute top-6 right-6 text-primary/20" 
                size={48} 
              />

              {/* Content */}
              <p className="text-muted-foreground mb-6 italic relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-lg font-script text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-semibold">{testimonial.name}</h5>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
