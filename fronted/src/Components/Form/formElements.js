import styled from "styled-components";

export const FormContainer = styled.section`
    height: 100vh;
    width : 100%;
    background :#1D3557;
    display : flex;
    justify-content: center;
    align-items: center;



`

export const FormWrap = styled.div`
    width : 760px;
    height : 80vh;
    background : #fff;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    position : relative;
    

    @media screen and (max-width : 1024px){
        width : 60%;
    }

    @media screen and (max-width : 880px){
        width : 70%;
    }

    @media screen and (max-width : 768px){
        width : 90%;
    }
`

export const FormDisplay = styled.form`
    position : absolute;

    width : 100%;
    top : 50px;
    padding : 1rem;
`

export const FormItems = styled.div`
    display : flex;
    flex-direction : column;
    width : 100%;
    margin : 15px 0;

`


export const FormLabel = styled.label``

export const FormInput = styled.input`
    padding : .4rem;
    margin : 5px 0;
    border : none;
    outline : none;
    border-bottom : 1px solid #1D3557;
`

export const FormTextArea = styled.textarea`
    height : 120px;
    margin : 10px 0;
    padding : 10px;
    border : none;
    border-bottom : 1px solid #1D3557;
    outline : none;

    &:placeholder {
        padding : 1rem;
    }
`

export const FormSubmit = styled.button`
    margin : 0 auto;
    position : absolute;
    left : 0;
    right : 0;
    bottom : 0;
    width : 200px;
    padding : .5rem;
    background : #1D3557;
    border : 1px solid #1D3557;
    color : white;
    transition : all .2s ease-in-out;

    &:hover{
        background : #fff;
        color : #1D3557;
    }
`