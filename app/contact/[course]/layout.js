import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
    title: "Contact Us",
    description: "Empowering engineers through knowledge and innovation. Join our platform to excel in the field of engineering.",
  };  
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
      
    </html>
  );
}
