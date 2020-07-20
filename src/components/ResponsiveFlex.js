import React from 'react';
import styled from 'styled-components';
function ResponsiveFlex() {
    return (
        <Flex />
    )
}

const Flex = styled.div`
display: flex;
width: 100%;
@media(max-width: 500px){
    flex-direction: column;

}


`;

export default ResponsiveFlex;