import { PrimaryButton, SecondaryButton } from "~/util"

function about() {
  return (
    <div>
      <PrimaryButton color="white" to="/ggs">Primary</PrimaryButton>
      <SecondaryButton to="/">go back home</SecondaryButton>
    </div>
  )
}

export default about