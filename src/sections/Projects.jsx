import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import styles from './Projects.module.css';
import dashboard1 from '../assets/dashboard-1.png';
import dashboard2 from '../assets/dashboard-2.png';
import panelCentral from '../assets/panel-central.png';
import vpsHostinger from '../assets/vps-hostinger.png';

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Panel Central - Gestión Unificada',
            description: 'Portal administrativo centralizado protegido con Cloudflare Zero Trust para acceso seguro. Punto de entrada para los módulos de RRHH, Finanzas y Cosechas.',
            tags: ['Cloudflare Zero Trust', 'Docker', 'React', 'Security'],
            image: panelCentral,
            censor: true // Flag to trigger CSS masking
        },
        {
            id: 2,
            title: 'Infraestructura VPS Hostinger',
            description: 'Entorno de despliegue productivo. Servidor VPS KVM administrando múltiples contenedores Docker y servicios críticos con alta disponibilidad.',
            tags: ['Linux KVM', 'Debian 12', 'Docker Compose', 'Nginx Proxy'],
            image: vpsHostinger,
            censor: false
        },
        {
            id: 3,
            title: 'ERP Agropecuario - Gestión Integral',
            description: 'Plataforma completa para la administración de personal, cosechas y logística en tiempo real. Incluye paneles exclusivos para administradores y encargados de campo.',
            tags: ['React', 'Spring Boot', 'Docker', 'MySQL'],
            image: dashboard1,
            censor: false
        },
        {
            id: 4,
            title: 'Módulo de Gestión de Usuarios y Quintas',
            description: 'Sistema administrativo para el alta, baja y modificación de entidades críticas del negocio (Quintas, Colectivos, Usuarios). Autenticación robusta y roles.',
            tags: ['Java', 'Security', 'Vite', 'Rest API'],
            image: dashboard2,
            censor: false
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
                    <h2 className="section-title">Proyectos e <span className="gradient-text">Infraestructura</span></h2>
                    <p className={styles.subtitle}>Soluciones reales y arquitectura desplegada en producción.</p>
                </motion.div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.card}
                            layoutId={`card-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                        >
                            <div className={styles.imageContainer}>
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    className={styles.image}
                                />
                                {/* CSS Masking for "Service Company" if flagged */}
                                {project.censor && <div className={styles.censorBar} />}

                                <div className={styles.overlay}>
                                    <ZoomIn className={styles.zoomIcon} size={24} />
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

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            className={styles.lightboxContent}
                            layoutId={`card-${selectedId}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelectedId(null)}>
                                <X size={24} />
                            </button>

                            {(() => {
                                const project = projects.find(p => p.id === selectedId);
                                return (
                                    <>
                                        <div className={styles.lightboxImageWrapper}>
                                            <img src={project.image} alt={project.title} className={styles.lightboxImage} />
                                            {project.censor && <div className={styles.censorBarLarge} />}
                                        </div>
                                        <div className={styles.lightboxDetails}>
                                            <h3>{project.title}</h3>
                                            <p>{project.description}</p>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
