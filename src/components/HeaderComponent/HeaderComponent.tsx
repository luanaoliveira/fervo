import Image from 'next/image'
import logo from '../../assets/imagens/fervo_logo_branco.svg'
import menu from '../../assets/imagens/menu.svg'
import close from '../../assets/imagens/close.svg'
import style from  './HeaderComponent.module.css'
import { useState } from 'react'

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)

    return(
        <header>
            <div className={style.header}>
                <Image className={style.logo} src={logo} alt='Imagem da logo'/>
                <div>
                    </div><Image onClick={() => setOpenMenu(true)} className={style.menu} src={menu} alt='Imagem menu'/>
            </div>
            {openMenu ? (
                <div className={style.dropdown}>
                    <div className={style.dropdown_menu}>
                        <Image className={style.logo} src={logo} alt='Imagem da logo'/>
                        <Image onClick={() => setOpenMenu(false)} className={style.close} src={close} alt='Imagem close'/>
                    </div>
                    <ul>
                        <li className={style.link}>Nosso trabalho</li>
                        <li className={style.link}>Contato</li>
                    </ul>  
                </div>) : <></>}
        </header>   
    )
}