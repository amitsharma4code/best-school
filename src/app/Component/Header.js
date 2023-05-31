import React from 'react'
import style from '../style/header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
        <nav className={style.nav}>
            <div className="container">
                <div className={style.navlist}>
                    <ul>
                        <li><Link href={"/#"}>BEST SCHOOL IN INIDA </Link></li>
                        <li><Link href={"/#"}>HOME </Link></li>
                        <li><Link href={"/login"}>Login</Link></li>

                       
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header