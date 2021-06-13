import {useState, useEffect, React} from 'react'
import styled from 'styled-components'
import Card from './Skeleton'

import './Categories.css'
import '../../Assets/YUI3.css'

export default function Categories(){
    const [categoryData, setCategoryData] = useState([]);

    const getData = async() => {
        await fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>console.log(json))
    }

    useEffect(() => {
        getData();
        return () => {};
      }, []);
    
    const Heading = styled.div`
    
    `;

    const CategoryCard = styled.div`
    position:relative;
    width: fit-content;
    height: fit-content;
    `;

    const CategoryName = styled.div`
        position: absolute;
        left:0;
        top:0;
        height:100%;
        width:100%;
        text-align:center;
        vertical-align:middle;
    `;


    return(
        <>
        <Heading>Pick A Category</Heading>
        <Card/>
        <CategoryCard>
            <div className="Image">
                <img src = "http://placehold.it/900x400" />
            </div>
            <CategoryName>
                <h1 className="CategoryCardName">Category</h1>
            </CategoryName>
        </CategoryCard>
        </>
    );
}