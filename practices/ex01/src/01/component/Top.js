import { useSelector } from 'react-redux';
import styled from "styled-components";
import React from 'react';

const StyledTopDiv = styled.div`
    border: 3px solid;
    height: 150px;
    padding: 10px 10px 10px 10px;
    margin: 10px; 
`;

const Top = () => {
    const { number, username } = useSelector((store) => store); // redux store의 상태를 조회

    return (
        <StyledTopDiv>
            <h1>Top</h1>
            번호:{number}
            이름:{username}
        </StyledTopDiv>
    );
}

export default Top;