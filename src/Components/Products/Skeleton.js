import {React} from 'react'
import styled from 'styled-components'

import '../Categories/Skeleton.css'

export default function Skeleton(){
    const Card = styled.div`
        margin-left: ${(window.innerWidth>600) ? '20px' : '2.5%'};
        margin-bottom: ${(window.innerWidth>600) ? '60px' : '20px'};
        width: ${(window.innerWidth>600) ? '230px' : '80%'};
        height: ${(window.innerWidth>600) ? '300px' : (window.innerWidth*1)+'px'};
        background: #0f0f0f;
        padding: ${(window.innerWidth>600) ? '20px' : '5%'};;
    `;
    const Image = styled.div`
        width: ${(window.innerWidth>600) ? '230px' : '100%'};
        height: ${(window.innerWidth>600) ? '180px' : (window.innerWidth*0.65)+'px'};
        background: #342e2e;
    `;
    const Text = styled.div`
        width: ${(window.innerWidth>600) ? '230px' : '100%'};
        height: 1.5em;
        margin-top: 1em;
        background: #342e2e;
    `;
    const TextSlider = styled.div`
        width: 1em;
        height: 100%;
        animation: bar2 2s infinite ease-in-out;
        background: linear-gradient(to right, rgba(0,0,0,0),rgba(0,0,0,0.25),rgba(0,0,0,0.5),rgba(0,0,0,0.25),rgba(0,0,0,0));
    `;
    const Price = styled.div`
        margin-top:1em;
        margin-left:auto;
        width: 4em;
        height: 1.5em;
        background: #342e2e;
    `;
    const ButtonList = styled.div`
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;

        -webkit-flex-flow: row wrap;
        flex-wrap: wrap;
        justify-content: space-evenly;
    `;
    const Button = styled.div`
        width: ${(window.innerWidth>600) ? '60px' : '30%'};
        height: 1.5em;
        margin-top: 1em;
        background: #342e2e;
    `;


    return(
        <>
        <Card>
            <Image></Image>
            <Text>
                <TextSlider></TextSlider>
            </Text>
            <Price><TextSlider></TextSlider></Price>
            <ButtonList>
                <Button><TextSlider></TextSlider></Button>
                <Button><TextSlider></TextSlider></Button>
            </ButtonList>
        </Card>
        </>
    );
}