import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={styles.greeting}>Hola, soy</span>
                        <h1 className={styles.title}>
                            Sebastián <span className="gradient-text">Etchepare</span> {/* Name corrected per request */}
                        </h1>
                        <h2 className={styles.subtitle}>
                            DevOps | SysAdmin | Freelancer | <br />
                            Desarrollador Full Stack
                        </h2>

                        <p className={styles.description}>
                            Transformo ideas complejas en sistemas eficientes y escalables.
                        </p>

                        <div className={styles.actions}>
                            <a href="#projects" className={styles.primaryBtn}>
                                Ver Proyectos <ArrowRight size={20} />
                            </a>
                            <a href="/cv.pdf" className={styles.secondaryBtn} target="_blank">
                                Descargar CV <Download size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background decorations can go here */}
            <div className={styles.glow} />
        </section>
    );
};

export default Hero;
