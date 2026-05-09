import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Play, Image as ImageIcon, ChevronLeft, ChevronRight, CheckCircle, Code } from 'lucide-react';
import styles from './Projects.module.css';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeTab, setActiveTab] = useState('functional'); // 'functional' | 'technical'
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setActiveTab('functional');
        setCurrentMediaIndex(0);
    };

    const nextMedia = () => {
        if (selectedProject) {
            setCurrentMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
        }
    };

    const prevMedia = () => {
        if (selectedProject) {
            setCurrentMediaIndex((prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length);
        }
    };

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className="section-title">Sistemas e <span className="gradient-text">Infraestructura</span></h2>
                    <p className={styles.subtitle}>Soluciones reales y arquitectura desplegada en producción en los últimos 5 meses.</p>
                </motion.div>

                <div className={styles.grid}>
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`${styles.card} glass`}
                            layoutId={`card-${project.id}`}
                            onClick={() => openModal(project)}
                        >
                            <div className={styles.imageContainer}>
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className={styles.image}
                                />
                                {project.censor && <div className={styles.censorBar} />}

                                <div className={styles.overlay}>
                                    <ZoomIn className={styles.zoomIcon} size={32} />
                                </div>
                            </div>

                            <div className={styles.content}>
                                <div className={styles.tags}>
                                    {project.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                    {project.tags.length > 3 && <span className={styles.tag}>+{project.tags.length - 3}</span>}
                                </div>

                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.shortDescription}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox / Modal Avanzado */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className={styles.lightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className={styles.lightboxContent}
                            layoutId={`card-${selectedProject.id}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>

                            <div className={styles.modalGrid}>
                                {/* Lado Izquierdo: Galería Multimedia */}
                                <div className={styles.mediaSection}>
                                    <div className={styles.mainMedia}>
                                        {selectedProject.censor && <div className={styles.censorBarLarge} />}
                                        <AnimatePresence mode='wait'>
                                            <motion.div
                                                key={currentMediaIndex}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className={styles.mediaContainer}
                                            >
                                                {selectedProject.media[currentMediaIndex].type === 'video' ? (
                                                    <video
                                                        src={selectedProject.media[currentMediaIndex].url}
                                                        controls
                                                        autoPlay
                                                        className={styles.mediaItem}
                                                    />
                                                ) : (
                                                    <img
                                                        src={selectedProject.media[currentMediaIndex].url}
                                                        alt="Proyecto screenshot"
                                                        className={styles.mediaItem}
                                                    />
                                                )}
                                            </motion.div>
                                        </AnimatePresence>

                                        {selectedProject.media.length > 1 && (
                                            <>
                                                <button className={styles.navBtnPrev} onClick={prevMedia}><ChevronLeft /></button>
                                                <button className={styles.navBtnNext} onClick={nextMedia}><ChevronRight /></button>
                                            </>
                                        )}
                                    </div>
                                    
                                    <div className={styles.mediaThumbnails}>
                                        {selectedProject.media.map((media, idx) => (
                                            <button 
                                                key={idx} 
                                                className={`${styles.thumbBtn} ${idx === currentMediaIndex ? styles.thumbActive : ''}`}
                                                onClick={() => setCurrentMediaIndex(idx)}
                                            >
                                                {media.type === 'video' ? <Play size={16} /> : <ImageIcon size={16} />}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Lado Derecho: Detalles */}
                                <div className={styles.detailsSection}>
                                    <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                                    
                                    <div className={styles.modalTags}>
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className={styles.modalTag}>{tag}</span>
                                        ))}
                                    </div>

                                    <div className={styles.tabsContainer}>
                                        <button 
                                            className={`${styles.tabBtn} ${activeTab === 'functional' ? styles.tabActive : ''}`}
                                            onClick={() => setActiveTab('functional')}
                                        >
                                            <CheckCircle size={18} /> Visión Negocio
                                        </button>
                                        <button 
                                            className={`${styles.tabBtn} ${activeTab === 'technical' ? styles.tabActive : ''}`}
                                            onClick={() => setActiveTab('technical')}
                                        >
                                            <Code size={18} /> Visión Técnica
                                        </button>
                                    </div>

                                    <div className={styles.tabContent}>
                                        <AnimatePresence mode='wait'>
                                            {activeTab === 'functional' ? (
                                                <motion.div
                                                    key="functional"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 10 }}
                                                    dangerouslySetInnerHTML={{ __html: selectedProject.functionalSummary }}
                                                    className={styles.htmlContent}
                                                />
                                            ) : (
                                                <motion.div
                                                    key="technical"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 10 }}
                                                    dangerouslySetInnerHTML={{ __html: selectedProject.technicalSummary }}
                                                    className={styles.htmlContent}
                                                />
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
