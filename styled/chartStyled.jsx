import styled from 'styled-components';


const Container = styled.div`

width:100%;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

background-color:#46515e;

background-color:#111;

`

const Title = styled.div`

width:100%;
display:flex;
flex-direction:column;

justify-content:center;
align-items:center;


h1{
    text-align:center;
    color:#e6e8eb;
    font-weight:400;
    font-size:26px;

}


p{ 
    text-align:center;
    color:rgb(214,59,59);
    font-family:Helvetica;
    font-weight:200;
    font-size:16px;
    margin-top:0px;
    margin-bottom:30px;
    letter-spacing:1px;


}
`

const Page = styled.div`

width:100%;
height:100vh;
max-height:100vh;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
background-color:#46515e;
background-color:#111;




`

const ChartDiv = styled.div` 

/* box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75); */
/* border-radius:30px; */
background-color:white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
/* overflow:hidden; */

/* border:1px solid #aaa; */
width:90%;
max-width:80%;
height:80%;
max-height:80%;
padding:10px;
background-color:transparent;


.chart-div{
    width:100%;
    height:100%;
    display:flex;
flex-direction:row;
justify-content:center;
align-items:flex-start;
border:none !important;


}

.reactgooglegraph-1{
    /* width:100%;
    height:100%; */

    /* div{
        width:100%;
    height:100%;
    } */
}

svg{
    background-color:transparent !important;


text{
    fill:#d9d9d9 !important;
    font-size:16px;
    font-weight:300;
    font-family:Helvetica;
}

   g{
       
        rect{
        fill:transparent;

        /* width:100% !important; */
    }


    text{

        fill:#d9d9d9 !important;
    font-size:16px  !important;
    font-weight:700  !important;
    font-family:Helvetica  !important;
    margin-left:10px !important;

    }
}
}

div{
    background-color:transparent !important;
}




`

export {
    ChartDiv, Container, Title
}