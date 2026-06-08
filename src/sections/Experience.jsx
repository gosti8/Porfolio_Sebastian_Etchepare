import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Desarrollador Full-Stack & DevOps Lead',
            company: 'Service Company (Contratista Rural)',
            period: 'Nov 2025 - Presente',
            description: 'Diseñé y desarrollé desde cero un ecosistema ERP completo para el rubro rural. Centralicé las operaciones corporativas abarcando gestión de recursos humanos, control logístico en campo y liquidación de empaques mediante microservicios y arquitectura Zero Trust.',
            achievements: [
                'Desarrollo Core: Creación de APIs robustas con Spring Boot y frontends reactivos, implementando PWA Offline para garantizar operatividad en zonas rurales sin señal.',
                'Infraestructura Cloud: Despliegue productivo sobre VPS (Hostinger) con Debian 12, orquestando todos los microservicios y bases de datos a través de Docker Compose.',
                'Seguridad Avanzada: Implementación de túneles encriptados con Cloudflare Zero Trust (Hub & Spoke), aislando puertos del servidor y protegiendo el ecosistema sin exponerlo a internet.',
                'Automatización de Datos: Respaldos automáticos (Backups) programados con scripts Bash y Crontab.'
            ]
        },
        {
            id: 2,
            role: 'Administrador de Infraestructura y Redes',
            company: 'Municipalidad de Concordia',
            period: 'Ago 2025 - Dic 2025',
            description: 'Gestión operativa, monitoreo continuo y modernización integral del centro de datos y red municipal.',
            achievements: [
                'Virtualización: Administración de clústeres y servidores físicos sobre entornos VMware vSphere y Proxmox.',
                'Monitoreo Crítico: Despliegue de Zabbix y paneles en tiempo real (Grafana/NagVis) para vigilar la salud de los servidores.',
                'Seguridad Perimetral: Configuración estricta de firewalls pfSense y despliegue de redes inalámbricas corporativas (UniFi).',
                'Networking: Gestión de conmutación (Cisco Switching) y optimización del flujo de red.'
            ]
        }
    ];

    return (
        <section id="experience" className={styles.experience}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className="section-title">Experiencia <span className="gradient-text">Profesional</span></h2>
                </motion.div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={styles.card}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.roleIcon}>
                                    <Briefcase size={24} />
                                </div>
                                <div>
                                    <h3 className={styles.role}>{exp.role}</h3>
                                    <div className={styles.meta}>
                                        <span className={styles.company}>{exp.company}</span>
                                        <span className={styles.period}><Calendar size={16} /> {exp.period}</span>
                                    </div>
                                </div>
                            </div>

                            <p className={styles.description}>{exp.description}</p>

                            <ul className={styles.achievements}>
                                {exp.achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
