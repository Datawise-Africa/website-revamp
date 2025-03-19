import Home from "../pages/home/Home"; 
import Projects from "../pages/projects/Projects";
import Datalab from "../pages/datalab/Datalab";
import AboutUs from "../pages/about-us/AboutUs";
import ContactUs from "../pages/contact-us/ContactUs";

const baseRoutes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/datalab",
        element: <Datalab />,
    },
    {
        path: "/about-us",
        element: <AboutUs />,
    },
    {
        path: "/contact-us",
        element: <ContactUs />,
    },

]

export default baseRoutes;