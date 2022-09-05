import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./util/globalStyles";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  author: "abdenassar amimi",
  title: "Abde Nassar | Personal Portfolio",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
		    { typeof document === "undefined"  ? "__STYLES__" : null } 
     </head>
      <body>
        <Navbar />
        <Outlet />
        <GlobalStyles />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
