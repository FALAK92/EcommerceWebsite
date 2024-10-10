import Hero from "./components/Hero";
import NewProduct from "./components/NewProduct";
import Testimonial from "./components/Testimonial";


export default function Home(){
  return(
    <div> 
      <main>
        <Hero/>
        <NewProduct/>
        <Testimonial/>
      </main>
    </div>
  )
}
