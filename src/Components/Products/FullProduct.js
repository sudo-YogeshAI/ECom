import {React} from 'react'
import styled from 'styled-components'
import {cart} from './Cart';

export default function({props}){
    console.log(props)
    const Backside = styled.div`
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: rgba(0,0,0,0.5);
    `;
    const Containeer = styled.div`
        background: rgb(255,255,255);
        padding: ${(window.innerWidth>600) ? "50px" : "20px 10px"};
        border: black 1px solid;
        boder-radius: 10px;
        width: ${(window.innerWidth>600) ? "75%" : "90%"};
        max-height: ${(window.innerWidth>600) ? "75%" : "90%"};
        margin: ${(window.innerWidth>600) ? "2%" : "10px"} auto ${(window.innerWidth>600) ? "2%" : "10px"} auto;
    `;
    const CloseButton = styled.div`
        width:fit-content;
        margin-left:auto;
        cursor: pointer;
    `;
    const FlexBox = styled.div`
        margin-left:0;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;

        -webkit-flex-flow: row wrap;
        flex-wrap: wrap;
        justify-content: space-evenly;
    `;
    const Image = styled.div`
        width: ${(window.innerWidth>600) ? "45%" : "90%"};
        height: ${(window.innerWidth>600) ? "80%" : "25%"};
        margin-top: ${(window.innerWidth>600) ? "0px" : "10px"};
    `;
    const DetailBox = styled.div`
        width: ${(window.innerWidth>600) ? "45%" : "90%"};
        height: ${(window.innerWidth>600) ? "80%" : "70%"};
    `;
    const Name = styled.div`
        text-align:center;
        font-size: ${(window.innerWidth>600) ? "1.5em" : "1.5em"};
        width: 100%;
        margin-bottom: ${(window.innerWidth>600) ? "20px" : "10px"};
        font-weight: bold;
    `;
    const LeftAlignText = styled.div`
        font-size: ${(window.innerWidth>600) ? "1.25em" : "1.5em"};
        width: 100%;
        margin-bottom: ${(window.innerWidth>600) ? "20px" : "10px"};
    `;
    const QtyBox = styled.div`
        width: fit-content;
        margin-left:auto;
    `;
    const Button = styled.div`
        padding-left: 0.75em;
        padding-right: 0.75em;
        width: fit-content;
        height: 1.5em;
        margin-top: 1em;
        border: black 2px solid;
    `;

    const onClickNone = () => (console.log());
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
    <Backside onClick={()=>props.onClose()}>
        <Containeer onClick={()=>onClickNone()}>
            <CloseButton>
                <img src={process.env.PUBLIC_URL + '/close.png'} onClick={()=>props.onClose()} />
            </CloseButton>
            <FlexBox>
                <Image>
                    <div style={{margin:"auto"}}>
                    <img src={props.product.img} width= {(window.innerWidth>600) ? "80%" : "25%"} height={(window.innerWidth>600) ? "80%" : "25%"} />
                    </div>
                </Image>
                <DetailBox>
                    <Name>{props.product.name}</Name>
                    <LeftAlignText style={{fontWeight:"bold"}}>Product ID: {props.product.id} </LeftAlignText>
                    <LeftAlignText>{props.product.desc}</LeftAlignText>
                    <QtyBox>
                        <FlexBox>
                        <LeftAlignText style={{fontWeight:"bold"}}>Qty: </LeftAlignText>
                        <LeftAlignText>1</LeftAlignText>
                        </FlexBox>
                    </QtyBox>
                    <FlexBox>
                        <Button onClick = {() => {addToCart(props)}}>Add to cart</Button>
                    </FlexBox>
                </DetailBox>
            </FlexBox>
        </Containeer>
    </Backside>
    </>);
}