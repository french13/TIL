import React from "react"
import Content from './Content';
import Footer from './Footer';
import Header from './Header'


function Page({isDark, setIsDark}){
    return(
        <div className="page">
            <Header isDark={isDark}></Header>
            <Content isDark={isDark}></Content>
            <Footer setIsDark={setIsDark}></Footer>

        </div>
    )
}

export default Page;