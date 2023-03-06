import Home from "../Components/Home/home";
import Aboutus from "../Components/AboutUs/about";
import Services from "../Components/Services/services";
import Technologies from "../Components/Technologies/technologies";
import Careers from "../Components/Careers/careers";
import Blog from "../Components/Blog/blog";
import Testimonials from "../Components/Testimonial/testimonial";
import ContactUs from "../Components/ContactUs/contactUs";
import contactUs from "../Components/ContactUs/contactUs";


export const TOTAL_SCREENS = [

         {
           screen_name: "About Us",
           component: Aboutus,
         },
         {
           screen_name: "Services",
           component: Services,
         },
         {
           screen_name: "Technologies",
           component: Technologies,
         },
         {
           screen_name: "Careers",
           component: Careers,
         },
         {
           screen_name: "Testimonials",
           component: Testimonials,
         },
         {
           screen_name: "Blog",
           component: Blog,
         },
         {
           screen_name: "Contact Us",
           component: contactUs,
         },
       ];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};