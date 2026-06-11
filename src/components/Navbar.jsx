import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
    { name: 'Experiencia', href: '#experience' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Highlight the nav link of the section currently in view
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.href.slice(1)))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveId(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className="container">
                <div className={styles.navContent}>
                    <a href="#top" className={styles.logo}>
                        Sebastián <span className="gradient-text">Etchepare</span>
                    </a>

                    <div className={styles.desktopMenu}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`${styles.navLink} ${activeId === link.href.slice(1) ? styles.active : ''}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Abrir menú"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`${styles.mobileLink} ${activeId === link.href.slice(1) ? styles.active : ''}`}
                            onClick={() => setIsOpen(false)}
                            style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
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
