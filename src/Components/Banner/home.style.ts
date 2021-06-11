import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    height: 550px;
    background: ${props => props.theme.defaultColor};
    overflow: hidden;

    .wrapper-typing{
        width: 100%;
        position: absolute;
        top: 28%;
        left: 50%;
        transform: translate(-50%, -50%);

        .typewriter {
            width: 70%;
            height: fit-content;
            color:  ${props => props.theme.primaryColor};
            font-size: clamp(2rem, 4vw, 3.5rem);
            font-family: 'Satisfy', cursive;
            position: absolute;
            top: -40%;
            left: 50%;
            transform: translate(-50%, -20%);
        }

        .typewriter::after {
            font-family: Arial, Helvetica, sans-serif;
            content: '|';
            transition: ease-in-out 0.3s;
            margin-left: 10px;
            opacity: 1;
            animation: cursor 1s infinite;
        }

        @keyframes cursor { 
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }

    }

    .inner{
        height: 100%;
        background-color: #fff;
        transform: rotate(2deg);
        margin: 480px -15%;
    }
`