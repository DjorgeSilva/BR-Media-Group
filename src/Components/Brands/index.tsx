import React from 'react'
//packages
import { Row, Col } from 'react-bootstrap'
//style
import * as s from './brand.style'
//images
import asusColor from "../../img/asus-color.png"
import asusBlack from "../../img/asus.png"

export const Brand: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <s.Container className="container">
                <h2>Marcas incrivéis que estão no MIS</h2>

                <Row className="row">
                    <Col xs={6} md={3} className="coluna">
                        <img src={asusBlack} alt="" onMouseOver={e => (e.currentTarget.src = asusColor)} onMouseOut={e => (e.currentTarget.src = asusBlack)} />
                    </Col>

                    <Col xs={6} md={3} className="coluna">
                        <img src={asusBlack} alt="" onMouseOver={e => (e.currentTarget.src = asusColor)} onMouseOut={e => (e.currentTarget.src = asusBlack)} />
                    </Col>

                    <Col xs={6} md={3} className="coluna">
                        <img src={asusBlack} alt="" onMouseOver={e => (e.currentTarget.src = asusColor)} onMouseOut={e => (e.currentTarget.src = asusBlack)} />
                    </Col>

                    <Col xs={6} md={3} className="coluna">
                        <img src={asusBlack} alt="" onMouseOver={e => (e.currentTarget.src = asusColor)} onMouseOut={e => (e.currentTarget.src = asusBlack)} />
                    </Col>

                    <Col xs={6} md={3} className="coluna">
                        <img src={asusBlack} alt="" onMouseOver={e => (e.currentTarget.src = asusColor)} onMouseOut={e => (e.currentTarget.src = asusBlack)} />
                    </Col>

                    <Col xs={6} md={3} className="coluna">
                        <img src={asusBlack} alt="" onMouseOver={e => (e.currentTarget.src = asusColor)} onMouseOut={e => (e.currentTarget.src = asusBlack)} />
                    </Col>

                    <Col xs={6} md={3} className="coluna">
                        <img src={asusBlack} alt="" onMouseOver={e => (e.currentTarget.src = asusColor)} onMouseOut={e => (e.currentTarget.src = asusBlack)} />
                    </Col>

                    <Col xs={6} md={3} className="coluna">
                        <img src={asusBlack} alt="" onMouseOver={e => (e.currentTarget.src = asusColor)} onMouseOut={e => (e.currentTarget.src = asusBlack)} />
                    </Col>
                </Row>
            </s.Container>
        </s.Wrapper>

    )
}
