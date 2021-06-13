import {React} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


export default function Card({props}) {
    const CardContaineer = styled.div`
    margin-left: ${(window.innerWidth>600) ? '20px' : '2.5%'};
    margin-bottom: ${(window.innerWidth>600) ? '60px' : '20px'};
    position: relative;
    width: ${(window.innerWidth>600) ? '400px' : '80%'};
    height: ${(window.innerWidth>600) ? '225px' : (window.innerWidth*0.45)+'px'};
    border-radius: 20px;
    cursor: pointer;
    border: black 2px solid;
    `;
    const Name = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: fit-content;
    padding: 10px 20px;
    z-index:2;
    background: rgba(0,0,0,0.5);
    background-size: contain;
    border-radius: 5px;
    text-align:center;
    overflow: hidden;
    color: red;
    font-weight: bold;
    `;

    return(
        <>
        <Link to={`/category/${props.name}`}>
            <CardContaineer>
                <img src={props.img} width="100%" height="100%" />
                <Name>{props.name.substring(0,1).toUpperCase()+props.name.substring(1)}</Name>
            </CardContaineer>
        </Link>
        </>
    );
}