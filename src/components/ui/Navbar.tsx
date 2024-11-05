import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import CopyIcon from 'pixelarticons/svg/copy.svg?react'
import WalletIcon from 'pixelarticons/svg/wallet.svg?react'
import ChevronDownIcon from 'pixelarticons/svg/chevron-down.svg?react'
import ArrowRightBox from 'pixelarticons/svg/arrow-right-box.svg?react'

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: FC<LogoProps> = ({ src, alt }) => (
  <NavLink to="/">
    <img src={src} className="w-20 my-2" alt={alt} />
  </NavLink>
);

const NavLinks: FC = () => (
  <nav className="flex gap-4">
    <div className="flex flex-row-reverse gap-x-2 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out">    
      <NavLink to="#">Exchange</NavLink>
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-row-reverse gap-x-2 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out">
          <ChevronDownIcon className="w-4" /> Dropdown
        </div>      
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white rounded-none border-none shadow-black">
      <div className="flex gap-x-2">
        <DropdownMenuLabel>0x9876...ABCD</DropdownMenuLabel>
        <Button variant="ghost" size="icon"><CopyIcon className="w-4" /></Button>
      </div>
      <DropdownMenuSeparator />
      <DropdownMenuItem>1,843 DGN</DropdownMenuItem>
      <DropdownMenuItem>Sepolia</DropdownMenuItem>
      <DropdownMenuItem>Disconnect</DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
  </nav>
);

const WalletDropdown: FC<WalletDropdownProps> = ({ walletAddress }) => {
  // Copy function
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text); // Feedback in console
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
    };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-x-2 px-2 py-1 rounded-md hover:bg-gray-100 transition-colors duration-200 ease-in-out">
          <WalletIcon className="w-4" /> tricedesign.eth <ChevronDownIcon className="w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white rounded-none border-none shadow-black">
        <div className="flex gap-x-2">
          <DropdownMenuLabel>
            <Button variant="ghost" onClick={() => handleCopy(walletAddress)}>
              {walletAddress}
              <CopyIcon className="w-4" />
              <span className="sr-only">Copy address</span>
            </Button>
          </DropdownMenuLabel>
          {/* <Button variant="ghost" size="icon" onClick={() => handleCopy(walletAddress)}>
            <CopyIcon className="w-4" />
            <span className="sr-only">Copy address</span>
          </Button> */}
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>1,843 DGN</DropdownMenuItem>
        <DropdownMenuItem>Sepolia</DropdownMenuItem>
        <DropdownMenuItem><NavLink to="#" className="">Disconnect</NavLink></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navbar: FC = () => {
  const walletAddress = '0x9876...ABCD'; // Replace with dynamic data as needed
  return (
    <nav className="w-full bg-white h-12 container mx-auto flex items-center justify-between">
      <div className="flex w-full items-center justify-between">
        
        {/* Mobile sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <ArrowRightBox className="h-6 w-6" /> 
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-zinc-50">
            <div className="flex flex-col h-full">
              <Logo src="src/assets/degen-logo-default.svg" alt="DEGEN Logo" />
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop navigation */}
        <div className="hidden lg:flex w-full justify-between items-center px-4">
          <div className="flex gap-4 items-center">
            <Logo src="src/assets/degen-logo-default.svg" alt="DEGEN Logo" />
            <NavLinks />
          </div>
          <div className="flex gap-4 items-center">
            <WalletDropdown walletAddress={walletAddress} />
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;