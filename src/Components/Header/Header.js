import { React } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import "../../Assets/YUI3.css"



export default function Headers() {
    const midWidth = window.innerWidth-400;


    const FlexBoxS = styled.div`
        margin-left:0;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;

        -webkit-flex-flow: row wrap;
        flex-wrap: wrap;
        justify-content: space-between;
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
        justify-content: space-between;
    `;

    const Header = styled.div`
        background: black;
        border-bottom: red 2px solid;
        color: white;
        font-weight: bold;
        font-size:1.25em;
        padding-top:5px;
        padding-bottom: 5px;
    `;

    const Navigation = styled.div`
        padding: 10px 20px;

    `;

    const LeftHeader = styled.div`
        margin-left:${(window.innerWidth>600) ? "5%" : "10px"};
    `;

    const RightHeader = styled.div`
        width: fit-content;
    `;

    const RightHeaderUnit = styled.div`
        margin-right: 20px;
    `;
    

    return(
        <>
        <Header>
            <FlexBoxS>
                <LeftHeader>
                    <FlexBox>
                        <img src={process.env.PUBLIC_URL + '/HeaderBanner400.png'} width={(window.innerWidth>600) ? "400px" : "50%" } height="50px" alt="LeftHeader"/>
                    </FlexBox>
                </LeftHeader>
                <RightHeader>
                {window.innerWidth>600 ? <>
                    <FlexBox>
                    <RightHeaderUnit><Navigation><Link to="/about"><a>About</a></Link></Navigation></RightHeaderUnit>
                    <RightHeaderUnit><Navigation><Link to="/all-products"><a>All Products</a></Link></Navigation></RightHeaderUnit>
                    <RightHeaderUnit><Navigation><Link to="/category"><a>All Categories</a></Link></Navigation></RightHeaderUnit>
                    </FlexBox>
                </> : <></>}
                </RightHeader>
            </FlexBoxS>
            
        </Header>
        </>
    );
}