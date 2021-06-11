import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 630px;
    position: absolute;
    background: ${props=> props.theme.defaultColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    margin: 0 auto;
    background: ${props=> props.theme.defaultColor};

    h1{
        text-align: center;
        margin-bottom: 30px;

        span{
            padding: 2px 4px;
            background: ${props=> props.theme.primaryColor};
            color: ${props=> props.theme.defaultColor};
        }
    }

    .row{
        width: 100%;
        margin: 0 auto;

        @media (min-width: 790px){
            width: 70%;
            margin: 0 auto;
        }

        .coluna{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 1px solid #333;
            padding: 20px 0;
            background: ${props=> props.theme.primaryColor};
            color: ${props=> props.theme.whiteColor};
            border: 1px solid ${props=> props.theme.defaultColor};
            text-align: center;

            
            .icone{
                color: ${props=> props.theme.defaultColor};
                font-size: clamp(2rem, 2.5vw, 4rem);
            }

            .icone-pub{
                font-size: clamp(2rem, 4vw, 5rem);
            }

            h4{
                font-size: clamp(2rem, 2.5vw, 2.5rem);
                color: ${props=> props.theme.whiteColor};
                margin: 20px auto;
            }

            h6{
                font-size: clamp(1.5rem, 2vw, 1.8rem);
                color: ${props=> props.theme.whiteColor};
            }
        }
    }
`

