/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
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
        <div id="Publications" className="w-full p-4 rounded-lg shadow sm:p-6 border-gray-200 dark:border-gray-700 bg-black">

            <h3 className="flex items-center mb-1 text-lg font-semibold text-white gap-3 pb-1">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
                <span>Research Publications</span>
            </h3>

            <ul className="my-4">
                {researchList.map(({ title, link, year, short }, index) => (
                    <li key={index}
                        className={`w-full h-full rounded overflow-hidden bg-zinc hover:bg-gray-800 px-4 py-2 ${(index == researchList.length - 1) ? "mb-1" : "mb-5"}`}>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                            {title}
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{year}</time>
                        <time className="block mb-2 text-sm font-normal leading-normal text-left text-gray-500" title={short}>{short}</time>
                    </li>
                ))}
            </ul>


            {/* <div id="default-carousel" className="relative w-full my-4 rounded-lg shadow-sm " data-carousel="static">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {
                        researchList.map(({ title, link, year, short }, index) => (
                            <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item="">
                                <div key={index}
                                    className={`w-full h-fit rounded overflow-hidden bg-zinc hover:bg-gray-800 px-4 py-2 ${(index == researchList.length - 1) ? "mb-1" : "mb-5"}`}>
                                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                                        {title}
                                    </h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{year}</time>
                                    <time className="block mb-2 text-sm font-normal leading-normal text-left text-gray-500" title={short}>{short}</time>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {
                        researchList.map((obj, index) => (
                            <button key={index} type="button" className="w-3 h-3 rounded-full" aria-current={`${index == 0}`} aria-label={`Slide ${index + 1}`} data-carousel-slide-to={`${index}`} />
                        ))
                    }
                </div>
                <button type="button" data-carousel-prev
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                <button type="button" data-carousel-next
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div> */}

        </div >
    )

}

export default Publications;