import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import styles from './Hero.module.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.grid}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={styles.greeting}>Hola, soy</span>
                        <h1 className={styles.title}>
                            Sebastián <span className="gradient-text">Etchepare</span>
                        </h1>

                        <div className={styles.mainTitleWrapper}>
                            <h2 className={styles.mainTitle}>
                                Licenciado en Sistemas
                            </h2>
                        </div>

                        <h3 className={styles.subtitle}>
                            DevOps | SysAdmin | Freelancer | <br />
                            Desarrollador Full Stack
                        </h3>

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

                    <motion.div
                        className={styles.imageWrapper}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className={styles.profileFrame}>
                            <img src={profileImg} alt="Sebastián Etchepare" className={styles.profileImage} />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background decorations */}
            <div className={styles.glow} />
        </section>
    );
};

export default Hero;
