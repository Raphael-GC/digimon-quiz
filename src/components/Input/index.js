import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
width: 283px;
height: 40px;
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 24px; /*Importante se atentar ao box height*/
letter-spacing: 0.15px; /*Importante se atentar ao box height*/
color: rgba(255, 255, 255, 0.6);
background: rgba(255, 255, 255, 0.1);
border-radius: 3.5px;
::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
`;

export default InputBase;
