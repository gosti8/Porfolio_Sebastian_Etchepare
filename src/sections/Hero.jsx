import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import styles from './Hero.module.css';
import profileImg from '../assets/profile.jpg';

const ROLES = [
    'Soluciones a Medida',
    'Transformación Digital',
    'AI-Augmented Engineering',
    'Arquitectura Cloud',
    'Seguridad & Redes',
];

const RotatingRole = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ROLES.length);
        }, 2600);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className={styles.rotatingWrapper}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    className="gradient-text"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                    {ROLES[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const Hero = () => {
    return (
        <section id="top" className={styles.hero}>
            {/* Animated ambient background */}
            <div className={styles.gridBg} />
            <div className={`aurora ${styles.auroraPrimary}`} />
            <div className={`aurora ${styles.auroraAccent}`} />

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
                            Especialista en <RotatingRole />
                        </h3>

                        <p className={styles.description}>
                            Como Consultor Tecnológico, diseño y construyo ecosistemas de software a medida para digitalizar y potenciar operaciones corporativas. Apalanco mi trabajo en herramientas de <strong>Desarrollo Acelerado con IA</strong> (AI-Augmented Engineering) para entregar plataformas hiper-seguras e infraestructura Cloud en tiempos récord, con sólida experiencia en el sector logístico y agropecuario.
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
        </section>
    );
};

export default Hero;
