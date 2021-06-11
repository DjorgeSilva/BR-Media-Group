import React from 'react'
//style
import * as s from './about.style'
//image
import about from '../../img/img-about.jpg'

export const About: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <s.Container className="container">

                <div className="wrapper-txt">
                    <h2>O MIS vai além de uma plataforma que conecta marcas e creators. Somos uma comunidade de influenciadores que compartilha experiências. Aqui estamos sempre aprendendo, ensinando e evoluindo.</h2>
                </div>

                <div className="wrapper-img">
                    <img src={about} alt="imagem about" />
                </div>
            </s.Container>
        </s.Wrapper>
    )
}
