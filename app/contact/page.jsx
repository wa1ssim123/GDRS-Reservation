import React from 'react';
import Footer from '@/Components/Footer';
import styles from '../reserver/Page.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.section}>
                    <h1 className={styles.title}>Contactez-nous</h1>
                    <p className={styles.description}>
                        Nous sommes à votre disposition pour toute question, assistance ou demande d'information concernant notre plateforme GDRS.
                    </p>
                    <p className={styles.description}>
                        N’hésitez pas à nous contacter via les moyens suivants :
                    </p>
                    <ul className={styles.contactList}>
                        <li><strong> Email :</strong> support@gdrs.com</li>
                        <li><strong> Téléphone :</strong> +1 514 123 4567</li>
                        <li><strong> Adresse :</strong> 123 Rue de la Réservation, Ottawa, Canada</li>
                    </ul>
                    <p className={styles.description}>
                        Notre équipe vous répondra dans les plus brefs délais afin de vous offrir un service optimal et personnalisé.
                    </p>
                    <p className={styles.description}>
                        <strong>Heures d'ouverture :</strong>
                    </p>
                    <ul className={styles.contactList}>
                        <li>🕘 Lundi - Vendredi : 9h00 - 18h00</li>
                        <li>🕒 Samedi : 10h00 - 16h00</li>
                        <li>❌ Dimanche : Fermé</li>
                    </ul>
                    <p className={styles.description}>
                        Nous nous engageons à vous fournir une assistance rapide et efficace pour améliorer votre expérience sur notre plateforme.
                    </p>
                </section>
            </main>
            
        </div>
    );
}
