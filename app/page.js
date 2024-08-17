import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Head from "next/head";

export const metadata = {
  title: "An Organization For Engineers | EGT",
  description: "Empowering engineers through knowledge and innovation. Join our platform to excel in the field of engineering.",
};
export default function Home() {
  return (
    <>
      <div className="h-[560px] bg-hero bg-cover w-full">

        <div className="container mx-auto p-4 flex flex-col justify-center h-full ">
          <div className="text-white text-5xl font-black max-sm:pt-12 font-playfairSC pt-4 pb-4 max-lg:w-[80%] w-[50%] max-lg:text-3xl">An Organization For Engineers</div>
          <p className="text-white pt-4 pb-4 w-[40%] max-lg:w-[80%] font-merriweather max-lg:text-sm">
            Empowering engineers through knowledge and innovation, our platform is your path to excellence in the field.
          </p>
          <p className="text-white  pt-4 pb-4 w-[40%] max-lg:w-[80%] font-merriweather max-lg:text-sm">
            More than 100 students have already benefited from this platform's teachings.
          </p>
          <Link href={'/contact'} className="mt-2 mb-2 max-lg:self-center pt-2  pb-2 bg-black w-40 text-center text-white border-2 border-yellow-600 rounded-full">Start Learning</Link>
        </div>
      </div>

      <div className="bg-[#F5F7FA]">
        <div className="container mx-auto p-4">
          <div className="text-3xl max-sm:text-2xl text-center p-5 font-bold text-[#25313C] font-playfair">What Sets Our Engineering Organization Apart</div>
          <p className="text-center max-sm:text-sm font-merriweather text-[#6D7D8B]">
            At EGT, we take immense pride in being your pathway to engineering success. With a legacy of
            3 years in the industry, our seasoned team of engineers and professionals has consistently demonstrated excellence in all facets of engineering. Our diverse project portfolio, spanning various industries, underscores our commitment to versatility and innovation. We don't just meet industry standards; we set them. When you choose us, you choose a partner that catalyzes excellence and transforms engineering challenges into success stories. Discover why our organization is the ideal choice for your engineering endeavors.
          </p>

          <div className="bg-[#485159] w-full relative h-[400px]  max-sm:h-[380px] mt-10 flex">
            <div className="relative w-1/2 h-full">
              <Image
                src="/assets/bg2.webp"
                alt="Background"
                fill
                 style={{ objectFit: 'cover' }}
                quality={100}
                className="w-full h-full"
              />
            </div>
            <div className="skew-x-[-5deg] right-[40%] w-40  max-sm:w-[100px] max-sm:right-[36%] bg-[#485159] h-full absolute"></div>
            <div className="absolute w-[50%] flex justify-center max-sm:pr-4 max-xl:pr-10 pr-4 items-center  max-sm:w-[51%]  z-10  bg-[#485159]  h-full right-0">
              <p className="leading-10 w-full text-center text-white max-lg:text-sm max-lg:leading-10 max-sm:leading-5  max-sm:text-xs font-playfair">
                <span className="font-playfairSC max-sm:text-base text-2xl max-lg:text-xl  text-red-600">Expertise  and  Experience:</span> Our team comprises seasoned engineers, designers, and professionals who bring a wealth of knowledge and experience to the table. Over the years, we have successfully tackled a diverse range of projects across various industries, allowing us to offer valuable insights and proven solutions tailored to your unique needs.
              </p>
            </div>
          </div>

          <div className="flex w-full gap-4 justify-between mt-10 max-lg:flex-col">
            <div className="flex w-[45%] max-lg:w-full h-full bg-[#F5F7FA] text-gray-400 gap-2 items-center">
              <div>
                <Image alt="image" src={`/assets/clock.png`} width={130} height={130} />
              </div>
              <p className="text-center text-xs font-merriweather">
                Stringent quality control measures throughout all project phases ensure our consistent adherence to industry standards
              </p>
            </div>

            <div className="flex w-[45%]  max-lg:w-full h-full bg-[#F5F7FA] text-gray-400 gap-2 items-center">
              <div>

                <Image alt="image" src={`/assets/cap.png`} width={200} height={200} />
              </div>
              <p className="text-center text-xs font-merriweather">
                With a seasoned team of engineers and professionals boasting a proven track record of [Number of Years] years in the industry, we've built a diverse project portfolio spanning various industries
              </p>
            </div>
          </div>




          <div className="mt-10 max-lg:text-3xl max-sm:text-2xl leading-tight w-full font-playfair text-5xl font-bold text-[#1D1D1F] text-center">
            Empowering Futures with Comprehensive Diploma and Degree Engineering Programs: Your Gateway to Academic Excellence
          </div>

          <p className="mt-5 text-center max-sm:text-sm font-merriweather leading-8 text-[#273758]">
            At EGT, our Academic Section is the heart of intellectual exploration. We offer a diverse range of educational opportunities to fuel your thirst for knowledge and ignite your passion for learning. Join us on a journey where curiosity meets academic excellence.
          </p>

          <div className="grid max-xl:gap-x-5 max-xl:gap-y-5 max-xl:grid-cols-2 max-sm:gap-y-5 grid-cols-3 max-sm:grid-cols-1 mt-20 max-sm:mt-10 w-full gap-x-20 justify-center">

            <div className="box1 h-[400px]   max-xl:col-start-1 max-xl:row-start-1 max-sm:col-start-1 justify-center max-sm:row-start-1 row-start-2 row-span-2 bg-[#FFBB00] p-8 rounded-lg flex gap-4 flex-col border-2 border-[#27375866]">
              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/co.jpeg`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Computer Engineering</div>
              <p className="font-merriweather max-sm:text-xs text-[#6D7D8B] font-bold">
                Building Tomorrow's World: Where Innovation Meets Precision 🔧🌍 #EngineeringExcellence
              </p>
              <Link href={'/contact/Computer-Engineering'} className="bg-[#2E3A87]  max-sm:text-xs rounded-lg px-4 py-2 w-1/2 text-white flex text-sm justify-center">Enroll Now!</Link>
            </div>

            <div className="box2 h-[400px] max-xl:col-start-2 max-xl:row-start-1 max-sm:row-start-3 max-sm:col-start-1 row-start-1 row-span-2 bg-[#0BC8FF] p-8 rounded-lg flex gap-4 flex-col  border-2 border-[#27375866]">
              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/ci.jpeg`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Civil Engineering</div>
              <p className="font-merriweather text-[#6D7D8B] max-sm:text-xs font-bold">
                Building Tomorrow's World: Where Innovation Meets Precision 🔧🌍 #EngineeringExcellence
              </p>
              <Link href={'/contact/Civil-Engineering'} className="bg-[#2E3A87] max-sm:text-xs rounded-lg px-4 py-2 w-1/2 text-white flex text-sm justify-center">Enroll Now!</Link>
            </div>
    

            <div className="box3 h-[400px] max-xl:col-start-1 max-xl:row-start-3 max-sm:row-start-5 max-sm:col-start-1 row-start-2 row-span-2 bg-[#5A4FF3] p-8 rounded-lg flex gap-4 flex-col  border-2 border-[#27375866]">
              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/ro.jpeg`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Robotics</div>
              <p className="font-merriweather text-[#6D7D8B] font-bold max-sm:text-xs">
                Building Tomorrow's World: Where Innovation Meets Precision 🔧🌍 #EngineeringExcellence
              </p>
              <Link href={'/contact/Robotics'} className="bg-[#2E3A87] rounded-lg max-sm:text-xs px-4 py-2 w-1/2 text-white flex text-sm justify-center">Enroll Now!</Link>
            </div>


            <div className="box4 h-[400px] max-xl:col-start-2 max-xl:row-start-3 max-sm:row-start-7 max-sm:col-start-1 row-start-4 col-start-2 row-span-2 bg-[#FAF3E0] p-8 rounded-lg flex gap-4 flex-col  border-2 border-[#27375866]">
              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/me.jpg`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Mechanical Engineering</div>
              <p className="font-merriweather text-[#6D7D8B] font-bold max-sm:text-xs">
                Building Tomorrow's World: Where Innovation Meets Precision 🔧🌍 #EngineeringExcellence
              </p>
              <Link href={'/contact/Mechanical-Engineering'} className="bg-[#2E3A87] max-sm:text-xs rounded-lg px-4 py-2 w-1/2 text-white flex text-sm justify-center">Enroll Now!</Link>
            </div>


            <div className="box5 h-[400px] max-xl:col-start-1 max-xl:row-start-5 max-sm:row-start-9 max-sm:col-start-1 row-start-6 row-span-2 bg-[#ED455D] p-8 rounded-lg flex gap-4 flex-col  border-2 border-[#27375866]">
              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/et.jpg`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Electronics</div>
              <p className="font-merriweather text-[#6D7D8B] max-sm:text-xs font-bold">
                Building Tomorrow's World: Where Innovation Meets Precision 🔧🌍 #EngineeringExcellence
              </p>
              <Link href={'/contact/Electronics'} className="bg-[#2E3A87] max-sm:text-xs rounded-lg px-4 py-2 w-1/2 text-white flex text-sm justify-center">Enroll Now!</Link>
            </div>


            <div className="box6 h-[400px] max-xl:col-start-2 max-xl:row-start-5 max-sm:row-start-11 max-sm:col-start-1 row-start-7 row-span-2 col-start-2 bg-[#27375866] p-8 rounded-lg flex gap-4 flex-col  border-2 border-[#27375866]">
              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/mc.jpeg`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Mechatronics Engineering</div>
              <p className="font-merriweather text-[#33383D] max-sm:text-xs font-bold">
                Building Tomorrow's World: Where Innovation Meets Precision 🔧🌍 #EngineeringExcellence
              </p>
              <Link href={'/contact/mechatronics-engineering'} className="bg-[#2E3A87] max-sm:text-xs rounded-lg px-4 py-2 w-1/2 text-white flex text-sm justify-center">Enroll Now!</Link>
            </div>


            <div className="box7 h-[400px] max-xl:w-[50%] justify-self-center max-sm:col-span-1 max-sm:w-full max-xl:col-span-2 max-xl:col-start-1 max-xl:row-start-7  max-sm:row-start-13 max-sm:col-start-1 row-start-6 row-span-2 col-start-3 bg-[#DAE3EA] p-8 rounded-lg flex gap-4 flex-col  border-2 border-[#27375866]">
              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/ai.jpeg`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">A.I Engineering</div>
              <p className="font-merriweather text-[#33383D] max-sm:text-xs font-bold">
                Building Tomorrow's World: Where Innovation Meets Precision 🔧🌍 #EngineeringExcellence
              </p>
              <Link href={'/contact/A.I-Engineering'} className="bg-[#2E3A87] max-sm:text-xs rounded-lg px-4 py-2 w-1/2 text-white flex text-sm justify-center">Enroll Now!</Link>
            </div>


          </div>

          <div className="mt-10 max-lg:text-3xl max-sm:text-2xl leading-tight w-full font-playfair text-5xl font-bold text-[#1D1D1F] text-center">
            Engineering Futures Enhanced: Unleash Innovation with Our Integrated Software Section
          </div>

          <p className="mt-5 text-center max-sm:text-sm font-merriweather text-[#273758] leading-8">
            Our Software Section is your gateway to a diverse world of engineering. We offer a continuum of preparation, from fundamental concepts to advanced techniques, ensuring you're ready for the ever-evolving field of engineering. At EGT, we empower you to harness the synergy between software and engineering across all branches. Join us to embark on a journey that seamlessly integrates technology into your engineering education.
          </p>  



          <div className="grid mt-10 max-xl:grid-cols-2 max-sm:grid-cols-1 grid-cols-3 gap-5">

            <div className="box1 flex flex-col p-4 h-[400px] justify-between">
            <div className="flex flex-col gap-2"> 
              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/autocad.jpeg`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Autocad Software Learning  </div>
              <p className="font-merriweather text-[#00000080]  text-xs leading-5 font-bold">
                Embark on a journey of design mastery with AutoCAD, where precision meets creativity.
              </p>
              </div>
              <Link href={'/contact/Autocad-Software-Learning'} className="max-sm:text-xs font-playfair font-normal text-[#0BC8FF] rounded-lg py-2 w-1/2 items-center flex justify-start">Learn More<ArrowForwardIosIcon className="text-base mt-[2px]"/></Link>
            </div>

            <div className="box2 flex flex-col p-4 h-[400px] justify-between gap-4  ">
              <div className="flex flex-col gap-2">

              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/solid.png`} fill  style={{ objectFit: 'cover' }} className="rounded-lg bg-[#00000026]" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Solidworks Software Learning   </div>
              <p className="font-merriweather text-[#00000080]  text-xs leading-5 font-bold">
              Experience the future of 3D design and engineering excellence through SolidWorks' dynamic capabilities
              </p>
              </div>
              <Link href={'/contact/Solidworks-Software-Learning'} className="max-sm:text-xs font-playfair font-normal text-[#0BC8FF] rounded-lg py-2 w-1/2 items-center flex justify-start">Learn More<ArrowForwardIosIcon className="text-base mt-[2px]"/></Link>
            </div>

            <div className="box3 flex flex-col p-4 h-[400px] justify-between gap-4  ">
              <div className="flex flex-col gap-2">

              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/ansys.png`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Ansys Software Learning </div>
              <p className="font-merriweather text-[#00000080]  text-xs leading-5 font-bold">
              Step into the realm of engineering simulation and innovation with ANSYS, where virtual prototypes meet real-world solutions
              </p>
              </div>
              <Link href={'/contact/Ansys-Software-Learning'} className="max-sm:text-xs font-playfair font-normal text-[#0BC8FF] rounded-lg py-2 w-1/2 items-center flex justify-start">Learn More<ArrowForwardIosIcon className="text-base mt-[2px]"/></Link>
            </div>

            <div className="box4 flex flex-col p-4 h-[400px] justify-between gap-4  ">
              <div className="flex flex-col gap-2">

              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/python.jpeg`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Python Software Learning </div>
              <p className="font-merriweather text-[#00000080]  text-xs leading-5 font-bold">
              Dive into the world of programming versatility and problem-solving with Python, the language of endless possibilities
              </p>
              </div>
              <Link href={'/contact/Python-Software-Learning'} className="max-sm:text-xs font-playfair font-normal text-[#0BC8FF] rounded-lg py-2 w-1/2 items-center flex justify-start">Learn More<ArrowForwardIosIcon className="text-base mt-[2px]"/></Link>
            </div>

            <div className="box5 flex flex-col p-4 h-[400px] justify-between gap-4  ">
              <div className="flex flex-col gap-2">

              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/catia.jpeg`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">CATIA Software Learning </div>
              <p className="font-merriweather text-[#00000080]  text-xs leading-5 font-bold">
              Embark on a journey of design innovation and engineering mastery with CATIA, the gateway to shaping a limitless future.
              </p>
              </div>
              <Link href={'/contact/Catia-Software-Learning'} className="max-sm:text-xs font-playfair font-normal text-[#0BC8FF] rounded-lg py-2 w-1/2 items-center flex justify-start">Learn More<ArrowForwardIosIcon className="text-base mt-[2px]"/></Link>
            </div>

            <div className="box6 flex flex-col p-4 h-[400px] justify-between gap-4  ">
              <div className="flex flex-col gap-2">
              <div className="w-full h-52 relative rounded-lg">
                <Image alt="image" src={`/assets/matlab.png`} fill  style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
              <div className="font-playfair font-extrabold text-2xl max-sm:text-xl text-black">Matlab Software Learning </div>
              <p className="font-merriweather text-[#00000080]  text-xs leading-5 font-bold">
              Unleash the power of data analysis, modeling, and problem-solving with MATLAB, the language of technical computing
              </p>
              </div>
              <Link href={'/contact/Matlab-Software-Learning'} className="max-sm:text-xs font-playfair font-normal text-[#0BC8FF] rounded-lg py-2 w-1/2 items-center flex justify-start">Learn More<ArrowForwardIosIcon className="text-base mt-[2px]"/></Link>
            </div>

          </div>

          <div className="mt-20 max-lg:text-3xl max-sm:text-2xl leading-tight w-full font-playfair text-5xl font-bold text-[#1D1D1F] text-center">
          Diverse Training Portfolio for Skill Advancement
          </div>

          <p className="mt-5 text-center max-sm:text-sm font-merriweather font-bold text-[#27375899] leading-8">
          At EGT, our Integrated Software Section bridges the gap between engineering and innovation. Explore your chosen engineering discipline through the lens of cutting-edge software technology, opening doors to limitless possibilities. Join us on a transformative journey where engineering futures are redefined through seamless integration.
          </p>  


          <div className="grid grid-cols-2 mt-20 auto-rows-[450px] max-sm:auto-rows-[400px] mb-20 max-sm:grid-cols-1">
            
              <div className="tbox1 pt-24 pr-20 pl-20 bg-[#D9D9D9] max-lg:pl-10 max-lg:pr-10 max-lg:pt-12 max-sm:pl-5 max-sm:pr-5 max-sm:pt-6 ">
                <div className="font-playfair font-black text-2xl max-lg:text-xl">Project Management Training</div>
                <div className="mt-5 font-merriweather text-sm  text-[#00000099] leading-6">
                Welcome to Python Programming Training, where you'll master the art of coding with Python. Our courses cater to both beginners and experienced programmers, equipping you with the skills to develop applications, analyze data, and automate tasks. Unleash your coding potential and explore endless possibilities with Python.
                </div>
              </div>
              <div className="box1 max-sm:row-start-1 relative">
              <Image alt="image" src={`/assets/projectmgt.png`} fill  style={{ objectFit: 'cover' }}/>
              </div>

              <div className="box2 relative">
              <Image alt="image" src={`/assets/optlasers.jpeg`} fill  style={{ objectFit: 'cover' }}/>
              </div>

              <div className="tbox2 pt-24 pr-20 pl-20 bg-[#F5F7FA] max-lg:pl-10 max-lg:pr-10 max-lg:pt-12  max-sm:pl-5 max-sm:pr-5 max-sm:pt-6">
                <div className="font-playfair font-black text-2xl max-lg:text-xl">3D Printing Technology Training</div>
                <div className="mt-5 font-merriweather text-sm text-[#00000099] leading-6">
                Dive into the future with 3D Printing Technology Training. Discover the transformative world of additive manufacturing and bring your creative ideas to life. Our training covers the principles, techniques, and applications of 3D printing, opening new horizons in design and prototyping.
                </div>
              </div>

              <div className="tbox3 pt-24 pr-20 pl-20 bg-[#F5F7FA] max-lg:pl-10 max-lg:pr-10 max-lg:pt-12 max-sm:pl-5 max-sm:pr-5 max-sm:pt-6">
                <div className="font-playfair font-black text-2xl max-lg:text-xl">DFMEA Training</div>
                <div className="mt-5 font-merriweather text-sm text-[#00000099] leading-6">
                Precision in design is paramount, and DFMEA Training ensures you excel in it. Learn the systematic approach to identifying and mitigating design failures. Enhance product quality, minimize risks, and achieve design excellence with our comprehensive training.
                </div>
              </div>

              <div className="box3 max-sm:row-start-5 relative">
              <Image alt="image" src={`/assets/threepath.png`} fill  style={{ objectFit: 'cover' }}/>
              </div>

              <div className="box4 relative">
              <Image alt="image" src={`/assets/DOF.jpeg`} fill  style={{ objectFit: 'cover' }}/>
              </div>

              <div className="tbox4 pt-24 pr-20 pl-20 bg-[#F5F7FA] max-lg:pl-10 max-lg:pr-10 max-lg:pt-12  max-sm:pl-5 max-sm:pr-5 max-sm:pt-6">
                <div className="font-playfair font-black text-2xl max-lg:text-xl">GD&T Training</div>
                <div className="mt-2 font-merriweather text-sm text-[#00000099] leading-6">
                Welcome to GD&T Training, where precision meets clarity in engineering design. Our courses demystify GD&T, the language of engineers and designers. Learn to communicate design intent effectively, improve manufacturability, and elevate your engineering skills.
                </div>
              </div>

              <div className="tbox5 pt-24 pr-20 pl-20 bg-[#F5F7FA] max-lg:pl-10 max-lg:pr-10 max-lg:pt-12 max-sm:pl-5 max-sm:pr-5 max-sm:pt-6">
                <div className="font-playfair font-black text-2xl max-lg:text-xl">Reverse Engineering Training</div>
                <div className="mt-2 font-merriweather text-sm text-[#00000099] leading-6">
                Reverse engineering is the process of dismantling and analyzing existing systems, products, or technology to uncover their underlying principles. It's a method used to comprehend, modify, or recreate intricate structures, offering invaluable insights for innovation and problem-solving in engineering, design, and beyond. This practice opens doors to uncover hidden potential, reimagine solutions, and advance technology.
                </div>
              </div>

              <div className="box4 max-sm:row-start-9 relative">
              <Image alt="image" src={`/assets/rev.jpeg`} fill  style={{ objectFit: 'cover' }}/>
              </div>
             
          </div>

        </div>

      </div>
    </>
  );
}
