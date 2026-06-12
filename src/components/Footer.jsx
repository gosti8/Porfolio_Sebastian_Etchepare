import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const EMAIL = 'sebastianetchepare8@gmail.com';

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <h2 className={styles.heading}>
                    ¿Listo para <span className="gradient-text">Digitalizar tu Negocio?</span>
                </h2>
                <p className={styles.subtitle}>
                    Transformo operaciones manuales en ecosistemas de software escalables.
                </p>

                <div className={styles.socials}>
                    <a
                        href="https://www.linkedin.com/in/sebastianetchepare/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={styles.socialLink}
                    >
                        <Linkedin size={26} />
                    </a>
                    <a
                        href="https://github.com/gosti8"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={styles.socialLink}
                    >
                        <Github size={26} />
                    </a>
                    <a href={`mailto:${EMAIL}`} aria-label="Email" className={styles.socialLink}>
                        <Mail size={26} />
                    </a>
                </div>

                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Servicios de Consultoría</h3>
                    <p className={styles.cardText}>
                        Especialista en <strong>Desarrollo a Medida, Arquitectura Cloud y Seguridad Zero Trust</strong>.<br />
                        Disponible para automatización de procesos empresariales y proyectos integrales con IA.
                        <br /><br />
                        📩 <a href={`mailto:${EMAIL}`} className={styles.email}>{EMAIL}</a>
                    </p>
                </div>

                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Sebastián Etchepare. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
