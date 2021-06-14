import {React, useState, useEffect} from 'react'
import styled from 'styled-components'
import Skeleton from '../Products/Skeleton'
import Card from '../Products/Product'
import Pagination from '../Pagination/Pagination'
import Shop from '../Products/Cart';
import {cart} from '../Products/Cart';

import "../../Assets/YUI3.css"
import { useParams } from 'react-router-dom'

export default function CatProducts( {props} ){
    const {category} = useParams();
    const [total,setTotal] = useState(0);
    console.log(category);

    const t1 =[];
    const max = 10;

    for (let i=0; i<max; i++){
        t1.push(i);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [sortState, setSortState] = useState('asc');

    const getProducts = async() => {
        await fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res=>res.json())
        .then(json=>setProducts(json))
        setLoaded(true);
    }

    const gettotal =() => {
        let Sum = 0;
        console.log("here")
        cart.map(function(item){
            Sum += item.quantity;
        }
        )

        setTotal(Sum);

    }

    useEffect(() => {
        getProducts();
        gettotal();
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
        await fetch(`https://fakestoreapi.com/products/category/${category}?sort=${sortState}`)
        .then(res=>res.json())
        .then(json=>setProducts(json))
        setLoaded(true);
        if  (sortState == 'asc'){
            setSortState('desc');
        } else{
            setSortState('asc');
        }
    };
    
    

    return(
        <>
        <Heading>
            {category.substring(0,1).toUpperCase()+category.substring(1)}
        </Heading>
        <SubHeading>
            Showing {Math.min(10,products.length-(currentPage-1)*max)} Out of {products.length} Results
        </SubHeading>
        <Shop />

        <FilterContaineer onClick={sortOnClick}>Sort ({(sortState=='asc') ? 'Ascending' : 'Descending' })</FilterContaineer>
        <FlexBox>
        { (!loaded) ? <>
        {console.log(products)}
        {t1.map((id,index) => (
            <Skeleton key={id}/>
        ))} 
        </>: <>{products.slice((currentPage-1)*max,Math.min(currentPage*max,products.length)).map((id,index) => (
            <Card key={index} props={{"name":id.title,"cost":`$ ${id.price}`,"img":id.image,"id":id.id,"desc":id.description}} />
        ))} </> }
        </FlexBox>
        { (products.length/max)>1 ? <Pagination props={{"active":currentPage,"max":products.length/max,"onClick": paginationOnClick}}/>
        : <></>}
        </>
    );
}