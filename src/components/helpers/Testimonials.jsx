/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { no_avatar } from '../../utils';

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
    ]

    return (
        <div className="w-full p-4 rounded-lg shadow sm:p-6 border-gray-200 dark:border-gray-700 bg-black">

            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                Testimonials
            </h3>

            <div className="grid my-4 space-y-3 rounded-lg shadow-sm md:grid-cols-1">
                {
                    testimonialList.map(({ name, position, date, message, image }, index) => (
                        <figure key={index} className="flex flex-col items-center justify-center p-8 text-center bg-zinc rounded-lg">
                            <blockquote className="max-w-2xl mx-auto mb-4 lg:mb-8 h-40 overflow-scroll no-scrollbar">
                                <time className="block mb-2 text-sm font-normal leading-normal text-left text-gray-400 dark:text-gray-500" title={message}>{message}</time>
                            </blockquote>
                            <figcaption className="flex items-center justify-center">
                                <img className="rounded-full w-9 h-9" src={image} alt="profile picture" title={name} />
                                <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                    <div className="capitalize">{name}</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">{position}</div>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 capitalize">{date}</time>
                                </div>
                            </figcaption>
                        </figure>
                    ))
                }

            </div>
        </div>
    )
}

export default Testimonials;