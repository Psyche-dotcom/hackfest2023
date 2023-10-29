import styled  from "styled-components";

export const View = styled.div`
width:100%;
`
export const LoginText =styled.h1`
color:purple;
font-size:30px
`
export const Row = styled.div`
width:100%;
height:800px;
display:flex
`
export const ContentLogin = styled.div`
width:50%;
height:100%;
padding:50px;
display:flex;
flex-direction:column;
align-items:center;
`
export const ContentHeader = styled.div`
width:100%;
height:100px;
display:flex;
justify-content:space-between;
align-items:center;

`
export const ContentBackground = styled.div`
width:50%;
height:100%;
background:yellow;
display:flex
`
export const Para =styled.div`

width:100%;
margin-top:30px;
display:flex;
justify-content:flex-end;
margin-bottom:30px;
color:purple`

export const Form =styled.form`
width:100%;
height:auto;

`
export const Content =styled.div`
width:90%;
height:600px;
padding-top:20%

`
export const InputField =styled.label`
width:100%;
display:flex;
justify-content:center;
align-items:center;
height:50px;
border:1px solid purple;
border-radius:10px;
background:white;
margin-top:15px;

input{
    width:85%;
    height:35px;
    border:0px;
    outline:none;
    padding:10px
}
`

export const Button =styled.button`
width:100%;
height:50px;
background:purple;
color:white;
border-radius:10px
`

export const ButtonFx  = styled.button`
width:100%;
height:45px;
background:pink;
margin-top:20px;
color:white;
border-radius:10px
`