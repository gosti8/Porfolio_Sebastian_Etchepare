import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';
import dashboard1 from '../assets/dashboard-1.png';
import dashboard2 from '../assets/dashboard-2.png';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'ERP Agropecuario - Gestión Integral',
            description: 'Plataforma completa para la administración de personal, cosechas y logística en tiempo real. Incluye paneles exclusivos para administradores y encargados de campo.',
            tags: ['React', 'Spring Boot', 'Docker', 'MySQL', 'Cloudflare'],
            image: dashboard1,
            liveLink: '#', // Placeholder
            codeLink: null // Private project
        },
        {
            id: 2,
            title: 'Módulo de Gestión de Usuarios y Quintas',
            description: 'Sistema administrativo para el alta, baja y modificación de entidades críticas del negocio (Quintas, Colectivos, Usuarios). Autenticación robusta y roles.',
            tags: ['Java', 'Security', 'Vite', 'Rest API'],
            image: dashboard2,
            liveLink: '#',
            codeLink: null
        }
    ];

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className="section-title">Proyectos <span className="gradient-text">Destacados</span></h2>
                    <p className={styles.subtitle}>Soluciones reales implementadas en producción.</p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={styles.card}
                        >
                            <div className={styles.imageContainer}>
                                <img src={project.image} alt={project.title} className={styles.image} />
                                <div className={styles.overlay}>
                                    {/* Images only, no demo link */}
                                </div>
                            </div>

                            <div className={styles.content}>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>

                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
