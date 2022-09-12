import styled from 'styled-components';

export const Main = styled.div`
width:100%;
background-color:#F0F0F0;
display:grid;
grid-template-columns: 2fr 10fr;
position:fixed;
`

export const DivLeft = styled.div`
height:100vh;
`

export const DivRigth = styled.div`
height:100vh;

`

export const DivHeader = styled.div`
background-color:#191970;
height: 20vh;
`

export const DivContent = styled.div`

display:grid;
grid-template-columns: 7fr 5fr;

`

export const DivCategorias = styled.div`
height: 70vh;
border:1px solid black;
`

export const DivResumo = styled.div`
height: 70vh;
`
export const DivContainer = styled.div`
margin: 30px 40px 0 30px;
padding: 5px 0 50px 10px;
background-color: #FEFEFE;
border-radius:7px;
table{
    border-radius: 4px ;
    padding:0 2px;
    width: 100%;
    border-spacing:0 15px;
}
#buttonLeft{
    color: white;
    background-color: #191970;
    margin-right: 90px ;
    height: 5vh;
    width: 10vw;
    border: none;
    border-radius: 7px ;
}
#buttonRight{
    color: white;
    opacity: 0.5;
    background-color: #191970;
    height: 5vh;
    width: 10vw;
    border: none;
    border-radius: 7px ;
}
tr{
    height: 6vh;
    border: none;
    border-radius: 7px;
}
.list1{
    background-color: #191970;
}
.list2{
    background-color: #0000CD;
}
.list3{
    background-color: #4169E1;
}
.list4{
    background-color: #20B2AA;
}
.list5{
    background-color: #90EE90;
}
.list6{
    background-color: #ADFF2F;    
}
`
export const DivCat = styled.div`
background-color: #FEFEFE;
margin: 30px 40px 0 30px ;
border-radius:7px;
color: #191970;
table{
    padding:0 4px;
    width: 100%;
    border-spacing:0 15px;
}
#cabecalho{
    background-color: #F0F0F0;
    border-radius: 15px;
}
#corpo{
    text-align:center;
}
.negrito{
    font-weight:bold;
}
`


export const DivTitlle = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
select{
    border-radius:7px;
    height: 5vh;
    width: 15vw;
    background-color: #F0F0F0;
}

`

export const InputSearch = styled.input`
background-color:#6495ED;
margin-left:40px;
margin-top:10px;
width: 25vw;
height: 4vh;
opacity:30%;
border-radius:7px;
::placeholder{
    color:	#FEFEFE;
}
`