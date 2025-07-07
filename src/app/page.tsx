'use client';

import React, { useEffect, useState } from 'react';

import Image from "next/image";
import styles from "./page.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import dynamic from 'next/dynamic';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faClock, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import WhatsappBtn from '../../components/WhatsappBtn';

const DynamicMap = dynamic(() => import('../../components/Map'), {
  ssr: false,
});
// Foto de Caio  : https://www.pexels.com/pt-br/foto/papagaio-verde-na-mao-da-pessoa-56733/
// Photo by Pixabay: https://www.pexels.com/photo/long-coated-white-and-black-dog-220938/
// Foto de Wojciech Kumpicki: https://www.pexels.com/pt-br/foto/gato-malhado-marrom-2071882/
// Foto de Anna Shvets: https://www.pexels.com/pt-br/foto/animal-bicho-animal-de-estimacao-pet-4588056/
// Foto de Tima Miroshnichenko: https://www.pexels.com/pt-br/foto/homem-pessoa-pessoas-animal-6235238/
export default function Home() {
  const [mobileMenu, SetMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {

      if (window.innerWidth < 576) {
        SetMobileMenu(false)
      } else {
        SetMobileMenu(true)
      }
    }, false);
  }, [mobileMenu]);
  return (
    <>
      <Header />
     <WhatsappBtn /> 
      <div className={styles.page}>
        <section className={`${styles.sectionFlex} ${styles.section__colums__center}`} style={{ backgroundColor: 'var(--cor-verde-claro)' }}>
          <div className={styles.h1__container} style={{ alignSelf: 'flex-start' }}>
            <h1 className={styles.h1__title}>Veterinário a domicílio para cães e gatos | Bruno May Pisetta</h1>
          </div>
          <div className={styles.img__title}>
            <Image
              src="./close-cachorro.jpg" // Path to the image (in the `public` folder)
              alt={`Foto em close de um cachorro`}
              width={511}
              height={708}
              layout="responsive"
            />
          </div>
         
          <Link
            to="contato"
            smooth={true}
            duration={500}
            offset={-80} // Adjust as needed
          >
             <button className={styles.cta}>Entre em Contato</button>
          </Link>
        </section>

        <section id="servicos" className={`${styles.sectionFlex} ${styles.section__row__center}`} style={{ backgroundColor: 'var(--cor-branca)' }}>
          <div className={styles.itemFlex}>
            <h2>Serviços Oferecidos</h2>
            <p>Atendimento veterinário domiciliar para cães e gatos, incluindo:</p>
            <ul className={styles.list}>
              <li>Consultas</li>
              <li>Vacinas</li>
              <li>Coleta de sangue</li>
            </ul>
          </div>
          <div className={`${styles.itemFlex} ${styles.itemFlexCenter}`}>
            <div className={styles.img__title}>
              <Image
                src="./cachorro-exame-veterinario.jpg"
                alt={`Cachorro sendo examinado por um veterinário`}
                width={383}
                height={383}
                layout="responsive"
              />
            </div>
          </div>
        </section>

        <section id="horario" className={`${styles.sectionFlex} ${styles.section__row__center}`} style={{ backgroundColor: 'var(--cor-verde-claro)' }}>
          <div className={`${styles.itemFlex} ${styles.itemFlexCenter} ${styles.gridItemTwo}`}>
          <DynamicMap />
            {/* <div className={styles.img__title}>
              <Image
                src="./mapa-rua-nanuque-432.png"
                alt={`Localização da Rua Nanuque, 432`}
                width={383}
                height={383}
                layout="responsive"

              />
            </div> */}
          </div>
          <div className={`${styles.itemFlex}  ${styles.gridItemOne}`}>
            <h2><FontAwesomeIcon icon={faClock} /> Horário de Atendimento </h2>
            <p>Segunda a sexta: 8h às 18h <br />Sábados e domingos: 10h às 16h</p>

            <h2><FontAwesomeIcon icon={faLocationDot} /> Área de atendimento</h2>
            <p><strong>10km</strong> de raio saindo da Rua Nanuque, 432</p>
          </div>

        </section>
        <section className={`${styles.sectionFlex} ${styles.section__row__center}`} style={{ backgroundColor: 'var(--cor-verde-claro)' }}>
          
          
        </section>

        {/* <section id="horario" className={`${styles.sectionFlex} ${styles.section__row__center}`} style={{ backgroundColor: 'var(--cor-verde-claro)' }}>
          <div className={styles.img__title} style={{ borderRadius: '0' }}>
            <Image
              src="./mapa-rua-nanuque-432.png" // Path to the image (in the `public` folder)
              alt={`Localização da Rua Nanuque, 432`}
              width={715 / 1.8}
              height={727 / 1.8}

            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h2>Horário de Atendimento</h2>
            <p>Segunda a sexta: 8h às 18h <br />Sábados e domingos: 10h às 16h</p>

            <h2>Área de atendimento</h2>
            <p><strong>10km</strong> de raio saindo da Rua Nanuque, 432</p>
          </div>
        </section> */}
        <section id="missao" className={`${styles.sectionFlex} ${styles.section__row__center}`} style={{ backgroundColor: 'var(--cor-branca)' }}>
          <div className={styles.itemFlex}>
            <h2>Missão e Valores</h2>
            <p>Acredito no cuidado humanizado que prioriza o bem-estar da família pet e tutor(es). Realizo um atendimento que valoriza as características individuais de cada animal e os valores de seus tutores. Considero que o atendimento a domicílio não é apenas uma comodidade, como também faz parte do respeito ao animal ao proporcionar um ambiente seguro e familiar durante as consultas. </p>
            <p>Prezo pelo acompanhamento longitudinal, de modo que seja possível compreender e valorizar os diferentes momentos e fases da vida. O acompanhamento personalizado ao decorrer do tempo permite identificar a dinâmica diária, as  peculiaridades, os gostos e as necessidades de cada indivíduo. Essa visão geral da saúde e do bem estar animal minimiza o volume de procedimentos  invasivos excessivos, tornando possível realizar encaminhamentos pontuais para especialistas que se adequem ao perfil do animal  apenas quando necessário.</p>
          </div>
          <div className={`${styles.itemFlex} ${styles.itemFlexCenter}`}>
            <div className={styles.img__title}>
              <Image
                src="./detalhe-rosto-gato.jpg"
                alt={`Foto em close de um gato`}
                width={383}
                height={383}
                layout="responsive"
              />
            </div>
          </div>
        </section>
        {/* <section id="missao" className={`${styles.sectionFlex} ${styles.section__row__center}`} style={{ backgroundColor: 'var(--cor-branca)' }}>

          <div>
            <h2>Missão e Valores</h2>
            <p>Acredito no cuidado humanizado que prioriza o bem-estar da família pet e tutor(es). Realizo um atendimento que valoriza as características individuais de cada animal e os valores de seus tutores. Considero que o atendimento a domicílio não é apenas uma comodidade, como também faz parte do respeito ao animal ao proporcionar um ambiente seguro e familiar durante as consultas. </p>
            <p>Prezo pelo acompanhamento longitudinal, de modo que seja possível compreender e valorizar os diferentes momentos e fases da vida. O acompanhamento personalizado ao decorrer do tempo permite identificar a dinâmica diária, as  peculiaridades, os gostos e as necessidades de cada indivíduo. Essa visão geral da saúde e do bem estar animal minimiza o volume de procedimentos  invasivos excessivos, tornando possível realizar encaminhamentos pontuais para especialistas que se adequem ao perfil do animal  apenas quando necessário.</p>
          </div>
          <div className={styles.img__title}>
            <Image
              src="./detalhe-rosto-gato.jpg"
              alt={`Foto em close de um gato`}
              width={383}
              height={383}
              layout="responsive"
            />
          </div>
        </section> */}
        {/* <section id="missao" className={styles.sectionGrid2col} style={{ backgroundColor: 'var(--cor-branca)' }}>
          <div className={`${styles.gridItem} ${styles.gridItemTwo}`}>
            <h2>Missão e Valores</h2>
            <p>Acredito no cuidado humanizado que prioriza o bem-estar da família pet e tutor(es). Realizo um atendimento que valoriza as características individuais de cada animal e os valores de seus tutores. Considero que o atendimento a domicílio não é apenas uma comodidade, como também faz parte do respeito ao animal ao proporcionar um ambiente seguro e familiar durante as consultas. </p>
            <p>Prezo pelo acompanhamento longitudinal, de modo que seja possível compreender e valorizar os diferentes momentos e fases da vida. O acompanhamento personalizado ao decorrer do tempo permite identificar a dinâmica diária, as  peculiaridades, os gostos e as necessidades de cada indivíduo. Essa visão geral da saúde e do bem estar animal minimiza o volume de procedimentos  invasivos excessivos, tornando possível realizar encaminhamentos pontuais para especialistas que se adequem ao perfil do animal  apenas quando necessário.</p>
          </div>
          <div className={`${styles.gridItem} ${styles.gridItemOne}`} style={{ alignItems: 'center' }}>
            <div className={styles.img__title}>
              <Image
                src="./detalhe-rosto-gato.jpg"
                alt={`Foto em close de um gato`}
                width={383}
                height={383}
                layout="responsive"
              />
            </div>
          </div>
        </section> */}
        <section id="bruno" className={`${styles.sectionFlex} ${styles.section__row__center}`} style={{ backgroundColor: 'var(--cor-verde-claro)' }}>
          <div className={`${styles.itemFlex} ${styles.itemFlexCenter} ${styles.gridItemTwo}`}>
            <div className={styles.img__title}>
              <Image
                src="./veterinario-bruno-may-pisetta.jpeg" // Path to the image (in the `public` folder)
                alt={`Foto de Bruno May Pisetta`}
                width={383}
                height={383}
                layout="responsive"
              />
            </div>
          </div>
          <div className={`${styles.itemFlex}  ${styles.gridItemOne}`}>
            <h2>Quem é Bruno</h2>
            <p>Me formei em Medicina Veterinária pela Universidade Anhembi Morumbi. Desde criança tive contato com a natureza e sua fauna, fazendo trekking, acampando, escalando, dentre outras atividades. Isso me levou a ter muita curiosidade em relação aos animais, fossem eles grandes ou pequenos, vertebrados ou invertebrados. </p>
            <p>Me considero uma pessoa paciente, preocupada com o bem estar do outro, sempre empenhado em ajudar da melhor forma possível, e reflito estas qualidades nos atendimentos que realizo. Sendo pai de dois cachorros e um coelho, sei como o ambiente influencia as consultas e como é importante que o seu pet se sinta seguro em um local familiar.</p>
          </div>
        </section>
        {/* <section id="bruno" className={styles.sectionGrid2col} style={{ backgroundColor: 'var(--cor-verde-claro)' }}>
          <div className={styles.gridItem} style={{ alignItems: 'center' }}>

            <div className={styles.img__title}>
              <Image
                src="./veterinario-bruno-may-pisetta.jpeg" // Path to the image (in the `public` folder)
                alt={`Foto de Bruno May Pisetta`}
                width={383}
                height={383}
                layout="responsive"
              />
            </div>

          </div>
          <div className={styles.gridItem}>
            <h2>Quem é Bruno</h2>
            <p>Me formei em Medicina Veterinária pela Universidade Anhembi Morumbi. Desde criança tive contato com a natureza e sua fauna, fazendo trekking, acampando, escalando, dentre outras atividades. Isso me levou a ter muita curiosidade em relação aos animais, fossem eles grandes ou pequenos, vertebrados ou invertebrados. </p>
            <p>Me considero uma pessoa paciente, preocupada com o bem estar do outro, sempre empenhado em ajudar da melhor forma possível, e reflito estas qualidades nos atendimentos que realizo. Sendo pai de dois cachorros e um coelho, sei como o ambiente influencia as consultas e como é importante que o seu pet se sinta seguro em um local familiar.</p>
          </div>


        </section> */}
        <section id="contato" className={`${styles.sectionFlex} ${styles.section__row__center}`} style={{ backgroundColor: 'var(--cor-branca)' }}>
          <div className={styles.itemFlex} >
            <h2>Entrar em Contato</h2>
            <p>Entre em contato conosco e agende uma consulta</p>
            <div className={styles.contatos}>

              <a href="https://www.linkedin.com/in/bruno-pisetta"><FontAwesomeIcon icon={faLinkedin} /></a>

              <a href="https://wa.me/5511975672727?text=SuaMensagem">   <FontAwesomeIcon icon={faWhatsapp} /></a>

              <a href="mailto:bruno.may.pisetta@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>

              <a href="https://trakto.link/BrunoMayPisetta"> <FontAwesomeIcon icon={faAddressCard} /></a>
            </div>

            {/* <p>Whatsapp: <a href="https://wa.me/5511993177378?text=SuaMensagem">(11) 99317-7378</a></p>
            <p>Email: <a href="mailto:bruno.may.pisetta@gmail.com">bruno.may.pisetta@gmail.com</a></p>
            <p>Linkedin: <a href="https://www.linkedin.com/in/bruno-pisetta">www.linkedin.com/in/bruno-pisetta</a></p>
            <p>Link cartão de visitas digital: <a href="https://trakto.link/BrunoMayPisetta">https://trakto.link/BrunoMayPisetta</a></p> */}
          </div>
          <div className={styles.itemFlex}></div>
        </section>
        {/* <section id="contato" className={styles.sectionGrid2col} style={{ backgroundColor: 'var(--cor-branca)' }}>
          <div className={styles.gridItem}>
            <h2>Contato</h2>
          </div>
          <div className={styles.gridItem}>
            <p>Whatsapp: <a href="https://wa.me/5511993177378?text=SuaMensagem">(11) 99317-7378</a></p>
            <p>Email: <a href="mailto:bruno.may.pisetta@gmail.com">bruno.may.pisetta@gmail.com</a></p>
            <p>Linkedin: <a href="https://www.linkedin.com/in/bruno-pisetta">www.linkedin.com/in/bruno-pisetta</a></p>
            <p>Link cartão de visitas digital: <a href="https://trakto.link/BrunoMayPisetta">https://trakto.link/BrunoMayPisetta</a></p>
          </div>
        </section> */}

      </div>
      <Footer />
    </>
  );
}
