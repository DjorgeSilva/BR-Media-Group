import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
    background: ${props=> props.theme.defaultColor};

    @media (min-width: 796px){
        height: 100vh;
    }

        .row{
            width: 100%;
            margin: 0 auto;
            height: 100%;

            .coluna{
                height: 100%;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                h1{
                    span{
                        background: ${props=> props.theme.primaryColor};
                        color: ${props=> props.theme.defaultColor};
                        padding: 5px 10px;
                    }
                }

                h4{
                    width: 95%;
                    margin-top: 30px;
                    
                    @media (min-width: 796px){
                        width: 80%;
                        text-align: center;
                    }

                    .icone{
                        color:  ${props=> props.theme.primaryColor};
                        margin-right: 10px;
                    }
                }
                
                .h4-color{
                    color: ${props=> props.theme.primaryColor};
                
                }

                .wrapper-btn{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 30px;

                    button{
                        cursor: pointer;
                        padding: 10px 20px;
                        background: ${props=> props.theme.primaryColor};
                        color: ${props=> props.theme.whiteColor};
                        border: none;
                        margin-right: 10px;

                        &:hover{
                            background-color: transparent;
                            border: 1px solid #fff;
                        }

                    }
                }

                img{
                    width: 100%;
                 

                    @media (min-width: 768px){
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }

            .coluna-txt{
                padding: 30px 10px;
            }
        }

`