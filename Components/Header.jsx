import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.jpg'; // Correction ici

export default function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Image src={logo} alt="Logo" className={styles.logo} />
            </div>
            <nav className={styles.navigation}>
                <Link href="/" className={styles.nav_link}>Accueil</Link>
                <Link href="/reserver" className={styles.nav_link}>Réserver une salle</Link>
                <Link href="/A_propos" className={styles.nav_link}>À propos</Link> {/* Chemin corrigé */}
                <Link href="/contact" className={styles.nav_link}>Contact</Link>
            </nav>
        </header>
    );
}
