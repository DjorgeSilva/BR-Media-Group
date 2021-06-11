import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 80px;
    background: #fff;
    position: relative;

    @media (min-width: 796px){
        height: 500px;
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100%;

    @media (min-width: 796px){
        display: flex;
        justify-content: center;
        align-items: center;
    }

   .wrapper-txt{
        width: 100%;
        margin-right: 30px;

        h2{
            color: ${props=> props.theme.primaryColor};
            font-family: ${props=> props.theme.primaryFont};
        }

        button{
            padding: 10px 35px;
            border-radius: 10px;
            border: none;
            background:  ${props=> props.theme.primaryColor};
            color:  ${props=> props.theme.whiteColor};
            margin: 30px auto;

            &:hover{
                background:  ${props=> props.theme.defaultColor};
                color:  ${props=> props.theme.whiteColor}; 
            }
        }
   }

   .wrapper-img{
       width: 100%;

       img{
           width: 100%;
       }
   }
`