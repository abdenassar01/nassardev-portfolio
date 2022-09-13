import { useForm } from "react-hook-form"
import { Field, Input, Label, Submit, TextArea } from "~/util"
import Blob from "./blob/Blob"
import { ContactWrapper, Illustration, LeftSide, RightSide, Raw, Form, SubmitField, ErrorMessage } from "./styles/Styles"

type MessageInfo = {
    firstname: string,
    lastname: string,
    mail: string,
    message: string
}

function Contact() {

    const { register, handleSubmit, formState : { errors }, reset } = useForm<MessageInfo>() 

    const onSubmit = (data: MessageInfo) => {
        console.log(data);
        reset({
            firstname: "",
            lastname: "",
            mail: "",
            message: ""
        })
    } 
    
  return (
    <ContactWrapper>
        <LeftSide>
            <Illustration>
                <Blob />
            </Illustration>
        </LeftSide>
        <RightSide>
            <Form onSubmit={ handleSubmit( onSubmit ) }>
                <Raw>
                    <Field>
                        <Label htmlFor="firstname">{ errors.firstname ? <ErrorMessage>firstname is required. </ErrorMessage> : "Firstname:"  }</Label>
                        <Input type="text" id="firstname" { ...register("firstname", { required: true })} />
                    </Field>                    
                    <Field>
                        <Label htmlFor="lastname" >{ errors.lastname ? <ErrorMessage>lastname is required. </ErrorMessage> : "Lastname:"  } </Label>
                        <Input type="text" id="lastname" { ...register("lastname", { required: true })} />
                    </Field>
                </Raw>  
                <Field>
                    <Label htmlFor="mail" >{ errors.mail ? <ErrorMessage>{(errors.mail?.type === 'required') && "mail is required." || ( errors.mail?.message ) }</ErrorMessage> : "E-mail:"  } </Label>
                    <Input type="mail" id="mail" { ...register("mail", { required: true, 
                        pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: "email format not valid."
                            }})} />
                </Field>                    
                <Field>
                    <Label htmlFor="message" >{ errors.message ? <ErrorMessage>message is required. </ErrorMessage> : "Message:"  }</Label>
                    <TextArea id="message" rows={ 8 } { ...register("message", { required: true })} />
                </Field>     
                <SubmitField>
                    <Submit type="submit" value="Send" />
                </SubmitField>               
            </Form>
        </RightSide>
        
    </ContactWrapper>
  )
}

export default Contact