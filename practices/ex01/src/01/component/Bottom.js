import { useDispatch } from "react-redux";
import styled from "styled-components"
import { decrease, increase } from "../store"
import React from 'react';

const StyledBottomDiv = styled.div`
    border: 3px solid;
    height: 150px;
    padding: 10px 10px 10px 10px;
    margin: 10px; 
`;

const Bottom = () => {
    const dispatcher = useDispatch()    // 액션 생성
    
    return (
        <StyledBottomDiv>
            <h1>Bottom</h1>
            <button onClick = {() => dispatcher(increase("cos"))}>증가</button>
            <button onClick = {() => dispatcher(decrease())}>감소</button>
        </StyledBottomDiv>
    );
};

export default Bottom;