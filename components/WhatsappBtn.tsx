'use client';
import React from 'react'
import styles from './WhatsappBtn.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { sendGTMEvent } from '@next/third-parties/google'

export default function WhatsappBtn() {
    return (
        <div className={styles.watsap}>
            {/* <a href="https://wa.me/5511975672727?text=SuaMensagem">   
            <FontAwesomeIcon icon={faWhatsapp} />
            </a> */}
            <button

                onClick={() => {
                    sendGTMEvent({ event: 'buttonClicked', value: 'button-whatsapp' });
                    window.open('https://wa.me/5511975672727?text=SuaMensagem', '_blank');
                }}
            >   <FontAwesomeIcon icon={faWhatsapp} /></button>
        </div>
    )
}
