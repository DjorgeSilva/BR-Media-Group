import React from 'react'
//style
import * as s from "./header.style"
//image
import logo from "../../img/logo.png"
//icons
import { BiMenu } from "react-icons/bi"
import { IoCloseSharp } from 'react-icons/io5'
//packages
import { Link } from 'react-router-dom'

interface Props {
    isOpen: boolean;
    setIsOpen: (active: boolean) => void
}

export const Header: React.FC<Props> = ({ isOpen, setIsOpen }: Props): JSX.Element => {

    const styleLink = {
        textDecoration: "none",
    }


    return (
        <s.Wrapper>

            <s.Container className="container">

                <s.Logo>
                    <img src={logo} alt="" />
                </s.Logo >

                <s.MenuMobile onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <IoCloseSharp className="icone-menu" /> :
                        <BiMenu className="icone-menu" />
                    }

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

            <s.SideBar isOpen={isOpen}>
                <nav>
                    <ul>
                        <li><Link to="/" className="link">Creator's Lab</Link></li>
                        <li><Link to="/" className="link">Cadastrar</Link></li>
                        <li><Link to="/" className="link">Entrar</Link></li>
                    </ul>
                </nav>
            </s.SideBar>
        </s.Wrapper>
    )
}
