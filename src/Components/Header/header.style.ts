import styled from "styled-components"

interface Props {
    isOpen: boolean;
}

export const Wrapper = styled.header`
    width: 100%;
    height: 90px;
    background: ${props => props.theme.defaultColor};
    position: fixed;
    top: 0;
    z-index: 10000;
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

    @media (min-width: 796px){
       width: 40%;
    }

    @media (min-width: 1200px){
        width: 60%;
    }

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

    @media (min-width: 796px){
        display: none;
    }

    .icone-menu{
        cursor: pointer;
        padding: 5px;
        font-size: 2.8rem;
        background:  ${props => props.theme.primaryColor};
        color: ${props => props.theme.defaultColor};
        border-radius: 5px;

        &:hover{
            color: ${props => props.theme.whiteColor};
        }
    }

`

export const MenuDeskTop = styled.div`
    display: block;
    width: 60%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 796px){
        display: none;
    }

    @media (min-width: 1200px){
        width: 40%;
    }

    nav{
        width: 100%;
        ul{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            li{
                width: 100%;
                text-align: center;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 35px;

                .btn-link{
                    text-decoration: none;
                    background: ${props => props.theme.primaryColor};
                    padding: 5px 20px;
                    border-radius: 10px;
                    color: ${props => props.theme.whiteColor};

                    :first-child{
                        margin-right: 10px;
                    }

                    &:hover{
                        color: ${props => props.theme.defaultColor};
                    }
                }
            }
        }
    }

`

export const SideBar = styled.div.attrs((props: Props) => {
    return {
        isOpen: props.isOpen,
        style: {
            top: props.isOpen ? '90px' : '-2000px'
        },
    };
})`
    width: 100%;
    height: 300px;
    background: ${props => props.theme.primaryColor};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (min-width: 796px){
        display: none;
    }


    nav{
        width: 100%;

        ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0;

            li{
                margin-top: 20px;

                .link{
                    width: 100%;
                    font-size: clamp(2rem, 2.5vw, 3rem);
                    color: ${props=> props.theme.defaultColor};
                    text-decoration: none;

                    background:  ${props=> props.theme.defaultColor};
                    color:  ${props=> props.theme.primaryColor};
                    padding: 2px 20px;
                    border-radius: 20px;

                    &:hover{
                        background:  ${props=> props.theme.whiteColor};
                        color:  ${props=> props.theme.primaryColor};
                    }
                }
            }
        }
    }
`