import React from "react";
import Header from "../Sections/header";
import TopNavbar from "../Navigation/topNav";
import Services from "../Sections/services";
import Projects from "../Sections/projects";
import Blog from "../Sections/blog";
import Contact from "../Sections/contact";
import Footer from "../Sections/footer";
// import DashboardBlogCard from "../Sections/dashboardBlogCard";


function Landing (){
    return(
        <>
        <TopNavbar />
        <Header />
        <Projects />
        <Services />
      
        <Blog />
        <Contact />
        <Footer />
        </>
    )
}
export default Landing;