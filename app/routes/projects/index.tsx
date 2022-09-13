import { MetaFunction } from "@remix-run/node";
import Projects from "~/components/pages/projects/Projects"

function index() {
  return (
    <Projects />
  )
}

export default index

export const meta: MetaFunction = () => ({
  keyword: "abdenassar amimi, abde nassar amimi, developer, shoppily, guichet, casawe-guichet, developement informatique, muslim, muslimweb, web developer, casawe, portfolio",
  title: "Abde Nassar | Projects Page",
  discription: "Here you find a list of the best side projects built by abdenassar amimi. you can contribute to those projects or get insperation and implimants ideas in your own projects.", 
});