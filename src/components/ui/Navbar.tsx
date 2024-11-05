import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { SquareChevronRight } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import HomeIcon from '@/assets/icons/react.svg?react'
import WalletIcon from 'pixelarticons/svg/file.svg?react'
import ChevronDownIcon from 'pixelarticons/svg/file.svg?react'

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
    <NavLink to="#" className="block px-2">Exchange</NavLink>

    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex gap-x-2">
          <ChevronDownIcon className="SVG-current-color w-4" /> tricedesihjgn.eth
        </div>      
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white rounded-none border-none shadow-black">
      <div className="flex gap-x-2">
        <DropdownMenuLabel>0x9876...ABCD</DropdownMenuLabel>
        <Button variant="ghost" size="icon">Copy</Button>
      </div>
      <DropdownMenuSeparator />
      <DropdownMenuItem>1,843 DGN</DropdownMenuItem>
      <DropdownMenuItem>Sepolia</DropdownMenuItem>
      <DropdownMenuItem>Disconnect</DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
  </nav>
);

const WalletDropdown: FC = () => (
  <DropdownMenu>
    <DropdownMenuTrigger>
      <div className="flex gap-x-2">
        <WalletIcon className="SVG-current-color w-4" /> tricedesign.eth
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent className="mt-2 bg-white rounded-none border-none shadow-black">
      <div className="flex gap-x-2">
        <DropdownMenuLabel>0x9876...ABCD</DropdownMenuLabel>
        <Button variant="ghost" size="icon">Copy</Button>
      </div>
      <DropdownMenuSeparator />
      <DropdownMenuItem>1,843 DGN</DropdownMenuItem>
      <DropdownMenuItem>Sepolia</DropdownMenuItem>
      <DropdownMenuItem>Disconnect</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const Navbar: FC = () => (
  <nav className="w-full bg-white h-12 container mx-auto flex items-center justify-between">
    <div className="flex w-full items-center justify-between">
      
      {/* Mobile sheet */}
      {/* <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <SquareChevronRight className="h-6 w-6" /> 
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-zinc-50">
          <div className="flex flex-col h-full">
            <Logo src="src/assets/degen-logo-default.svg" alt="DEGEN Logo" />
            <NavLinks />
          </div>
        </SheetContent>
      </Sheet> */}

      {/* Desktop navigation */}
      <div className="hidden lg:flex w-full justify-between items-center px-4">
        <div className='flex gap-4 items-center'>
          <Logo src="src/assets/degen-logo-default.svg" alt="DEGEN Logo" />
          <NavLinks />
        </div>
        <div className='flex gap-4 items-center'>
          <WalletDropdown />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;