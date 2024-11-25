import NavbarjustMobile from "@/components/ui/Navbar/NavbarjustMobile";
import Navbar from "@/components/ui/Navbar/Navbar"
import MyCodeComponent from "@/components/ui/MyCodeComponent";
// Icons from pixelarticons
import HiddenIcon from 'pixelarticons/svg/hidden.svg?react'


const Home = () => {
    return (
        <div>
          <div className="mb-6">
            <h6 className="text-xs my-2">Clone it</h6>
            <MyCodeComponent
              code={
                `git clone https://github.com/xraystyle1980/degen-ds-2`
              }
              language="tsx"
              showLineNumbers={false}
            />
          </div>
        <div className="component-zone" id="component-zone"> {/* Build components below 👇 */}
          <h6 className="text-xs my-2 md:hidden lg:block">Desktop</h6>
          <h6 className="text-xs my-2 lg:hidden text-gray-400 text-center">
            <div className="flex gap-2 justify-center align-center">
              <HiddenIcon className="w-4" /> Desktop Hidden
            </div>
          </h6>
          <h6 className="text-xs my-2 lg:hidden">Responsive</h6>
          <Navbar />  
          
          <div className="my-4 hidden lg:block">
            <h6 className="text-xs my-2">Responsive</h6>
            <NavbarjustMobile />
          </div>
          
        </div> {/* End component zone ☝️ */}
        <div className="my-4 py-4">
          <h6 className="text-xs my-2">Display</h6>
          <h1 className="display-5xl">H1 Degen Style Guide</h1>
          <h2 className="display-4xl">H2 Degen Style Guide</h2>
          <h3 className="display-3xl">H3 Degen Style Guide</h3>
          <h4 className="display-2xl-regular">H4 Degen Style Guide</h4>
          <h5 className="display-xl-regular">H5 Degen Style Guide</h5>
          <h6 className="display-lg-regular">H6 Degen Style Guide</h6>
          <h6 className="display-sm-regular">H6 Degen Style Guide</h6>
        </div>
        <div className="my-4 py-4">
          <h6 className="text-xs my-2">Body</h6>
          <p className="font-pixeloid">Body Base Regular the fuzzy cat jumped over the chuffy dog</p>
        </div>
      </div>
    );
  };
  
  export default Home;