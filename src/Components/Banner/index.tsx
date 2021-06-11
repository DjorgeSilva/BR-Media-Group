import React from 'react'
//style
import * as s from "./home.style"

export const Banner: React.FC = (): JSX.Element => {


    React.useEffect(() => {
        //efeito typing

        function typewriter(element: any): void {

            let letters = element.innerHTML.split('');
            element.innerHTML = '';

            letters.forEach((letter: string, index: number) => {
                setTimeout(() => element.innerHTML += letter, 100 * index);
            });
        }
        const text = document.querySelector('.typewriter');
        typewriter(text);

    }, []);



    return (

        <s.Wrapper>
            <div className="wrapper-typing">
                <h1 className="typewriter">Você pode ser um pequeno influenciador, mas vai ser gigante na hora de criar conteúdo.</h1>
            </div>

            <div className="inner"></div>
        </s.Wrapper>
    )
}
