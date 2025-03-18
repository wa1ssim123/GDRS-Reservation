import styles from './Footer.module.css' // importer pour le style
export default function Footer() {

    return <footer className={styles.footer}>

        <div className={styles.auteurs}>
            &copy; Réaliser par  :  Aurelie Tenesso  |        Bellouz Wassim  |  Will Mbianga Ngwa  |  Mohamed Ghali Lahrech 
        </div>
        
    </footer>
}