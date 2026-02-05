import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { githubRepos, personalInfo } from "@/data/portfolioData";

const GithubSection = () => {
  return (
    <section id="github" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold relative inline-block pb-4">
            Mon GitHub
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
          </h2>
          <p className="text-muted-foreground mt-6 text-lg">
            Découvrez mes projets open source et contributions
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=dountiojoseph&show_icons=true&theme=radical&hide_border=true&bg_color=0d1117"
            alt="GitHub Stats"
            className="rounded-xl shadow-card max-w-full"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=dountiojoseph&layout=compact&theme=radical&hide_border=true&bg_color=0d1117"
            alt="Top Languages"
            className="rounded-xl shadow-card max-w-full"
          />
        </motion.div>

        {/* Repos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {githubRepos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <Github className="text-primary" size={24} />
                <h4 className="font-semibold truncate">{repo.name}</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {repo.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button asChild size="sm" className="w-full rounded-full">
                <a href={repo.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={14} />
                  Voir sur GitHub
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="rounded-full shadow-elegant">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              Voir tous mes projets
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubSection;
