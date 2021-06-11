import React from 'react'
//style
import * as s from "./header.style"
//image
import logo from "../../img/logo.png"
//icons
import { BiMenu } from "react-icons/bi"

export const Header: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>

            <s.Container className="container">

                <s.Logo>
                    <img src={logo} alt="" />
                </s.Logo >

                <s.MenuMobile>
                    <BiMenu className="icone-menu" />
                </s.MenuMobile >

            </s.Container>
        </s.Wrapper>
    )
}
