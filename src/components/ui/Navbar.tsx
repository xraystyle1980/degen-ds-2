import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import CopyIcon from 'pixelarticons/svg/copy.svg?react'
import AvatarIcon from 'pixelarticons/svg/avatar.svg?react'
import ChevronDownIcon from 'pixelarticons/svg/chevron-down.svg?react'
import MenuIcon from 'pixelarticons/svg/menu.svg?react'
import { Menu } from "lucide-react"
import React from 'react'


interface LogoProps {
  src: string;
  alt: string;
}

interface CustomDropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuItem> {
  children: React.ReactNode
}

const Logo: FC<LogoProps> = ({ src, alt }) => (
  <NavLink to="/" className="inline-flex items-center">
    <img src={src} className="w-24 h-6 my-2" alt={alt} />
  </NavLink>
);


const NavLinksDropdownMenu: FC = () => {
  const menuItems = [
    { label: "Menu Item One", route: "#" },
    { label: "Menu Item Two", route: "#" },
    { label: "Menu Item Three", route: "#" },
  ];
  return (
    <DropdownMenu>


      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-1 px-2 py-1 rounded-md hover:bg-zinc-100 transition-colors duration-200 ease-in-out">
          <span className="text-sm">Dropdown</span>
          <ChevronDownIcon className="w-4" />
        </div>
      </DropdownMenuTrigger>


      <DropdownMenuContent className="mt-2 p-2 bg-white shadow-gray-500 animate-fadeIn">
        
        <DropdownMenuLabel className="text-xs pl-1 font-nunitosans font-semibold uppercase text-zinc-500">Dropdown Links</DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-100" />

          {menuItems.map((item, index) => (
            <DropdownMenuItem key={index} className="text-sm px-2 py-2 transition-colors">
              <NavLink to={item.route} className="rounded-md transition-colors">
                {item.label}
              </NavLink>
            </DropdownMenuItem>
          ))}
          

      </DropdownMenuContent>


    </DropdownMenu>
  );
};


const NetworkLinksDropdownMenu: FC = () => {
  const networkItems = [
    { label: "Ethereum Mainnet", action: () => switchToNetwork("Ethereum Mainnet") },
    { label: "Base", action: () => switchToNetwork("Base") },
    { label: "Polygon", action: () => switchToNetwork("Polygon") },
    { label: "Sepolia", action: () => switchToNetwork("Sepolia") },
  ];
  const switchToNetwork = (networkName: string) => {
    console.log(`Switching to ${networkName}`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-1 px-0 py-0 rounded-md transition-colors">
          <span className="text-sm">Sepolia</span>
          <ChevronDownIcon className="w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white shadow-gray-500 animate-fadeIn">
        {networkItems.map((network, index) => (
          <DropdownMenuItem
            key={index}
            className="text-sm flex items-center gap-x-2 px-2 py-2 transition-colors"
            onClick={network.action}
          >
            <span className="rounded-md transition-colors">{network.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};


interface WalletDropdownMenuProps {
  walletAddress: string;
}


const WalletDropdownMenu: FC<WalletDropdownMenuProps> = ({ walletAddress }) => {
  const handleCopy = (text: string) => navigator.clipboard.writeText(text).then(() => console.log("Copied:", text));
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        <div className="flex items-center gap-x-1 px-2 py-1 rounded-md hover:bg-zinc-100 transition-colors duration-200 ease-in-out">
          <AvatarIcon className="w-4" />
          <span className="text-sm">tricedesign.eth</span>
          <ChevronDownIcon className="w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white rounded-none border-none shadow-gray-500 animate-fadeIn">    
        <section className="px-0 py-2 flex gap-x-1">
          <DropdownMenuLabel>
            <Button variant="outline" size="md" className="px-4 py-2" onClick={() => handleCopy(walletAddress)}>
              <span className="mr-1">{walletAddress}</span>
              <CopyIcon className="w-4" aria-hidden="true" />
              <span className="sr-only">Copy address</span>
            </Button>
          </DropdownMenuLabel>
        </section>
        <DropdownMenuSeparator className="bg-gray-100" />
        <section className="flex flex-col px-2 py-2" aria-labelledby="tokens">
          <DropdownMenuLabel className="text-xs pl-1 pt-1 font-nunitosans font-semibold uppercase text-zinc-500">DGEN Tokens</DropdownMenuLabel>
          <DropdownMenuItem className="text-sm flex items-center rounded-md">
            420,669 DGN
          </DropdownMenuItem>
        </section>
        <DropdownMenuSeparator className="bg-gray-100" />
        <section className="flex flex-col px-2" aria-labelledby="network">
          <DropdownMenuLabel className="text-xs pl-1 pt-2 font-nunitosans font-semibold uppercase text-zinc-500">Network</DropdownMenuLabel>

          <DropdownMenuItem className="rounded-md">
            <NetworkLinksDropdownMenu />
          </DropdownMenuItem>

        </section>
        <DropdownMenuSeparator className="bg-gray-100" />
        <section className="flex flex-col px-2 py-2" aria-labelledby="tokens">
          <DropdownMenuItem className="text-sm flex items-center gap-x-1 rounded-md">
            <NavLink to="#" className="text-sm transition-colors">Disconnect</NavLink>
          </DropdownMenuItem>
        </section>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};


const Navbar: FC = () => {
  const walletAddress = '0x9876...ABCD'; // Replace with dynamic data as needed
  return (
    <nav className="w-full bg-white h-18 container mx-auto flex items-center justify-between">
      <div className="flex w-full items-center justify-between">
        
        {/* Mobile sheet */}
        <Sheet>
          <SheetTrigger asChild className="absolute mx-1 cursor-pointer transition-colors rounded-md">
            <MenuIcon className="lg:hidden w-8" />
          </SheetTrigger>
          <div className="flex w-full justify-center lg:hidden">
            <Logo src="src/assets/degen-logo-dark.svg" alt="DEGEN Logo" />
          </div>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white shadow-gray-500">
            <div className="flex flex-col h-full py-6">
            
              <div className="flex flex-col h-full space-y-4 py-6">
                <div className="flex items-center px-2">
                  <Logo src="src/assets/degen-logo-dark.svg" alt="DEGEN Logo" />
                </div>
                <NavLink to="#" className="text-sm py-1 px-2 rounded-md transition-colors">
                  Menu Item
                </NavLink>
                <NavLinksDropdownMenu />
                <div className="w-full mt-auto">
                  <WalletDropdownMenu walletAddress={walletAddress} />
                </div>
              </div>

              <div className="mt-auto px-2">
                <img src="src/assets/degen-logo-default.svg" className="w-20 my-2" alt="DEGEN Logo" />
                <p className="text-sm">Degen Design System</p>
                <p className="text-sm text-gray-400">version 1.0.1</p>
              </div>

            </div>
          </SheetContent>
        </Sheet>


        {/* Desktop navigation */}
        <div className="hidden lg:flex w-full justify-between items-center px-4 py-2 bg-white shadow">
          <div className="flex gap-4 items-center">
            <Logo src="src/assets/degen-logo-dark.svg" alt="DEGEN Logo" />
            <NavLink to="#" className="text-sm px-2 py-1 rounded-md hover:bg-zinc-100 transition-colors">
              Menu Item
            </NavLink>
            <NavLinksDropdownMenu />
          </div>
          <div className="max-w-[220px]">
            <WalletDropdownMenu walletAddress={walletAddress} />
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;