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