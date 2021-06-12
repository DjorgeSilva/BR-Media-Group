import React from 'react'
//style
import * as s from "./entrar.style"
//packages
import { Row, Col } from 'react-bootstrap'

export const Entrar: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <s.Container className="container">
                <h1>Como entrar para a comunidade <span>MIS</span> ?</h1>
                <h3>Depois de 4 passos você já tem acesso ao conteúdo para creators e ainda participa de campanhas. Incrível, né</h3>

                <Row className="row">

                    <Col xs={12} md={3} className="coluna">
                        <div className="wrapper-title">
                            <h6>Cadastre-se</h6>
                        </div>

                        <div className="wrapper-body">
                            <h6>Coloque as suas informações básicas.</h6>
                        </div>
                    </Col>

                    <Col xs={12} md={3} className="coluna">
                        <div className="wrapper-title">
                            <h6>Verifique a conta</h6>
                        </div>

                        <div className="wrapper-body">
                            <h6>Você vai receber um e-mail para ativar seu acesso no MIS.</h6>
                        </div>
                    </Col>

                    <Col xs={12} md={3} className="coluna">
                        <div className="wrapper-title">
                            <h6>Adicione redes sociais</h6>
                        </div>

                        <div className="wrapper-body">
                            <h6>Cadastre suas redes sociais no primeiro acesso.</h6>
                        </div>
                    </Col>

                    <Col xs={12} md={3} className="coluna">
                        <div className="wrapper-title">
                            <h6>Entre para a comunidade</h6>
                        </div>

                        <div className="wrapper-body">
                            <h6>Acesso a conteúdos para evoluir como creator e convites para campanhas.</h6>
                        </div>
                    </Col>


                </Row>
            </s.Container>

        </s.Wrapper>
    )
}
