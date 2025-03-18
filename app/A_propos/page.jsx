import React from 'react';
import Footer from '@/Components/Footer';
import styles from '../reserver/Page.module.css';

export default function Apropos() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <section className={styles.section}>
                    <h1 className={styles.title}>À Propos</h1>
                    <p className={styles.description}>
                        <strong>GDRS (Gestion De Réservation de Salle)</strong> est une plateforme innovante conçue pour simplifier et optimiser la gestion des réservations de salles.  
                        Que ce soit pour des conférences, des réunions professionnelles ou des événements académiques, notre système garantit une organisation fluide, rapide et efficace.
                    </p>
                    <p className={styles.description}>
                        Nous mettons à votre disposition une interface moderne et intuitive qui vous permet de consulter la disponibilité des espaces en temps réel, 
                        de réserver en quelques clics et d’éviter les conflits d’utilisation.
                    </p>
                    <p className={styles.description}>
                        <strong>Nos engagements :</strong>  
                    </p>
                    <ul className={styles.list}>
                        <li>📌 Une gestion efficace et centralisée des salles.</li>
                        <li>⚡ Un processus de réservation rapide et sécurisé.</li>
                        <li>📅 Une visibilité en temps réel sur la disponibilité des espaces.</li>
                        <li>🔒 Des réservations sécurisées et un accès contrôlé.</li>
                        <li>📊 Un système adaptable aux besoins des entreprises, universités et organisations.</li>
                    </ul>
                    <p className={styles.description}>
                        Notre mission est de révolutionner la gestion des espaces en proposant une solution fiable, performante et accessible à tous.
                        Faites confiance à <strong>GDRS</strong> pour une organisation sans faille et une expérience utilisateur optimisée.
                    </p>
                </section>
            </main>
           
        </div>
    );
}
