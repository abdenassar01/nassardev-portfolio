import { Field, Input, Label, Submit, TextArea } from "~/util"
import Blob from "./blob/Blob"
import { ContactWrapper, Illustration, LeftSide, RightSide, Raw, Form, SubmitField } from "./styles/Styles"

function Contact() {
  return (
    <ContactWrapper>
        <LeftSide>
            <Illustration>
                <Blob />
            </Illustration>
        </LeftSide>
        <RightSide>
            <Form method="POST">
                <Raw>
                    <Field>
                        <Label htmlFor="name">Name: </Label>
                        <Input type="text" id="name" name="name" />
                    </Field>                    
                    <Field>
                        <Label htmlFor="lastname">Lastname: </Label>
                        <Input type="text" id="lastname" name="lastname" />
                    </Field>
                </Raw>  
                <Field>
                    <Label htmlFor="mail">E-mail: </Label>
                    <Input type="mail" id="maile" name="mail" />
                </Field>                    
                <Field>
                    <Label htmlFor="message">Message: </Label>
                    <TextArea id="message" name="message" rows={ 8 } />
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