import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import styles from './Experience.module.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Desarrollador Full Stack & Arquitectura',
            company: 'Empresa Agropecuaria (ERP)',
            period: 'Nov 2024 - Presente',
            description: 'Lideré el desarrollo integral de un ERP para la gestión de cosechas y logística.',
            achievements: [
                'Desarrollo Frontend en React y Backend en Spring Boot.',
                'Implementación de Cloudflare Zero Trust para seguridad "Hub & Spoke".',
                'Despliegue conteinerizado con Docker y orquestación en VPS.',
                'Diseño de dashboards analíticos para toma de decisiones en tiempo real.'
            ]
        },
        {
            id: 2,
            role: 'Infraestructura y Redes',
            company: 'Municipalidad de Concordia',
            period: 'Ago 2024 - Dic 2024',
            description: 'Gestión operativa, monitoreo y modernización de la red municipal.',
            achievements: [
                'Administración de virtualización con VMware y Proxmox.',
                'Monitoreo crítico con Zabbix y visualización en Grafana/NagVis.',
                'Implementación de NetBox como "Single Source of Truth" para documentación.',
                'Configuración de Firewalls (pfSense) y Redes WiFi (UniFi).'
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
