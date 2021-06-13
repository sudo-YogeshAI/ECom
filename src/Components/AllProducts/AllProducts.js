import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Skeleton from '../Products/Skeleton'
import Card from '../Products/Product'
import Pagination from '../Pagination/Pagination'

import "../../Assets/YUI3.css"

export default function AllProducts( {props} ){
    const t1 =[];
    const max = 30;

    for (let i=0; i<max; i++){
        t1.push(i);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [sortState, setSortState] = useState('asc');

    const getProducts = async() => {
        await fetch('https://fakestoreapi.com/products')
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
    const FilterContaineer = styled.div`
        width: fit-content;
        margin-left:auto;
        margin-right: ${(window.innerWidth>600) ? "100px" : "20px"};
        margin-bottom: ${(window.innerWidth>600) ? "20px" : "10px"};
        padding: 10px 20px;
        border-radius: 20px;
        border: black 2px solid;
        cursor: pointer;
    `;



    const paginationOnClick = (id) => {
        setCurrentPage(id);
        console.log(id);
        console.log(currentPage)
    };

    const sortOnClick = async() =>{
        setCurrentPage(1);
        setLoaded(false);
        await fetch(`https://fakestoreapi.com/products?sort=${sortState}`)
        .then(res=>res.json())
        .then(json=>setProducts(json))
        setLoaded(true);
        if  (sortState == 'asc'){
            setSortState('desc');
        } else{
            setSortState('asc');
        }
    }
    
    

    return(
        <>
        <Heading>All Products</Heading>
        <SubHeading>
            Showing {Math.min(max,products.length-(currentPage-1)*max)} Out of {products.length} Results
        </SubHeading>
        <FilterContaineer onClick={sortOnClick}>Sort ({(sortState=='asc') ? 'Ascending' : 'Descending' })</FilterContaineer>
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
        { (products.length/max)>1 ? <Pagination props={{"active":currentPage,"max":products.length/max,"onClick": paginationOnClick}}/>
        : <></>}
        </>
    );
}