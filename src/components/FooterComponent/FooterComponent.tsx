import Image from 'next/image'
import logo from '../../assets/imagens/fervo_logo.svg'
import facebook from '../../assets/imagens/facebook.svg'
import instagram from '../../assets/imagens/instagram.svg'
import style from './FooterComponent.module.css'

export default function Footer() {
    return(
        <div className={style.footer}>
            <Image className={style.logo_footer} src={logo} alt='Imagem da logo'/>
            <div>
                <ul className={style.social_media}>
                    <li><a href="#"><Image className={style.social_media_img} src={facebook} alt='Ícone facebook'/></a></li>
                    <li><a href="#"><Image  className={style.social_media_img} src={instagram} alt='Ícone instagram'/></a></li>
                </ul>
            </div>
            <div>
                <p className={style.Copyright}>Copyright &copy; Fervo</p>
            </div>
        </div>
    )
}