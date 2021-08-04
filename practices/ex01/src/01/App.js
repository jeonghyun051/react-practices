import React, { useState } from 'react';
import styled from "styled-components";

const { default: Bottom } = require("./component/Bottom");
const { default: Top } = require("./component/Top");


const App = () => {
    const StyledAppDiv = styled.div`
        color: red;
    `;
    return (
        <StyledAppDiv>
            <Top />
            <Bottom />
        </StyledAppDiv>
    );
};

export default App;