import Image from "next/image"
import background from '../../assets/imagens/background.svg'
import style from './MainComponent.module.css'
import logo from '../../assets/imagens/fervo_logo.svg'

export default function Main() {
    return(
        <div className={style.main}>
            <div className={style.presentation}>
                <h1 className={style.presentation_title}>Tecnologia para um mundo melhor</h1>
                <p className={style.presentation_text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, earum?</p>
                <button className={style.presentation_btn}>Vamos conversar?</button>
            </div>
            <div>
                <div className={style.description}>
                    <p className={style.description_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className={style.description_text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore molestiae sequi animi possimus blanditiis
                        officiis quibusdam sunt deleniti magnam aut omnis impedit, aliquam alias minus tenetur sed. Commodi, odit!Lorem 
                        ipsum dolor sit amet consectetur adipisicing elit. Labore dolore molestiae sequi animi possimus blanditiis officiis quibusdam sunt deleniti magnam aut omnis impedit, aliquam alias
                        minus tenetur sed. Commodi, odit!
                    </p>
                    <button className={style.description_btn}>Vamos conversar?</button>
                </div>
                <div className={style.description}>
                    <p className={style.description_title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className={style.description_text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore molestiae sequi animi possimus blanditiis
                        officiis quibusdam sunt deleniti magnam aut omnis impedit, aliquam alias minus tenetur sed. Commodi, odit!Lorem 
                        ipsum dolor sit amet consectetur adipisicing elit. Labore dolore molestiae sequi animi possimus blanditiis officiis quibusdam sunt deleniti magnam aut omnis impedit, aliquam alias
                        minus tenetur sed. Commodi, odit!
                    </p>
                    <button className={style.description_btn}>Vamos conversar?</button>
                </div>
            </div>


        </div>
    )
}