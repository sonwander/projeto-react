import styled from 'styled-components';

export const Container = styled.div
`
width: 300px;
height: 220px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 10px 9px 11px -4px rgba(0,0,0,0.75);
flex-direction: column;
margin: 20px;
cursor: pointer;
transition: all 0.3s ease;
&:hover{
    opacity: 0.5;
   
}

`
export const TopCard = styled.div
`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`

export const BottomCard = styled.div
`
width: 100%;
display: flex;
justify-content: space-around;
strong{
    color: orange;
    font-weight: bold;
}

`