import { ActionFunction, redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    console.log(formData)

    const templateParams = {
        firstname: "nassar",
        lastname: "dev",
        mail: "abdenassaramimi99@gmail.com",
        message: "hello how are you"
    }
    try{
        console.log("success")
    }catch(e){
        console.log(e)
    }
    return redirect("/")
  }