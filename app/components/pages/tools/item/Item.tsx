import { Avatar, Discription, ItemWrapper } from "./styles/Styles"

type ItemProp = {
    avatar: string,
    toolsName?: string,
    disc: string
}

function Item(props: ItemProp) {
    return (
        <ItemWrapper>
            <Avatar src={ props.avatar } alt={ props.toolsName || "Nassar's tool" }/>
            <Discription>
                { props.disc }
            </Discription>
        </ItemWrapper>
  )
}
export default Item