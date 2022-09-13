import Contact from "~/components/pages/contact/Contact";

function index() {
  return (
    <Contact />
  )
}

export default index

export async function action({ request }: any) {
  const body = await request.formData();
  console.log(body)
}