import Image from "next/image"
import background from '../../assets/imagens/background.svg'
import style from './MainComponent.module.css'

export default function Main() {
    return(
        <div className={style.main}>
            <div className={style.title}>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, earum?</h1>
            </div>
            <div>
                <ul className={style.group}>
                    <li>
                        <p className={style.group_title}>Lorem</p>
                        <p className={style.group_text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore molestiae sequi animi
                            possimus blanditiis officiis quibusdam sunt deleniti magnam aut omnis impedit, aliquam alias 
                            minus tenetur sed. Commodi, odit!
                        </p>
                    </li>
                    <li className={style.group}>
                        <p className={style.group_title}>Lorem.</p>
                        <p className={style.group_text}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugit aspernatur vitae hic impedit
                            libero maxime rem eos in tempora? Voluptates minus fugit deserunt praesentium repudiandae. 
                            Ab temporibus repudiandae molestiae.
                        </p>
                    </li>
                    <li className={style.group}>
                        <p className={style.group_title}>Lorem</p>
                        <p className={style.group_text}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque blanditiis ex et similique 
                            pariatur porro incidunt eum aliquam? Ipsum voluptate eligendi inventore commodi, quaerat natus 
                            voluptatem ratione pariatur ullam nesciunt.
                        </p>
                    </li>
                </ul>
            </div>


        </div>
    )
}