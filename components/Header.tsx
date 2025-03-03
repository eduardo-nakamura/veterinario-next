'use client'; // Adicione esta linha no topo do arquivo

import React, { useState } from 'react'
import Link from 'next/link'; // Importe o componente Link do Next.js
import Image from "next/image";
import styles from './Header.module.css'; // Importe os estilos CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faDog, faUserDoctor, faHeart, faCircleInfo, faBars, faX } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image
                        src="/logo_green.png"
                        alt="Next.js logo"
                        width={38}
                        height={38}
                        priority
                    />
                </div>

                <button className={styles.menuButton} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={menuOpen ? faX : faBars} />
                </button>

                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}>
                            <Link href="#servicos" className={styles.navLink}>
                                <FontAwesomeIcon icon={faDog} /> Serviços
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#horario" className={styles.navLink}>
                                <FontAwesomeIcon icon={faUserDoctor} /> Horário
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#missao" className={styles.navLink}>
                                <FontAwesomeIcon icon={faHeart} /> Missão e Valores
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#bruno" className={styles.navLink}>
                                <FontAwesomeIcon icon={faCircleInfo} /> Quem é Bruno
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="#contato" className={styles.navLink}>
                                <FontAwesomeIcon icon={faAddressCard} />Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
