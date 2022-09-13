import { MetaFunction } from "@remix-run/node";
import Contact from "~/components/pages/contact/Contact";

function index() {
  return (
    <Contact />
  )
}

export default index

export const meta: MetaFunction = () => ({
  keyword: "abdenassar amimi, abde nassar amimi, developer, developement informatique, web developer, portfolio",
  title: "Abde Nassar | Contact Page",
  discription: "You can contact abdenassar amimi directly throught this page.", 
});