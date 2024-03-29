import {React, useState } from 'react'
import styled from 'styled-components'
import FullProduct from './FullProduct';
import {cart} from './Cart';


export default function ProductCard( {props} ) {
    const [showFull, setShowFull] = useState(false);

    const Card = styled.div`
        margin-left: ${(window.innerWidth>600) ? '20px' : '2.5%'};
        margin-bottom: ${(window.innerWidth>600) ? '60px' : '20px'};
        width: ${(window.innerWidth>600) ? '230px' : '80%'};
        height: ${(window.innerWidth>600) ? '300px' : (window.innerWidth*1)+'px'};
        padding: ${(window.innerWidth>600) ? '10px' : '5%'};;
        border: black 2px solid;
        cursor: pointer;
    `;
    const Image = styled.div`
        width: ${(window.innerWidth>600) ? '230px' : '100%'};
        height: ${(window.innerWidth>600) ? '180px' : (window.innerWidth*0.65)+'px'};
    `;
    const Text = styled.div`
        width: ${(window.innerWidth>600) ? '230px' : '100%'};
        height: 1.5em;
        margin-top: 1em;
        text-align:center;
        overflow: hidden;
        color: red;
        font-weight: bold;
    `;
    const Price = styled.div`
        margin-top:0.5em;
        margin-left:auto;
        padding-left: 1em;
        padding-right: 1em;
        height: 1.5em;
        text-align: right;
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
        padding-left: 0.75em;
        padding-right: 0.75em;
        width: fit-content;
        height: 1.5em;
        margin-top: 1em;
        border: black 2px solid;
    `;

    const onClick = () => (setShowFull(true))
    const onClose = () => (
        setShowFull(false)
    )


    

    const addToCart = (el) => {
        let flag = 0;

        cart.map(function(item){
            
            if (item.id === el.id){
                flag= 1;
                item.quantity+=1;


            }
            
        })

        if (flag === 0){
            const dict = el;
            dict.quantity = 1;
            cart.push(dict);
        }
        
        console.log(cart);
    };


    return(
        <>
        {showFull ? <FullProduct props={{"onClose":onClose,"product":props} } />: <></>}
        
        <Card>
            <Image><img src={props.img} width="100%" height="100%"/></Image>
            <Text>{props.name}</Text>
            <Price><p>{props.cost}</p></Price>
            <ButtonList>
                <Button onClick = {() => {addToCart(props)}}>Add to cart</Button>
                <Button onClick={onClick}>Learn More</Button>
            </ButtonList>
        </Card>
       
       
        </>
    );
}