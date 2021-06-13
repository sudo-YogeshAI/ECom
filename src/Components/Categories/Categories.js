import {useState, useEffect, React} from 'react'
import styled from 'styled-components'
import Card from './Card'


import '../../Assets/YUI3.css'
import Skeleton from './Skeleton';

export default function Categories(){
    const T1 = [];
    const max=10;
    for (let i=0; i<max; i++){
        T1.push(i);
    }

    const [categoryData, setCategoryData] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const getData = async() => {
        var data = [];
        const ret = [];
        await fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>data =json)
        console.log(data);
        for (let i=0; i<data.length; i++){
            const dict = {}
            var response ="";
            await fetch(`https://fakestoreapi.com/products/category/${data[i]}?limit=1`)
            .then(res=>res.json())
            .then(json=>response = json)
            console.log(response)
            dict["name"] = data[i];
            console.log(response[0])
            dict["img"] = response[0].image;
            ret.push(dict)
        };
        setCategoryData(ret);
        setLoaded(true);
    }

    useEffect(() => {
        getData();
        return () => {};
      }, []);
    
      const Heading = styled.div`
      padding: 20px;
      padding-top: ${(window.innerWidth>600) ? "50px" : "20px"};
      padding-bottom: ${(window.innerWidth>600) ? "50px" : "20px"};
      font-size: ${(window.innerWidth>600) ? "10em" : "4em"};
      font-weight: bold;
      text-align: center;
      background: url('https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-shading-background-abstract-colorful-background-colorful-art-image_22644.jpg');
      background-size: cover;
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
    const SubHeading = styled.div`
        padding-left: ${(window.innerWidth>600) ? "100px" : "20px"};
        padding-top: ${(window.innerWidth>600) ? "50px" : "20px"};
        padding-bottom: ${(window.innerWidth>600) ? "50px" : "20px"};
        font-size: ${(window.innerWidth>600) ? "2em" : "1.5em"};
        font-weight: bold;
    `;

    return(
        <>
        <Heading>All Categories</Heading>
        <SubHeading>Please Pick A Category</SubHeading>
        <FlexBox>
            {!loaded ?<>{T1.map((id) => <Skeleton key={id}/>)}</> : <>{categoryData.map((id,index) => <Card props={id} key={index}/>)}</>}
        </FlexBox>
        </>
    );
}