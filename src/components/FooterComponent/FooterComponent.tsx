import Image from 'next/image'
import logo_footer from '../../assets/imagens/fervo_logo.svg'
import style from './FooterComponent.module.css'

export default function Footer() {
    return(
        <div>
            <Image src={logo_footer} alt='Imagem da logo'/>
            <div>
                <ul>
                    <li className={style.facebook}>Facebook</li>
                    <li className={style.instagram}>Instagram</li>
                </ul>
            </div>
            <div>
                <p className={style.Copyright}>Copyright &copy; Fervo</p>
            </div>
        </div>
    )
}