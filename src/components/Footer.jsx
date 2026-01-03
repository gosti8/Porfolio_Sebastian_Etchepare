import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" style={{
            padding: '4rem 0',
            background: '#020202',
            borderTop: '1px solid #27272a',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                    ¿Listo para <span className="gradient-text">Transformar Ideas?</span>
                </h2>
                <p style={{ color: '#a1a1aa', marginBottom: '3rem' }}>
                    Actualmente abierto a nuevas oportunidades laborales.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginBottom: '3rem' }}>
                    <a href="https://www.linkedin.com/in/sebasti%C3%A1n-daniel-etchepare-546409286/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'transform 0.2s' }} className="hover:scale-110">
                        <Linkedin size={32} />
                    </a>
                    <a href="https://github.com/gosti8" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'transform 0.2s' }} className="hover:scale-110">
                        <Github size={32} />
                    </a>
                    <a href="mailto:sebastian.etchepare8@hotmail.com" style={{ color: 'white', transition: 'transform 0.2s' }} className="hover:scale-110">
                        <Mail size={32} />
                    </a>
                </div>

                <div style={{
                    marginBottom: '3rem',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '2rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    maxWidth: '600px',
                    margin: '0 auto 3rem auto'
                }}>
                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Oferta de Servicios</h3>
                    <p style={{ color: '#a1a1aa', lineHeight: '1.6' }}>
                        Experiencia sólida en <strong>Configuración de Switchs Cisco</strong>, Redes y Ciberseguridad.<br />
                        Disponible para proyectos freelance, consultoría DevOps o contratación Full Time.
                        <br /><br />
                        📩 <a href="mailto:sebastian.etchepare8@hotmail.com" style={{ color: '#3b82f6', fontWeight: 600 }}>sebastian.etchepare8@hotmail.com</a>
                    </p>
                </div>

                <p style={{ color: '#52525b', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Sebastián Etchepare. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
