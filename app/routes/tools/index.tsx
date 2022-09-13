import { MetaFunction } from "@remix-run/node";
import Tools from "~/components/pages/tools/Tools"

function index() {
    return (
        <Tools />
    )
}

export default index

export const meta: MetaFunction = () => ({
    keyword: "abdenassar amimi, abde nassar amimi, vs code, vim, altek technologies, bts, dsi, developement informatique, web developer, portfolio",
    title: "Abde Nassar | Tools Page",
    discription: "This is a list of tech equipment I currently use for my day-to-day work as a software developer.", 
});