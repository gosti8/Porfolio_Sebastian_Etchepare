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
                <p style={{ color: '#a1a1aa', marginBottom: '2rem' }}>
                    Actualmente abierto a nuevas oportunidades laborales.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                    <a href="#" style={{ color: 'white', transition: 'color 0.2s' }} className="hover:text-blue-500">
                        <Linkedin size={28} />
                    </a>
                    <a href="#" style={{ color: 'white' }}>
                        <Github size={28} />
                    </a>
                    <a href="mailto:tu-email@ejemplo.com" style={{ color: 'white' }}>
                        <Mail size={28} />
                    </a>
                </div>

                <p style={{ color: '#52525b', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Sebastián Etchepare. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
