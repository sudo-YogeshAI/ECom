import {React} from 'react'
import styled from 'styled-components'
import'./Skeleton.css'

export default function Skeleton(){
    const Card = styled.div`
    margin-left: ${(window.innerWidth>600) ? '20px' : '2.5%'};
    margin-bottom: ${(window.innerWidth>600) ? '60px' : '20px'};
    position: relative;
    width: ${(window.innerWidth>600) ? '400px' : '80%'};
    height: ${(window.innerWidth>600) ? '225px' : (window.innerWidth*0.45)+'px'};
    background: #0f0f0f;
    border-radius: 20px;
    `;
    const Name = styled.div`
    position: absolute;
    left: 5%;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    width: 90%;
    height: 10%;
    z-index:2;
    background: #342e2e;
    border-radius: 5px;
    `;
    const Bar = styled.div`
    position: absolute;
    width: 20%;
    height: 10%;
    left: 0;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    background: linear-gradient(to right, #342e2e,#010302,#342e2e);
    z-index:3;
    border-radius: 5px;
    animation: bar 2s infinite ease-in-out;
    `;

    return(
        <Card>
            <Name></Name>
            <Bar></Bar>
        </Card>
    );
}