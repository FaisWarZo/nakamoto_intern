import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import picture from '../.next/image/logo.png'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.static}>
            <header className={styles.body}>
                <div className={styles.navbar}>
                    <Image
                        className={styles.logo}
                        src={picture}
                        alt="Picture of the author"
                    />
                    <div className={styles.position}>
                        <div>
                            <h1 className={styles.header}>MARKETPLACE_</h1>
                        </div>
                        <nav>
                            <ul className={styles.navbar}>
                                <li>
                                    <Link href='#' className={styles.title}>NAKA MARKET</Link>
                                </li>
                                <li>
                                    <Link href='#' className={styles.title}>P2P MARKET</Link>
                                </li>
                                <li>
                                    <Link href='#' className={styles.title}>NAKAVERSE MAP</Link>
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