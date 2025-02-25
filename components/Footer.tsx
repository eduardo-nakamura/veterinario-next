import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
    const currentYear: number = new Date().getFullYear();

    return (
        <footer className={styles.vet__footer}>    
            <p>&copy; {currentYear} Bruno May Pisetta - Atendimento Veterinário Domiciliar</p>
        </footer>
    )
}
