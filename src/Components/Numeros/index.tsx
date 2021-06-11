import React from 'react'
//style
import * as s from './number.style'
//package
import { Row, Col } from "react-bootstrap"
//icons
import { ImUser } from 'react-icons/im'
import {SiBrandfolder} from 'react-icons/si'
import {GoProject} from "react-icons/go"
import {BiRepost} from "react-icons/bi"

export const Numeros: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <s.Container className='container'>

                <h1><span>MIS</span> em Números</h1>

                <Row className="row">
                    <Col xs={6} className="coluna">
                        <ImUser className="icone" />
                        <h4>14000+</h4>
                        <h6>Creators</h6>
                    </Col>

                    <Col xs={6} className="coluna">
                        <SiBrandfolder className="icone"/>
                        <h4>40+</h4>
                        <h6>Marcas</h6>
                    </Col>

                    <Col xs={6} className="coluna">
                        <GoProject className="icone"/>
                        <h4>85+</h4>
                        <h6>Campanhas</h6>
                    </Col>

                    <Col xs={6} className="coluna">
                        <BiRepost className="icone icone-pub"/>
                        <h4>8000+</h4>
                        <h6>Publicações</h6>
                    </Col>
                </Row>
            </s.Container>

        </s.Wrapper>

    )
}
