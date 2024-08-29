import React, { useState } from 'react'

export default function Header() {
    const [darkMode, setDarkMode] = useState(true)

    const toggleTheme = () => {
        const body = document.querySelector("body")
        if(darkMode){
            body.classList.add("dark")
        } else{
            body.classList.remove("dark")
        }
        setDarkMode(!darkMode)
    }
    return ( 
        <>
            <header className='relative z-10 lg:flex lg:items-center lg:justify-between'>
                <div>
                    <h1 className='font-bold text-base sm:text-2xl text-slate-800 dark:text-white'>Social Media Dashboard</h1>
                    <p className='text-slate-600 text-xs sm:text-base font-bold dark:text-slate-400 border-b-2 sm:border-0 pb-4 sm:pb-0'>Total Followers: 23,004</p>
                </div>

                {/* Toggle */}

                <div className="toggle pt-4 sm:pt-0">
                    <label htmlFor='checkbox' className='font-bold text-slate-600 text-sm cursor-pointer dark:text-slate-400'>Dark Mode</label>
                    <input
                        type="checkbox"
                        className="checkbox"
                        id="checkbox"
                        checked={!darkMode}
                        onChange={toggleTheme}
                    />

                    <label htmlFor="checkbox" className="label">
                        <div className="ball"></div>
                    </label>
                </div>
            </header>
        </>

    )
}

