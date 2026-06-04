import { Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const EMAIL = 'sebastian.etchepare8@hotmail.com';

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <h2 className={styles.heading}>
                    ¿Listo para <span className="gradient-text">Transformar Ideas?</span>
                </h2>
                <p className={styles.subtitle}>
                    Actualmente abierto a nuevas oportunidades laborales.
                </p>

                <div className={styles.socials}>
                    <a
                        href="https://www.linkedin.com/in/sebasti%C3%A1n-daniel-etchepare-546409286/"
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
                    <h3 className={styles.cardTitle}>Oferta de Servicios</h3>
                    <p className={styles.cardText}>
                        Experiencia sólida en <strong>Configuración de Switches Cisco</strong>, Redes y Ciberseguridad.<br />
                        Disponible para proyectos freelance, consultoría DevOps o contratación Full Time.
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
