import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import Image from "../assets/Roulian.png";
import Image2 from "../assets/Competition.png";
import Image3 from "../assets/Discord.jpg";
// import Ambition from "../assets/Ambition2.jpg";
// import Ambition from "../assets/Ambition2.jpg";
import './About.scss';



function About() {
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    useEffect(() => {
        gsap.from([line1], 3, {
          delay: 0.8,
          ease: "power3.out",
          x: 2000,
          stagger: {
            amount: 0.15
          }
        });
        gsap.from([line2], 3, {
            delay: 1.8,
            ease: "power3.out",
            x: -2000,
            stagger: {
              amount: 0.15
            }
          });
          gsap.from([line3], 3, {
            delay: 2.9,
            ease: "power3.out",
            x: 2000,
            stagger: {
              amount: 0.15
            }
          });
        //   gsap.from([line4], 3, {
        //     delay: 2.9,
        //     ease: "power3.out",
        //     x: -2000,
        //     stagger: {
        //       amount: 0.15
        //     }
        //   });
      }, [line1, line2, line3]);
    return (
        <div className="About-container">
            <h1 className="about-title">Historique</h1>
                <div ref={el => (line1 = el)} className="about-first-part">
                    <p className="first-info">Afin de combler leurs différents objectifs, SKZ et Zary décident de créer leur propre structure en décembre 2020.<br/>
                    Voici nos principaux objectifs pour l’année 2021 :<br/>
                    Développer la scène compétitive Hearthstone à travers l’organisation de différents évènements (tournois communautaires, tournois rémunérés, etc.).<br/>
                    Recruter des joueurs « espoirs », riches d’ambitions, afin de les pousser vers l’excellence.<br/>
                    A plus long terme, devenir une structure référente sur Hearthstone.</p>
                    <img id="logo" src={Image} alt="Competition" />
                </div>
                <div ref={el => (line2 = el)} className="about-second-part">
                    <img id="logo" src={Image2} alt="Roulian" />
                    <p className="second-info">Afin de mener à bien nos projets, voici les étapes que nous avons parcourues jusqu’ici :<br/>
                Nous avons commencé par recruter un staff afin d’assurer le bon développement de la structure.<br/>
                La suite logique fut le recrutement de joueurs prometteurs : Roulian, Logoss et Bongo, qui se qualifient régulièrement aux tournois mondiaux (Master Tour).<br/>
                Afin de rassembler notre communauté, nous avons organisé notre premier tournoi communautaire en juin 2021.<br/>
                En août, Bongo et Roulian auront l’occasion de représenter nos couleurs via leur participation au Master Tour Silvermoon.</p></div>
                <div ref={el => (line3 = el)} className="about-third-part">
                    <img id="logo" src={Image3} alt="Discord" />   
                    <p className="third-info">Notre site web constitue l’accès direct à tous les réseaux sociaux de nos joueurs, mais également du staff, et bien évidemment de la structure. Notre Discord communautaire se développe à grande vitesse, ce qui va accélérer l’arrivée de nouveaux tournois et de nos concepts originaux.<br/>
                Notre WebTV annoncera l’arrivée de streams réguliers, pour vous proposer un contenu audiovisuel, et vous faire connaître notre équipe et nos joueurs. Restez à l’affût des moindres informations !</p></div>
            <h2 className="second-title">Ambitions</h2>
            <div className="about-fourth-part">
            <p className="fourth-text"  >Nos ambitions à long terme sont claires :<br/>

Devenir une structure professionnelle et professionnalisante ;<br/>

Mettre en place un maximum d’évènements, à la fois en ligne, mais aussi en présentiel, afin de développer et promouvoir la scène Hearthstone (d’abord au niveau national, puis mondial).<br/>

En outre, nous nous donnerons les moyens de devenir une des structures référentes sur Hearthstone. Nous tenons à voir nos joueurs progresser, tout en assurant une convivialité et une bonne entente !<br/>

Nous nous donnerons à cœur pour réaliser différents projets, afin de satisfaire la communauté Hearthstone.<br/>

Nous avons une grande volonté de nous intégrer en tant que structure vectrice du compétitif sur Hearthstone.<br/>

Pour ce qui est du moyen et long terme, nous voulons toucher le niveau européen. A très long terme, nous visons même des projets mondiaux. Car après tout, pourquoi devrions-nous nous fixer des limites ?</p>
            </div>
        </div>
    )
}

export default About
