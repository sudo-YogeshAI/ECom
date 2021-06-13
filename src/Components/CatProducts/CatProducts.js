import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Skeleton from '../Products/Skeleton'
import Card from '../Products/Product'
import Pagination from '../Pagination/Pagination'

import "../../Assets/YUI3.css"

export default function CatProducts( {props} ){
    const t1 =[];
    const max = 10;

    for (let i=0; i<max; i++){
        t1.push(i);
    }

    const [currentPage, setCurrentPage] = useState(1);
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
        padding-left: ${(window.innerWidth>600) ? "100px" : "20px"};
        padding-top: ${(window.innerWidth>600) ? "50px" : "20px"};
        padding-bottom: ${(window.innerWidth>600) ? "50px" : "20px"};
        font-size: ${(window.innerWidth>600) ? "2em" : "1.5em"};
        font-weight: bold;
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


    const PaginationOnClick = (id) => {
        setCurrentPage(id);
        console.log(id);
        console.log(currentPage)
    };
    
    

    return(
        <>
        <Heading>
            {props.name.substring(0,1).toUpperCase()+props.name.substring(1)}
        </Heading>
        <SubHeading>
            Showing {Math.min(10,products.length-(currentPage-1)*max)} Out of {products.length} Results
        </SubHeading>
        <FlexBox>
        { (!loaded) ? <>
        {console.log(products)}
        {t1.map((id,index) => (
            <Skeleton key={id}/>
        ))} 
        </>: <>{products.slice((currentPage-1)*max,Math.min(currentPage*max,products.length)).map((id,index) => (
            <Card key={index} props={{"name":id.title,"cost":`$ ${id.price}`,"img":id.image}} />
        ))} </> }
        </FlexBox>
        { (products.length/max)>1 ? <Pagination props={{"active":currentPage,"max":products.length/max,"onClick": PaginationOnClick}}/>
        : <></>}
        </>
    );
}