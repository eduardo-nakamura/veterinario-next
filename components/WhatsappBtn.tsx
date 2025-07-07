import React from 'react'
import styles from './WhatsappBtn.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function WhatsappBtn() {
    return (
        <div className={styles.watsap}>
            <a href="https://wa.me/5511975672727?text=SuaMensagem">   
            <FontAwesomeIcon icon={faWhatsapp} />
            </a>

        </div>
    )
}
