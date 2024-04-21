/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const Navbar = () => {

    const navList = [
        {
            name: "About",
            CustomIcon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            ),
        }, {
            name: "Experience",
            CustomIcon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>

            ),
        }, {
            name: "Education",
            CustomIcon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
            ),
        }, {
            name: "Projects/Skills",
            CustomIcon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                </svg>
            ),
        }, {
            name: "Testimonials",
            CustomIcon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                </svg>
            ),
        }, {
            name: "Publications",
            CustomIcon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
            ),
        }, {
            name: "Contact",
            CustomIcon: () => (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
            ),
        }];

    const [toggleMenu, setToggleMenu] = useState(true);

    const onToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const handleResize = () => {
            // Perform actions on window resize
            if (window.innerWidth >= 786) {
                setToggleMenu(true);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className={`w-full flex items-center justify-between ${toggleMenu && "sticky top-0 z-50"}`}>
                <nav className="flex items-center justify-between w-full screen-max-width bg-black px-3 py-5">
                    {/* big screen */}
                    <div className="flex-none block max-md:hidden cursor-pointer text-xl text-white transition-all" title="Vatsalya Singhi">
                        &lt;VS/&gt;
                    </div>
                    {/* small screen */}
                    <div className="flex-none hidden max-md:block cursor-pointer text-xl text-white transition-all" title="Vatsalya Singhi">
                        &lt;VS/&gt;
                    </div>
                    {/* big screen */}
                    <div className="flex-1 block max-md:hidden">
                        <div className="w-full flex max-md:justify-center justify-end">
                            {navList.map(({ name, CustomIcon }, i) => (
                                <div key={name} title={name} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                                    {name}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* small screen */}
                    <div className="flex-none hidden max-md:block cursor-pointer text-white transition-all" title="Menu" onClick={onToggleMenu} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </nav>
            </header>

            {/* small screen menu modal */}
            <div className={`relative z-10 ${toggleMenu && "hidden"}`} aria-labelledby="modal-title" role="dialog" aria-modal={`${toggleMenu}`}>
                <div className="fixed inset-0 bg-black bg-opacity-100 transition-opacity"></div>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center text-center">
                        <div className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all my-8 w-full h-full">

                            <div className="bg-black px-5 py-5">
                                <div className="flex flex-col items-center justify-center sm:px-5">
                                    {/* Close Modal Btn */}
                                    <div className="flex items-center justify-end w-full">
                                        <div className="cursor-pointer text-white transition-all my-3 mx-3" title="Close Menu" onClick={onToggleMenu} id="modal-title">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    {/* list of subsections */}
                                    <div className="text-center">
                                        <div className="w-full h-full flex flex-col justify-center">
                                            {navList.map(({ name, CustomIcon }, i) => (
                                                <div key={name} title={name} className="w-full flex items-center justify-self-stretch gap-7 px-2 py-2.5 text-xl cursor-pointer text-white transition-all">
                                                    <CustomIcon />
                                                    <p className="text-justify">{name}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* download resume */}
                            <div className="w-full flex justify-center py-5">
                                <button type="button" className="flex items-center justify-center rounded-md text-xl font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 px-5 py-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                    </svg>
                                    <span className="mx-3">Download Resume</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar;