import React from 'react'
//style
import * as s from "./home.style"
//components
import { Banner } from '../../Components/Banner'
import { About } from '../../Components/About'

export const Home: React.FC = (): JSX.Element => {
    return (
        <s.Wrapper>
            <Banner />
            <About />
        </s.Wrapper>
    )
}
