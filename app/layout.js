import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import styles from "./layout.module.css";

import { Roboto, Poppins } from "next/font/google";

// Importation des polices
const roboto = Roboto({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

const poppins = Poppins({
    weight: "700",
    style: "normal",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
});

// Métadonnées du site
export const metadata = {
    title: "GDRS",
    description: "Gestion De Réservation de Salle",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`${roboto.variable} ${poppins.variable}`}>
            <head>
                <link rel="icon" href="/logo.jpg" type="image/jpg" />
            </head>
            <body className={styles.body}>
                <div className={styles.wrapper}>
                    <Header />
                    <main className={styles.main}>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
