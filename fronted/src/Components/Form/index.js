import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {
    FormContainer,
    FormWrap,
    FormDisplay,
    FormItems,
    FormLabel,
    FormInput,
    FormTextArea,
    FormSubmit
} from './formElements'

const Form = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const [affair,setAffair] = useState('');
    const [message,setMessage] = useState('');

    const [send,setSend] = useState(false);

    const handleSend = async () =>{
        setSend(true);
        try{
            await axios.post('http://localhost:3001/send-email',
            {name,email,number,affair,message}
            );
        }catch(err){
            console.log(err);
        }
    }

    return (
        <>
            <FormContainer id='contact'>
                <FormWrap>
                    <FormDisplay id="form--contact" onSubmit={handleSend}>
                        <FormItems>
                            <FormLabel for='name' id='lbName'>Nombre</FormLabel>
                            <FormInput id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='ingrese su nombre' required></FormInput>
                        </FormItems>
                        <FormItems>
                            <FormLabel for='mail' id='lbName'>Correo</FormLabel>
                            <FormInput id='mail' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name='mail' placeholder='ingrese su correo' required></FormInput>
                        </FormItems>
                        <FormItems>
                            <FormLabel for='number' id='lbName'>Numero </FormLabel>
                            <FormInput id='number' value={number} onChange={(e)=>setNumber(e.target.value)} name='number' placeholder='ingrese su numero' required></FormInput>
                        </FormItems>
                        <FormItems>
                            <FormLabel for='affair' id='lbName'>Asunto</FormLabel>
                            <FormInput id='affair' value={affair} onChange={(e)=>setAffair(e.target.value)} name='affair' placeholder='ingrese asunto' required></FormInput>
                        </FormItems>
                        <FormItems>
                            <FormLabel for='message' id='lbName'>mensaje</FormLabel>
                            <FormTextArea id='message' value={message} onChange={(e)=>setMessage(e.target.value)} name='message' placeholder='ingrese su mensaje' required></FormTextArea>
                        </FormItems>
                        <FormItems>
                            <FormSubmit id='submit' type='submit'>Enviar</FormSubmit>
                        </FormItems>
                    </FormDisplay>
                </FormWrap>
            </FormContainer>
        </>
    )
}

export default Form
