import { MetaFunction } from "@remix-run/node"
import { EDUCATION, EXPERIENCES } from "~/assets/data"
import Profile from "~/components/pages/about/profile/Profile"
import Text from "~/components/pages/about/text/Text"
import Timeline from "~/components/pages/about/timeline/Timeline"

function About() {
  return (
    <div>
      <Profile />
      <Text />
      <Timeline data={ EDUCATION }/>
      <Timeline data={ EXPERIENCES }/>
    </div>
  )
}

export default About

export const meta: MetaFunction = () => ({
  keyword: "abdenassar amimi, abde nassar amimi, developer, altek, altek technologies, bts, dsi, developement informatique, web developer, portfolio",
  title: "Abde Nassar | About Me Page",
  discription: "Hey, my name is abdenassar amimi. I'm a 21 years old full stack developer based in morocco. I'm motivated to learn more in the programming field.", 
});