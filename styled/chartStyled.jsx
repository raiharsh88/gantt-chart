import styled from 'styled-components';


const Container = styled.div`

width:100%;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#f2f5fa;



`

const ChartDiv = styled.div` 

width:600px;
max-width:600px;

height:max-content;
padding:20px;
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
border-radius:30px;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;

`

export {
    ChartDiv, Container
}