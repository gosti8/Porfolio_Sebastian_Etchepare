import { motion } from 'framer-motion';
import { Code, Server, Network } from 'lucide-react';
import styles from './Skills.module.css';

// Devicon slugs for skills that have a recognizable brand logo.
// Anything not listed renders as a clean text pill (graceful fallback).
const ICON_MAP = {
    'Java Spring Boot': 'spring/spring-original',
    'React & Vite': 'react/react-original',
    'PostgreSQL': 'postgresql/postgresql-original',
    'Tailwind CSS': 'tailwindcss/tailwindcss-original',
    'Docker & Docker Compose': 'docker/docker-original',
    'Cloudflare Zero Trust': 'cloudflare/cloudflare-original',
    'VPS Linux (Debian 12 / Hostinger)': 'debian/debian-original',
    'Crontab & Bash Scripting': 'bash/bash-original',
    'Nginx': 'nginx/nginx-original'
};

const deviconUrl = (slug) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}.svg`;

const Skills = () => {
    const customVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 }
        }),
    };

    const skillCategories = [
        {
            title: 'Desarrollo Full Stack & Arquitectura',
            icon: <Code size={32} />,
            skills: ['Java Spring Boot', 'React & Vite', '📱 PWA Offline-First', 'PostgreSQL', 'Tailwind CSS']
        },
        {
            title: 'Infraestructura Cloud & DevOps',
            icon: <Server size={32} />,
            skills: ['Docker & Docker Compose', 'Cloudflare Zero Trust', 'VPS Linux (Debian 12 / Hostinger)', 'Crontab & Bash Scripting', '🌐 Gestión de Dominios y DNS']
        },
        {
            title: 'Redes, Virtualización & Seguridad',
            icon: <Network size={32} />,
            skills: ['🖥️ Proxmox & VMware vSphere', '🧱 pfSense Firewall', '🖧 Cisco CCNA', '📊 Zabbix & Grafana', 'Nginx']
        }
    ];

    return (
        <section id="skills" className={styles.skills}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className="section-title">Habilidades <span className="gradient-text">Técnicas</span></h2>
                    <p className={styles.subtitle}>Stack tecnológico que domino para crear soluciones robustas.</p>
                </motion.div>

                <div className={styles.grid}>
                    {skillCategories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={customVariants}
                            className={styles.categoryCard}
                        >
                            <div className={styles.iconWrapper}>
                                {cat.icon}
                            </div>
                            <h3 className={styles.catTitle}>{cat.title}</h3>

                            <div className={styles.skillList}>
                                {cat.skills.map(skill => (
                                    <div key={skill} className={styles.skillItem}>
                                        {ICON_MAP[skill] && (
                                            <img
                                                src={deviconUrl(ICON_MAP[skill])}
                                                alt=""
                                                aria-hidden="true"
                                                loading="lazy"
                                                className={styles.skillIcon}
                                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                            />
                                        )}
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
