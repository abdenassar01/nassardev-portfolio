import { LoadingWrapper, Spinner } from "./styles/Styles"

type LoadingProp = {
    isLoading: boolean
}

function Loading(props: LoadingProp) {

  return  props.isLoading ? (
    <LoadingWrapper>
        <Spinner />
    </LoadingWrapper>
  ) : null;
}

export default Loading