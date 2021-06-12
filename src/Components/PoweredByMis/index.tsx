import React from 'react'
//style
import * as s from './powered.style'
//packages
import { Row, Col } from 'react-bootstrap'
//image
import modelo from "../../img/modelo.jpeg"
//icons
import {GiCheckMark} from "react-icons/gi"


export const Powered: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <Row className="row">
                <Col xs={12} md={6} className="coluna coluna-txt">
                    <h1><span>#PoweredByMIS</span></h1>
                    <h4>Criada pela BR Media Group empresa líder em Marketing de influência, o MIS é uma comunidade que conecta influenciadores e grandes marcas.</h4>

                    <div className="wrapper-btn">
                        <button>Nossa missão</button>
                        <button>Nossa Visão</button>
                    </div>

                    <h4>Conectar marcas e creators por interesse, perfil e afinidade, expandindo assim as possibilidades de ações e campanhas de markeing digital</h4>
                    <h4 className="h4-color"><GiCheckMark className="icone"/>Desenvolver uma comunidade de Creators</h4>
                    <h4 className="h4-color"><GiCheckMark className="icone"/>Entregar os melhores resultados para as marcas</h4>
                </Col>

                <Col xs={12} md={6} className="coluna">
                    <img src={modelo} alt="" />
                </Col>


            </Row>
        </s.Wrapper>
    )
}
