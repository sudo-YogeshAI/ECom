import {React} from 'react'
import styled from 'styled-components'


export default function Pagination({props}){
    const T1 = [];
    const T2 = [];
    for (let i=0; i<props.active-1; i++){
        T1.push(i+1);
    }
    for (let i=props.active; i<props.max; i++){
        T2.push(i+1);
    }

    const Containeer = styled.div`
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
    `;
    const FlexBox = styled.div`
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;

        -webkit-flex-flow: row wrap;
        flex-wrap: wrap;
        justify-content: space-evenly;
    `;

    const Inactive = styled.button`
        border: black solid 1px;
        border-radius: 100%;
        padding: 0.5em 0.75em;
        margin-left:15px;
    `;
    const Active = styled.button`
    border: black solid 1px;
    border-radius: 100%;
    background: wheat;
    padding: 0.5em 0.75em;
    margin-left:15px;
`;

    return(
        <>
        <Containeer>
            <FlexBox>
                {T1.map((id)=> <Inactive key={id} onClick={props.onClick(id)}>{id}</Inactive>)}
                <Active key={props.active}>{props.active}</Active>
                {T2.map((id)=><Inactive key={id} onClick={()=>props.onClick(id)}>{id}</Inactive>)}
            </FlexBox>
        </Containeer>
        </>
    );
}