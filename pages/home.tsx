import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/login.module.css'

const home = () => {
    return (
        <>
            <Navbar />
            <div className={styles.grid}>
                <h2>SIGN IN</h2>
                <div>
                    <input type="email" id="loginName" placeholder="Email address" className={styles.input} />
                </div>
                <div>
                    <input type="password" id="loginPassword" placeholder="Password" className={styles.input} />
                </div>

                <button className={styles.button}>
                    SIGN IN
                </button>

                {/* <button className={styles.button}>
                    SIGN IN
                </button> */}

                <div>
                    <Link href="/test" className={styles.title}>Forgot Password?</Link>
                </div>

                <button className={styles.Rbutton}>
                    REGISTER
                </button>

                <h6 className={styles.info}>Hanc ego assentior cum a ohilosophis compluribus <br />permulta dicantur.</h6>
            </div>
        </>


    )
}

export default home