import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import CopyIcon from 'pixelarticons/svg/copy.svg?react'
import AvatarIcon from 'pixelarticons/svg/avatar.svg?react'
import ChevronDownIcon from 'pixelarticons/svg/chevron-down.svg?react'
import ArrowRightBox from 'pixelarticons/svg/arrow-right-box.svg?react'

interface LogoProps {
  src: string;
  alt: string;
}

const Logo: FC<LogoProps> = ({ src, alt }) => (
  <NavLink to="/">
    <img src={src} className="w-24 my-2" alt={alt} />
  </NavLink>
);

const NavLinks: FC = () => (
  <nav className="flex gap-4">
    <div className="flex flex-row-reverse px-2 py-1 rounded-md transition-colors duration-200 ease-in-out hover:bg-accent">    
      <NavLink to="#" className="text-xs">Menu Item</NavLink>
    </div>
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-row-reverse gap-x-1 px-2 py-1 rounded-md transition-colors duration-200 ease-in-out hover:bg-accent">
          <ChevronDownIcon className="w-4" /><span className="text-xs">Dropdown</span>
        </div>      
      </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 bg-white rounded-none border-none shadow-black">
          <DropdownMenuLabel className="text-xs">Dropdown Links</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <NavLink to="#" className="text-xs">Menu Item One</NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavLink to="#" className="text-xs">Menu Item Two</NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <NavLink to="#" className="text-xs">Menu Item Three</NavLink>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
);

const NetworkLinks: FC = () => (
  <nav className="flex gap-4">
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex flex-row-reverse gap-x-1 px-2 rounded-md transition-colors duration-200 ease-in-out">
          <ChevronDownIcon className="w-4" /><span className="text-xs">Sepolia</span>
        </div>      
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white rounded-none border-none shadow-black">
        <DropdownMenuItem>
          <NavLink to="#" className="text-xs">Ethereum Mainnet</NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to="#" className="text-xs">Base</NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to="#" className="text-xs">Polygon</NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink to="#" className="text-xs">Sepolia</NavLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
);

const WalletDropdown: FC<WalletDropdownProps> = ({ walletAddress }) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Copied to clipboard:", text);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-x-1 px-2 py-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-accent">
          <AvatarIcon className="w-4" /><span className="text-xs">tricedesign.eth</span> <ChevronDownIcon className="w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white rounded-none border-none shadow-black">
        <div className="flex gap-x-1">
          <DropdownMenuLabel>
            <Button variant="outline" size="sm" onClick={() => handleCopy(walletAddress)}>
              {walletAddress}
              <CopyIcon className="w-4" />
              <span className="sr-only">Copy address</span>
            </Button>
          </DropdownMenuLabel>
        </div>
        <DropdownMenuSeparator className="bg-gray-100" />
        <div className="flex flex-col px-2 py-2">
          <span className="text-xs font-nunitosans">Degen Tokens</span>
          <DropdownMenuItem className="text-xs">420,669 DGN</DropdownMenuItem>
        </div>
        <DropdownMenuSeparator className="bg-gray-100" />
        <div className="flex flex-col px-2">
            <span className="text-xs font-nunitosans">Network</span>
            </div>
        <DropdownMenuItem>
          <NetworkLinks />
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-100" />
        <DropdownMenuItem>
          <NavLink to="#" className="text-xs">Disconnect</NavLink>
        </DropdownMenuItem>
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
            <Logo src="src/assets/degen-logo-dark.svg" alt="DEGEN Logo" />
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