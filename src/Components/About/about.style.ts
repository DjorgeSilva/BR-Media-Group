import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    padding-bottom: 80px;
    background: #fff;
    position: absolute;
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
   }

   .wrapper-img{
       width: 100%;

       img{
           width: 100%;
       }
   }
`