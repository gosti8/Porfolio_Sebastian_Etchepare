import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Make sure lucide-react is installed
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experiencia', href: '#experience' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.navContent}>
                    <div className={styles.logo}>
                        Sebastián <span className="gradient-text">Etchepare</span>
                    </div>

                    <div className={styles.desktopMenu}>
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className={styles.navLink}>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.mobileLink}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
