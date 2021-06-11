import React from 'react'
//style
import * as s from "./header.style"
//image
import logo from "../../img/logo.png"
//icons
import { BiMenu } from "react-icons/bi"
//packages
import { Link } from 'react-router-dom'

export const Header: React.FC = (): JSX.Element => {

    const styleLink = {
        textDecoration: "none",
    }


    return (
        <s.Wrapper>

            <s.Container className="container">

                <s.Logo>
                    <img src={logo} alt="" />
                </s.Logo >

                <s.MenuMobile>
                    <BiMenu className="icone-menu" />
                </s.MenuMobile >

                <s.MenuDeskTop>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className="link btn-link">Creator's Lab</Link>
                                <Link to="/" className="link btn-link">Cadastrar</Link>
                                <Link to="/" className="link btn-link">Entrar</Link>
                            </li>

                        </ul>
                    </nav>
                </s.MenuDeskTop >

            </s.Container>
        </s.Wrapper>
    )
}
