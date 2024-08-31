/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from "react-error-boundary";

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Publications = () => {

    const researchList = [
        {
            title: "Smart Surveillance System Using Convolutional Neural Network",
            link: "https://ijircce.com/admin/main/storage/app/pdf/QSx2F92mAnEHiZUO0keDG9tBaEszaPPy1yaDQ9Or.pdf",
            year: "June 2018",
            short: "This paper explores the digitization of data to create user-friendly Smart Surveillance Systems, enhancing public safety through automation while addressing the need for redundancy to ensure system reliability.",
        },
        {
            title: "Smart Shopping System for Billing Automation",
            link: "https://www.ijaer.com/admin/upload/1508066858_Vatsalya_4.pdf",
            year: "June 2017",
            short: "This paper explores digitalizing data to create efficient, user-friendly systems like the Smart Cart, revolutionizing shopping with instant billing and real-time expenditure tracking, aiming to streamline the shopping experience and allow consumers to focus on more meaningful activities.",
        },
    ]

    return (
        <ErrorBoundary fallback={<p>Something went wrong</p>}>
            <div id="Publications" className="w-full h-full p-4 rounded-xl shadow sm:p-6 border-gray-200 dark:border-gray-700 bg-black">

                <h3 className="flex items-center mb-1 text-lg font-semibold text-white gap-3 pb-1">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                    </svg>
                    <span>Research Publications</span>
                </h3>

                <ul className="my-4">
                    {researchList.map(({ title, link, year, short }, index) => (
                        <a key={index} href={link} target="_blank">
                            <li className={`cursor-pointer w-full h-full rounded overflow-hidden bg-zinc hover:bg-gray-800 px-4 py-2 scale_on_hover ${(index == researchList.length - 1) ? "mb-1" : "mb-5"}`}>
                                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                                    {title}
                                </h3>
                                <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{year}</time>
                                <time className="block mb-2 text-sm font-normal leading-normal text-left text-gray-500" title={short}>{short}</time>
                            </li>
                        </a>
                    ))}
                </ul>

            </div >
        </ErrorBoundary>
    )

}

export default Publications;