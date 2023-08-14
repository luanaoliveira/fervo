import Image from 'next/image'
import logo from '../../assets/imagens/fervo_logo.svg'
import menu from '../../assets/imagens/menu.svg'
import style from  './HeaderComponent.module.css'

export default function Header() {
    return(
        <div>
            <Image className={style.logo} src={logo} alt='Imagem da logo'/>
            <Image className={style.menu} src={menu} alt='Imagem menu'/>
        </div>
    )
}