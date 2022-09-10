import { useCatch } from "@remix-run/react";
import { MainTitle } from "~/util"
import Illustration from "./404/Illustration"
import { ErrorText, ErrorWrapper, Paragraph } from "./styles/Styles"

function Error() {

  const caught = useCatch();

  return (
    <ErrorWrapper>
        <Illustration />
        <ErrorText>
          <MainTitle>
              { caught.status } { caught.statusText }
          </MainTitle>
          <Paragraph>
            We don't seems to find the page you are looking for
          </Paragraph>
        </ErrorText>
    </ErrorWrapper>
  )
}

export default Error