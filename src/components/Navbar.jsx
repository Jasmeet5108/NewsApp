import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const hideMenu = () => {
        setDropdownOpen(isDropdownOpen === false)
    }

    return (
        <header className='bg-violet-300'>
            <nav className='flex justify-between items-center max-w-screen-2xl mx-auto h-16'>
                <h2 className='text-2xl sm:text-[27px] pl-3'>NewsApi</h2>
                <div className='flex gap-2 pr-3'>
                    <div className="relative lg:hidden inline-block text-left">
                        <button
                            onClick={toggleDropdown}
                            type="button"
                            className="inline-flex justify-center items-center box-border p-2 border border-gray-300 shadow-sm text-lg font-medium rounded-md text-gray-700 bg-violet-100 hover:bg-violet-200"
                        >
                            Categories
                            <svg
                                className={`-mr-1 ml-2 h-5 w-5 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {isDropdownOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-purple-200 ring-1 ring-black ring-opacity-5">
                                <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <Link to="/" onClick={hideMenu} className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100" role="menuitem">
                                        General
                                    </Link>
                                    <Link to="/" onClick={hideMenu} className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Business
                                    </Link>
                                    <Link to="/science" onClick={hideMenu} className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Science
                                    </Link>
                                    <Link to="/technology" onClick={hideMenu} className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Technology
                                    </Link>
                                    <Link to="/entertainment" onClick={hideMenu} className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Entertainment
                                    </Link>
                                    <Link to="/sports" onClick={hideMenu} className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Sports
                                    </Link>
                                    <Link to="/health" onClick={hideMenu} className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100" role="menuitem">
                                        Health
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                </div>


                <ul className='hidden lg:flex lg:gap-4 lg:text-xl'>
                    <li className='p-2'>
                        <Link to="/">General</Link>
                    </li>
                    <li className='p-2'>
                        <Link to="/business">Business</Link>
                    </li>
                    <li className='p-2'>
                        <Link to="/science">Science</Link>
                    </li>
                    <li className='p-2'>
                        <Link to="/technology">Technology</Link>
                    </li>
                    <li className='p-2'>
                        <Link to="/entertainment">Entertainment</Link>
                    </li>
                    <li className='p-2'>
                        <Link to="/sports">Sports</Link>
                    </li>
                    <li className='p-2'>
                        <Link to="/health">Health</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar