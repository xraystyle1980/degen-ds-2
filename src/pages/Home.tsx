import { NavLink } from "react-router-dom"
import Icon from '@/components/ui/Icon'
import HomeIcon from '@/assets/icons/react.svg?react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Navbar from "@/components/ui/Navbar"

const Home = () => {
    return (
      <div>
        <div className="component-zone" id="component-zone"> {/* Build components below 👇 */}

          <Navbar />  

        </div> {/* End component zone ☝️ */}
        <div className="my-4 py-4">
            <h6 className="text-sm font-bold text-black font-nunitosans">Display</h6>
            <h1 className="display-5xl">H1 Degen Style Guide</h1>
            <h2 className="display-4xl">H2 Degen Style Guide</h2>
            <h3 className="display-3xl">H3 Degen Style Guide</h3>
            <h4 className="display-2xl-regular">H4 Degen Style Guide</h4>
            <h5 className="display-xl-regular">H5 Degen Style Guide</h5>
            <h6 className="display-lg-regular">H6 Degen Style Guide</h6>
            <h6 className="display-sm-regular">H6 Degen Style Guide</h6>
        </div>
        <div className="my-4 py-4">
            <h6 className="text-sm font-bold text-black font-nunitosans">Body</h6>
            <p className="font-pixeloid">Body Base Regular the fuzzy cat jumped over the chuffy dog</p>
        </div>
      </div>
    );
  };
  
  export default Home;