import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import picture from '../image/logo.png'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <div className='text-lg border border-gray-700'>
            <header className={styles.body}>
                <div className={styles.navbar}>
                    <Image
                        className={styles.logo}
                        src={picture}
                        alt="Picture of the author"
                    />
                    <div className={styles.position}>
                        <div>
                            <h1 className='text-2xl text-red-600 mb-8 mt-4 ml-6'>MARKETPLACE_</h1>
                        </div>
                        <nav>
                            <ul className={styles.navbar}>
                                <li>
                                    <Link href='#' className='text-lg border border-gray-700 p-6 '>NAKA MARKET</Link>
                                </li>
                                <li>
                                    <Link href='#' className='text-lg border border-gray-700  p-6'>P2P MARKET</Link>
                                </li>
                                <li>
                                    <Link href='#' className='text-lg border border-gray-700 p-6'>NAKAVERSE MAP</Link>
                                </li>
                            </ul>

                        </nav>
                    </div>

                    <div className={styles.right}>
                        <button className={styles.button}><Link href='/'>👈BACK</Link></button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Navbar