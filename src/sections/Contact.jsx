/**
 * Servicio de Contacto.
 * Permite a los usuarios enviar mensajes directamente al correo del propietario
 * utilizando la API de Web3Forms sin necesidad de un backend propio.
 */
import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        
        const form = e.target;
        const formData = new FormData(form);
        
        // Clave de acceso de Web3Forms
        formData.append("access_key", "7e885316-5c11-4117-a454-01e7a2fd4267");
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error("Error submitting form", data);
                setStatus('error');
            }
        } catch (error) {
            console.error("Fetch error", error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className={styles.contactSection}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.badge}>Hablemos</span>
                    <h2 className="section-title">Ponte en <span className="gradient-text">Contacto</span></h2>
                    <p className={styles.subtitle}>
                        ¿Tienes un proyecto en mente o buscas colaboración? Completa el formulario y te responderé a la brevedad.
                    </p>
                </div>

                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        {/* Honeypot field to prevent spam */}
                        <input type="checkbox" name="botcheck" className={styles.hidden} style={{ display: 'none' }} />

                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Nombre / Persona *</label>
                                <input type="text" id="name" name="name" required placeholder="Ej: Juan Pérez" />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="company">Empresa (Opcional)</label>
                                <input type="text" id="company" name="company" placeholder="Ej: Tech Solutions" />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">Correo Electrónico *</label>
                            <input type="email" id="email" name="email" required placeholder="tu@correo.com" />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="service">Solicitud de Servicio *</label>
                            <select id="service" name="service" required defaultValue="">
                                <option value="" disabled>Selecciona una opción...</option>
                                <option value="Desarrollo Web">Desarrollo Web</option>
                                <option value="Desarrollo Móvil">Desarrollo Móvil</option>
                                <option value="Consultoría / Asesoría">Consultoría / Asesoría</option>
                                <option value="Oportunidad Laboral">Oportunidad Laboral</option>
                                <option value="Otro">Otro / General</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="message">Mensaje *</label>
                            <textarea id="message" name="message" rows="5" required placeholder="Cuéntame más sobre tu proyecto o necesidad..."></textarea>
                        </div>

                        <button 
                            type="submit" 
                            className={`${styles.submitBtn} ${status === 'submitting' ? styles.submitting : ''}`}
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>

                        {status === 'success' && (
                            <p className={styles.successMsg}>¡Mensaje enviado con éxito! Te contactaré pronto.</p>
                        )}
                        {status === 'error' && (
                            <p className={styles.errorMsg}>Hubo un problema al enviar el mensaje. Por favor, intenta más tarde.</p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
