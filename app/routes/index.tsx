import { Wrapper } from "~/components/pages/home/globals/styles/Styles";
import Blob from "~/components/pages/home/blob/Blob";
import Greeting from "~/components/pages/home/greeting/Greeting";
import { MetaFunction } from "@remix-run/node";

export default function Index() {
  return (
    <Wrapper>
      <Greeting />
      <Blob />
    </Wrapper>
  );
}

export const meta: MetaFunction = () => ({
  keyword: "abdenassar amimi, abde nassar amimi, developer, nassardev, abdenassar01, developement informatique, web developer, portfolio",
  title: "Abde Nassar | Home Page",
  discription: "Hey, my name is abdenassar amimi. I'm a 21 years old full stack developer based in morocco. I'm motivated to learn more in the programming field.", 
});