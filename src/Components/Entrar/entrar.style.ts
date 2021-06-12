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
        margin-top: 50px;
        
        .coluna{
            background: #CDCDCD;
            padding: 0;
            margin-bottom: 20px;

            .wrapper-title{
                padding: 12px 5px;
                background: ${props => props.theme.primaryColor};
                display: flex;
                justify-content: center;
                align-items: center;
                color:  ${props => props.theme.whiteColor};
            }
        }
    }
`