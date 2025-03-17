import Home from "../pages/home/Home"; 
import Projects from "../pages/projects/Projects";
import Datalab from "../pages/datalab/Datalab";
import AboutUs from "../pages/about-us/AboutUs";
import ContactUs from "../pages/contact-us/ContactUs";

const baseRoutes = [
    {
        path: "/",
        component: <Home />,
    },
    {
        path: "/projects",
        component: <Projects />,
    },
    {
        path: "/datalab",
        component: <Datalab />,
    },
    {
        path: "/about-us",
        component: <AboutUs />,
    },
    {
        path: "/contact-us",
        component: <ContactUs />,
    },

]

export default baseRoutes;