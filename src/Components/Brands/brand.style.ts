import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    background:${props => props.theme.primaryColor};
    position: relative;
    padding: 50px 0;

    /* @media (min-width: 1100px){
        height: 400px;
    } */
`

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background:${props => props.theme.primaryColor};

    h2{
        color:${props => props.theme.whiteColor}; 
        text-align: center;
        margin-bottom: 50px;
    }

    .row{
        width: 70%;
        height: 100%;
        margin: 0 auto;
        background: #fff;
        border-radius: 20px;
        margin-bottom: 50px;

        .coluna{

            display: flex;
            justify-content: center;
            align-items: center;

            img{
                width: 70%;
                cursor: pointer;
            }
        }
    }
    
`