import { motion } from 'framer-motion';
import { Code, Server, Network } from 'lucide-react';
import styles from './Skills.module.css';

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
            title: 'Infraestructura & DevOps',
            icon: <Network size={32} />,
            skills: ['VMware vSphere', 'Proxmox', 'Docker', 'Zabbix', 'Cloudflare Zero Trust', 'PfSense', 'Ubiquiti UniFi', 'NetBox']
        },
        {
            title: 'Backend & Sistemas',
            icon: <Server size={32} />,
            skills: ['Java', 'Spring Boot', 'MySQL', 'Linux Administration', 'Shell Scripting', 'Nginx']
        },
        {
            title: 'Desarrollo Full Stack',
            icon: <Code size={32} />,
            skills: ['React', 'Vite', 'Javascript (ES6+)', 'CSS Modules', 'Framer Motion', 'Responsive Design']
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
