/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { hero_section } from '../utils';

const Hero = () => {

    useGSAP(() => {
        gsap.to('#cta', { opacity: 1, y: 0, delay: 1 });
        gsap.to('#footer', { opacity: 1, delay: 1 });
        gsap.to('#down-arrow', { y: 10, repeat: -1, yoyo: true, ease: 'power1.inOut' });
    }, [])


    const scrollToForm = (id) => {
        document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section id="hero" className="nav-height">

            <div className="h-5/6 flex-center bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${hero_section})`, backgroundColor: `rgba(0,0,0,0.55)`, backgroundBlendMode: 'darken' }}
            >

                <div className="screen-max-width flex flex-col w-full sm:w-1/2 md:w-2/3 lg:w-1/2">
                    <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20 p-0 max-sm:p-3 rounded-lg">
                        <p className="text-white text-5xl uppercase md:tracking-widest roboto-slab-name">Vatsalya</p>
                        <p className="text-white text-5xl uppercase md:tracking-widest font-black roboto-slab-name">Singhi</p>
                        <p className="text-white text-xl capitalize md:tracking-widest md:leading-loose">
                            Full Stack Software Engineer
                        </p>
                        <p className="text-white text-pretty md:text-balance text-center">
                            Passionate Full Stack Developer crafting clean, impactful software solutions from concept to deployment, with a knack for robust, clean code.
                        </p>
                    </div>
                </div>

            </div>

            <div id="footer" className="opacity-0 pt-3">    
                <div className="flex-center flex-col text-white pt-1.5 cursor-pointer" onClick={() => scrollToForm("#AboutMe")}>
                    <p className="roboto-slab-name">Know More</p>
                    <svg id="down-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                    </svg>
                </div>
            </div>

        </section>
    )
}

export default Hero;