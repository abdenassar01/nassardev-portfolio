import { Wrapper } from "~/components/pages/home/globals/styles/Styles";

import Blob from "~/components/pages/home/blob/Blob";
import Greeting from "~/components/pages/home/greeting/Greeting";

export default function Index() {
  return (
    <Wrapper>
      <Greeting />
      <Blob />
    </Wrapper>
  );
}
