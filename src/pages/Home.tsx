import NavbarjustMobile from "@/components/ui/Navbar/NavbarjustMobile";
import Navbar from "@/components/ui/Navbar/Navbar"

const Home = () => {
    return (
      <div>
        <div className="component-zone" id="component-zone"> {/* Build components below 👇 */}
          <h6 className="text-xs my-2">Desktop</h6>
          <Navbar />  
          
          <div className="my-4">
          <h6 className="text-xs my-2">Responsive</h6>
            <NavbarjustMobile />
          </div>
          <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-auto font-mono text-sm">
            {`<div>
              <h1>Hello, world!</h1>
              <p>This is a code snippet example.</p>
            </div>`}
          </pre>
          <div className="gist-embed">
            <script src="https://gist.github.com/xraystyle1980/c4c877d0acd700bb6423e66eab751ce1.js"></script>
          </div>
        </div> {/* End component zone ☝️ */}
        {/* <div className="my-4 py-4">
          <h6 className="text-sm font-bold text-black font-nunitosans">Display</h6>
          <h1 className="display-5xl">H1 Degen Style Guide</h1>
          <h2 className="display-4xl">H2 Degen Style Guide</h2>
          <h3 className="display-3xl">H3 Degen Style Guide</h3>
          <h4 className="display-2xl-regular">H4 Degen Style Guide</h4>
          <h5 className="display-xl-regular">H5 Degen Style Guide</h5>
          <h6 className="display-lg-regular">H6 Degen Style Guide</h6>
          <h6 className="display-sm-regular">H6 Degen Style Guide</h6>
        </div> */}
        <div className="my-4 py-4">
          <h6 className="text-sm font-bold text-black font-nunitosans">Body</h6>
          <p className="font-pixeloid">Body Base Regular the fuzzy cat jumped over the chuffy dog</p>
        </div>
      </div>
    );
  };
  
  export default Home;