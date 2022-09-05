import { Wrapper } from "~/components/home/globals/styles/Styles";

import Blob from "~/components/home/blob/Blob";
import Greeting from "~/components/home/greeting/Greeting";

export default function Index() {
  return (
    <Wrapper>
      <Greeting />
      <Blob />
    </Wrapper>
  );
}
