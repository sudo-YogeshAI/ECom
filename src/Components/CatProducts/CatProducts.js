import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Skeleton from '../Products/Skeleton'
import Card from '../Products/Product'

import "../../Assets/YUI3.css"

export default function CatProducts( {props} ){
    const t1 =[];
    const max = 10;

    for (let i=0; i<max; i++){
        t1.push(i);
    }

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getProducts = async() => {
        await fetch(`https://fakestoreapi.com/products/category/${props.name}`)
        .then(res=>res.json())
        .then(json=>setProducts(json))
        setLoaded(true);
    }

    useEffect(() => {
        getProducts();
        return () => {};
    }, []);

    const Heading = styled.div`
        padding: 20px;
        padding-top: ${(window.innerWidth>600) ? "50px" : "20px"};
        padding-bottom: ${(window.innerWidth>600) ? "50px" : "20px"};
        font-size: ${(window.innerWidth>600) ? "10em" : "4em"};
        font-weight: bold;
        text-align: center;
        background: url('https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-pure-color-watercolor-graffiti-gradient-background-board-design-board-design-image_66713.jpg');
    `; 

    const SubHeading = styled.div`
        
    `;

    const FlexBox = styled.div`
        margin-top: ${(window.innerWidth>600) ? "50px" : "20px"};
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

    

    return(
        <>
        <Heading>
            {props.name.substring(0,1).toUpperCase()+props.name.substring(1)}
        </Heading>
        <FlexBox>
        { (!loaded) ? <>
        {console.log(products)}
        {t1.map((id,index) => (
            <Skeleton key={id}/>
        ))} 
        </>: <>{products.map((id,index) => (
            <Card key={index} props={{"name":id.title,"cost":`$ ${id.price}`,"img":id.image}} />
        ))} </> }
        </FlexBox>
        </>
    );
}