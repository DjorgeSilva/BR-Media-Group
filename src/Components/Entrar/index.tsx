import React from 'react'
//style
import * as s from "./entrar.style"
//packages
import { Row, Col, Card, Button } from 'react-bootstrap'
//images
import cadastrar from "../../img/cadastrar.jpeg"
import verifique from "../../img/verifique.jpeg"
import redesocial from "../../img/cadastre-rede-social.jpeg"
import comunidade from "../../img/comunidade.jpeg"


export const Entrar: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <s.Container className="container">
                <h1>Como entrar para a comunidade <span>MIS</span> ?</h1>
                <h3>Depois de 4 passos você já tem acesso ao conteúdo para creators e ainda participa de campanhas. Incrível, né</h3>

                <Row className="row">

                    <Col xs={12} md={3} className="coluna">

                        <Card>
                            <Card.Body className="body">
                                <Card.Title className="title">Cadastre-se</Card.Title>
                                <Card.Text className="txt">
                                    Coloque as suas informações básicas.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={cadastrar} className="img" />
                        </Card>

                    </Col>

                    <Col xs={12} md={3} className="coluna">

                        <Card>
                            <Card.Body className="body">
                                <Card.Title className="title">Verifique a conta</Card.Title>
                                <Card.Text className="txt">
                                    Você vai receber um e-mail para ativar seu acesso no MIS.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={verifique} className="img" />
                        </Card>

                    </Col>

                    <Col xs={12} md={3} className="coluna">

                        <Card>
                            <Card.Body className="body">
                                <Card.Title className="title">Adicione redes sociais</Card.Title>
                                <Card.Text className="txt">
                                    Cadastre suas redes sociais no primeiro acesso.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={redesocial} className="img" />
                        </Card>

                    </Col>

                    <Col xs={12} md={3} className="coluna">

                        <Card>
                            <Card.Body className="body">
                                <Card.Title className="title">Entre para a comunidade</Card.Title>
                                <Card.Text className="txt">
                                    Acesso a conteúdos para evoluir como creator e convites para campanhas.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={comunidade} className="img" />
                        </Card>

                    </Col>
                </Row>
            </s.Container>

        </s.Wrapper>
    )
}
