import React from 'react'
//style
import * as s from "./home.style"
//components
import { Banner } from '../../Components/Banner'
import { About } from '../../Components/About'
import { Brand } from '../../Components/Brands'
import { Numeros } from "../../Components/Numeros"
import { Entrar } from '../../Components/Entrar'
import { Powered } from '../../Components/PoweredByMis'

export const Home: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <Banner />
            <About />
            <Brand />
            <Numeros />
            <Entrar />
            <Powered />
        </s.Wrapper>
    )
}
