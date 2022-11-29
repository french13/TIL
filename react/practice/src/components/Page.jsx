import React, { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";
import Content from './Content';
import Footer from './Footer';
import Header from './Header'


function Page(){
    const data = useContext(ThemeContext);
    console.log(data)
    return(
        <div className="page">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>

        </div>
    )
}

export default Page;