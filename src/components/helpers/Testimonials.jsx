/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { no_avatar, herobg, herobg1, herobg2, herobg3 } from '../../utils';

import Swiper from 'swiper';

// testomonials - gallery of cards with dot based nav and auto scroll

const Testimonials = () => {

    const testimonialList = [
        {
            name: "Saravanan Mani",
            position: "Senior Software Engineer, BTC Team at BitGo",
            date: "October 11, 2019",
            image: "https://media.licdn.com/dms/image/D5603AQE6RocHNtiAMw/profile-displayphoto-shrink_100_100/0/1688197907184?e=1720051200&v=beta&t=v7r8pSIgLwcmpOkvZ0FrWTIQ4kKgpbqxEjHTckaTFjk",
            message: "I had the pleasure of working with Vatsalya at Gethu Games where he helped us in the design and development of Cryptoboot.io - a platform for learning and understanding cryptocurrencies and similar technologies. Vatsalya is focused on what he does and works very hard to achieve the exact results that the client is looking for. He exceeded expectations and made certain that the delivered product is exactly as envisioned . He's exceptionally talented and passionate about developing creative and innovative software solutions. He is friendly, easy to get along with, and respected by his co-workers. Vatsalya is proactive and takes courses to stay up-to-date on the latest techniques in software development and has the ability to learn and grasp technical skills exceptionally fast. Vatsalya is dedicated, intelligent and responsible which undoubtedly makes him a great asset.",
        },
        {
            name: "Saiyasodharan R",
            position: "frontend/Bitcoin developer",
            date: "April 2, 2019",
            image: no_avatar,
            message: "Vatsalya is a person, who is all about learning and exploring new technologies everyday. As a startup, though we have a core fixed tech stack, we often need to explore various other technologies and Vatsalya is our person for that. From solid expertise in Angular/Ionic for years, our Team is now into React/React Native, thanks to him. Apart from being multi passionate on Technology, He is a good team player. His peers work/feel positively with him around. And when it comes to task at hand, his dedication and commitment to it is 100%",
        },
        {
            name: "G Surendar Thina",
            position: "Founder | Mentor | Leader | Think Digital Community",
            date: "March 19, 2019",
            image: "https://media.licdn.com/dms/image/D5603AQGt5fjhuvBlBg/profile-displayphoto-shrink_100_100/0/1679606091635?e=1720051200&v=beta&t=Hjrd4fF1kSYr9ULvad8bYCoKOFrcj-R9TBha10Amr_k",
            message: "It's rare that you come across standout talent like Vatsalya. He expertly filled the role of a mentor in Machine Learning, IoT and PHP for our team's growth for over 2 years. I was always in awe of his ability to bring up new ideas in any public meetings and also command a room and get people on board with their ideas. No matter how hard a meeting goes, he made sure that everyone left with a happy mind. As a team member or a leader, Vatsalya earns my highest recommendation.",
        },
    ];


    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const onBtnClick = (index) => {
        setCurrentTestimonial(index);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTestimonial((prevIndex) => {
                return prevIndex === 2 ? 0 : prevIndex + 1;
            });
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);

    const getCarouselClasses = (index) => {
        if (index === currentTestimonial) return 'z-20 translate-x-0 z-30';
        if (index === (currentTestimonial === 2 ? 0 : currentTestimonial + 1)) return 'z-10 translate-x-full z-20';
        return 'z-30 -translate-x-full z-10';
    };

    return (

        <div id="Testimonials" className="w-full p-4 rounded-lg shadow sm:p-6 border-gray-200 dark:border-gray-700 bg-black">

            <h3 className="flex items-center mb-1 text-lg font-semibold text-white gap-3 pb-1">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <span>Testimonials</span>
            </h3>

            <div id="default-carousel" className="relative w-full my-4 rounded-lg shadow-sm " data-carousel="static">
                {/* Carousel wrapper */}
                <div className="relative h-96 overflow-hidden rounded-lg">
                    {
                        testimonialList.map(({ name, position, date, message, image }, index) => (
                            <div key={name}
                                className={`duration-700 ease-in-out absolute inset-0 transition-transform transform ${getCarouselClasses(index)} `}
                                data-carousel-item>
                                <figure key={index} className="flex flex-col items-center justify-center px-3 py-4 text-center bg-zinc rounded-lg h-full">

                                    <figcaption className="flex items-center justify-center mb-3">
                                        <img className="rounded-full w-9 h-9" src={image} alt="profile picture" title={name} loading="lazy" />
                                        <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                            <div className="capitalize">{name}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">{position}</div>
                                            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 capitalize">{date}</time>
                                        </div>
                                    </figcaption>

                                    <blockquote className="max-w-2xl mx-auto mb-2 flex-1 overflow-scroll no-scrollbar">
                                        <time className="h-60 block mb-2 text-sm font-normal leading-normal text-left text-gray-400 dark:text-gray-500" title={message}>{message}</time>
                                    </blockquote>


                                </figure>
                            </div>
                        ))
                    }
                </div>
                {/* Slider indicators */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {
                        testimonialList.map(({ name, position, date, message, image }, index) => (
                            <button key={name} type="button"
                                className={`w-3 h-3 rounded-full ${index == currentTestimonial ? 'bg-white' : 'bg-gray'}`}
                                aria-current={`${index == currentTestimonial}`} aria-label={`Slide ${index + 1}`}
                                data-carousel-slide-to={`${index}`} onClick={() => onBtnClick(index)} />
                        ))
                    }
                </div>
            </div>

        </div>

    )
}

export default Testimonials;