import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 70vh;
    position: absolute;
    padding: 80px 0;
`

export const Container = styled.div`
    width: 100%;
    height: 100%;

    h1{
        text-align: center;
        color: ${props => props.theme.primaryColor};

        span{
            padding: 0px 10px;
            background: ${props => props.theme.primaryColor};
            color: ${props => props.theme.defaultColor};
        }
    }

    h3{
        text-align: center;
        margin-top: 20px;

        @media (min-width: 796px){
            width: 80%;
            margin: 20px auto;
        }
    }

    .row{
        width: 95%;
        margin: 0 auto;
        margin: 50px auto;
        
        .coluna{
            padding: 0;
            margin-bottom: 20px;

            .body{
                height: fit-content;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                @media (min-width: 776px){
                    height: 250px;
                }

                @media (min-width: 1000px){
                    height: 180px;
                }

                .title{
                    text-align: center;
                    text-transform: uppercase;
                    color: ${props => props.theme.primaryColor};
                    font-weight: bold;
                }

                .txt{
                    text-align: center;
                    margin-top: 20px; 
                }

            }

            .img{
                width: 100%;
                height: 180px;
                object-fit: cover;
            }

        }
    }
`