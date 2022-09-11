import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Error from "./components/pages/error/Error";
import { GlobalStyles } from "./util/globalStyles";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  author: "abdenassar amimi",
  keyword: "abdenassar amimi, abde nassar amimi, abde nassar, amimi, react, developer, moroccan developer, programming, web dev, full stack developer",
  title: "Abde Nassar | Personal Portfolio",
  discription: "Hey, my name is abdenassar amimi. I'm a 21 years old full stack developer based in morocco. I'm motivated to learn more in the programming field.", 
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <title>Page Not Found 😥</title>
        <Links />
		    { typeof document === "undefined"  ? "__STYLES__" : null } 
     </head>
      <body>
        <Navbar />
        <Outlet />
        <Footer />
        <GlobalStyles />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary(){
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
		    { typeof document === "undefined"  ? "__STYLES__" : null } 
     </head>
      <body>
        <Navbar />
        <Error />
        <Footer />
        <GlobalStyles />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

