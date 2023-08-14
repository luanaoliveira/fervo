import Image from "next/image"
import background from '../../assets/imagens/background.svg'
import style from './MainComponent.module.css'

export default function Main() {
    return(
        <div>
            <h1 className={style.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, earum?</h1>
            <Image className={style.background} src={background} alt="Image do fundo"/>
            <div>
                <ul>
                    <li className={style.element}></li>
                    <li className={style.element}></li>
                    <li className={style.element}></li>
                </ul>
            </div>


        </div>
    )
}