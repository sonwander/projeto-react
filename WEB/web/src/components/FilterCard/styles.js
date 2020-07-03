import styled from 'styled-components';

export const Container = styled.div
`

width: 290px;
height: 90px;
background: ${props => props.activated ? 'orange':'#20295F'};
padding: 10px;
display: flex;
border-radius: 5px;
flex-direction: column;
justify-content: space-around;
&:hover{
    background: orange;
    cursor: pointer;
}
img{
    width: 25px;
    height: 25px;
}
span{
    color: #fff;
    font-weight: bold;
    align-self: flex-end;

}


`