import React from 'react'
//style
import * as s from "./home.style"
//components
import { Banner } from '../../Components/Banner'
import { About } from '../../Components/About'
import { Brand } from '../../Components/Brands'

export const Home: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <Banner />
            <About />
            <Brand/>
        </s.Wrapper>
    )
}
