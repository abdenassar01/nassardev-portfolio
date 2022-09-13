import { AlertWrapper, Message } from "./styles/Styles"

type Alert = {
    message: string,
    status:  boolean,
}

function Alert(props: Alert) {

    if(!props.message) return null

  return (
    <AlertWrapper status={ props.status }>
        <Message>{ props.message }</Message>
    </AlertWrapper>
  )
}

export default Alert