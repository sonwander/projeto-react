import styled from 'styled-components';

export const Container = styled.div
`
width: 100%;
height: 10%;
background: #20295F;
border-bottom: 3px solid #EE6B26;
display: flex;
`
export const Left = styled.div
`
width: 40%;
height: auto;
display: flex;
    align-items: center;
img{
    width: 25%;
    height: auto;
    
}

`
export const Right = styled.div
`
width: 50%;
height: 10%;
display: flex;
align-items: center;
justify-content: flex-end;
a{
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;

    &:hover{
       color: orange; 
    }
}
    #notification{
        img{
            width: 25px;
            height: 30px;
            display: flex;
            align-items: center;
            margin-top: 20px;
        }
        span{
            background: #fff;
            color: #EE6B26;
            padding: 2px 5px;
            border-radius: 50%;
            position: relative;
            top: -30px;
            right: -15px;
            }
            &:hover{
                opacity: 0.5;
            }
    }
.divider::after{
    content: "|";
    margin: 0 10px;
    color: white;
}

`
