import { motion } from "framer-motion";
import { learningLanguages } from "@/data/portfolioData";

const LanguagesSection = () => {
  return (
    <section id="languages" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold relative inline-block pb-4">
            Langages en Apprentissage
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Voici les langages et technologies que je suis en train d'apprendre
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningLanguages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all text-center"
            >
              {/* Icon placeholder with color */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                style={{ backgroundColor: lang.color }}
              >
                {lang.name.charAt(0)}
              </motion.div>

              <h4 className="text-xl font-semibold mb-2">{lang.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">{lang.status}</p>

              {/* Progress Bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
              </div>
              <span className="text-sm font-medium" style={{ color: lang.color }}>
                {lang.progress}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
