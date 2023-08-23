import Image from 'next/image'
import logo from '../../assets/imagens/fervo_logo_branco.svg'
import linkedin from '../../assets/imagens/linkedin.svg'
import style from './FooterComponent.module.css'

export default function Footer() {
    return(
        <div className={style.footer}>
            <Image className={style.logo_footer} src={logo} alt='Imagem da logo'/>
            <div>
                <ul>
                    <a href="#"><Image className={style.linkedin} src={linkedin} alt='Ícone linkedin'/></a>
                </ul>
            </div>
            <p className={style.copyright}>Copyright &copy; Fervo</p>
        </div>
    )
}