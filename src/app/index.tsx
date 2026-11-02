import { StatusBar } from "react-native";
import { Home } from "./pages/Home";

export default function Index() {
  return (
    <>
    <StatusBar barStyle='light-content'/>
    <Home />
    </>
  )
}