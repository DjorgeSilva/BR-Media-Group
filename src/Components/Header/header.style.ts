import styled from "styled-components"

export const Wrapper = styled.header`
    width: 100%;
    height: 90px;
    position: relative;
    top: 0;
    background: ${props=> props.theme.defaultColor};
`

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    img{
        width: 100px;
        height: 100%;
    }
`

export const MenuMobile = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    .icone-menu{
        cursor: pointer;
        padding: 5px;
        font-size: 2.8rem;
        background:  ${props=> props.theme.primaryColor};
        color: ${props=> props.theme.defaultColor};
        border-radius: 5px;

        &:hover{
            color: ${props=> props.theme.whiteColor};
        }
    }

`