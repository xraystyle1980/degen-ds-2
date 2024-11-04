import { NavLink } from "react-router-dom"

import Icon from '@/components/Icon';
import HomeIcon from '@/assets/icons/react.svg?react'

// import MainTitle from "../assets/search.svg?react";


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


console.log(HomeIcon)

const Home = () => {
    return (
      <div>
        {/* <div className="my-4 py-4">
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
        </div> */}
        <div className="component-zone" id="component-zone">
          {/* Build components below 👇 */}

              <nav className="w-full bg-white h-12 container mx-auto flex items-center justify-between">
                <div className="flex w-full justify-between items-center">
                  <Sheet>
                    {/* Mobile sheet */}
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="lg:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-zinc-50">
                      <div className="flex flex-col h-full">
                        <div className="flex-grow">
                          <nav className="flex flex-col gap-4 mt-8">
                            <a href="#" className="block py-2 text-lg">Home</a>
                            <a href="#" className="block py-2 text-lg">Components</a>
                            <a href="#" className="block py-2 text-lg">About</a>
                            <a href="#" className="block py-2 text-lg">Contact</a>
                          </nav>
                        </div>
                        <div className="mt-auto">
                          <img src="src/assets/degen-logo-default.svg" className="w-20 my-2" alt="DEGEN Logo" />
                          <p className="text-sm">Degen Design System</p>
                          <p className="text-sm text-gray-400">version 1.0.1</p>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                  {/* Desktop-only content */}

                  <div className="hidden lg:flex w-full justify-between px-4">
                    <div className="h-12 flex justify-end">
                    <NavLink to="/">
                      <img src="src/assets/degen-logo-default.svg" className="w-20 my-2" alt="DEGEN Logo" />
                    </NavLink>
                    <NavLink to="#">
                      <Button variant="link">Exchange</Button>
                    </NavLink>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        {/* <YourIconComponent className="text-blue-500 h-8 w-8" /> */}
                        Dropdown Menu
                      </DropdownMenuTrigger>
                      <DropdownMenuContent style={{ borderRadius: '10px', padding: '1rem', backgroundColor: '#f0f0f0' }}>
                      <DropdownMenuLabel>Menu Label</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Menu Item</DropdownMenuItem>
                        <DropdownMenuItem>Menu Item</DropdownMenuItem>
                        <DropdownMenuItem>Menu Item</DropdownMenuItem>
                        <DropdownMenuItem>Menu Item</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <div><HomeIcon /> tricedesign.eth</div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                </div>
              </nav>
            
          {/* End component zone ☝️ */}
        </div>
      </div>
    );
  };
  
  export default Home;