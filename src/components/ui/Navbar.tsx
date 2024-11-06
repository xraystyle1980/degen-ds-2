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
        <div className="flex items-center gap-x-1 px-2 py-1 rounded-md transition-colors duration-200 ease-in-out hover:bg-accent">
          <span className="text-xs">Dropdown</span>
          <ChevronDownIcon className="w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white shadow-black animate-fadeIn">
        <DropdownMenuLabel className="text-xs">Dropdown Links</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-100" />
        {menuItems.map((item, index) => (
          <DropdownMenuItem key={index} className="text-xs px-2 py-1">
            <NavLink to={item.route} className="hover:bg-accent rounded-md">
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
        <div className="flex items-center gap-x-1 px-2 py-1 rounded-md transition-colors hover:bg-accent">
          <span className="text-xs">Sepolia</span>
          <ChevronDownIcon className="w-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-2 bg-white shadow-black animate-fadeIn">
        {networkItems.map((network, index) => (
          <DropdownMenuItem
            key={index}
            className="text-xs flex items-center gap-x-2 px-2 py-1"
            onClick={network.action}
          >
            <span className="hover:bg-accent rounded-md">{network.label}</span>
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
        <div className="flex items-center gap-x-1 px-2 py-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-accent">
          <AvatarIcon className="w-4" />
          <span className="text-xs">tricedesign.eth</span>
          <ChevronDownIcon className="w-4" />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mt-2 bg-white rounded-none border-none shadow-black animate-fadeIn">
    
        <section className="px-2 py-2 flex gap-x-1">
          <DropdownMenuLabel>
            <Button variant="outline" size="sm" onClick={() => handleCopy(walletAddress)}>
              <span className="mr-1">{walletAddress}</span>
              <CopyIcon className="w-4" aria-hidden="true" />
              <span className="sr-only">Copy address</span>
            </Button>
          </DropdownMenuLabel>
        </section>

        <DropdownMenuSeparator className="bg-gray-100" />

        <section className="flex flex-col px-2 py-2" aria-labelledby="tokens">
          <span id="tokens" className="text-xs font-nunitosans">Degen Tokens</span>
          <DropdownMenuItem className="text-xs flex items-center gap-x-1 rounded-md">
            420,669 DGN
          </DropdownMenuItem>
        </section>

        <DropdownMenuSeparator className="bg-gray-100" />

        <section className="flex flex-col px-2" aria-labelledby="network">
          <span id="network" className="text-xs font-nunitosans">Network</span>
          <DropdownMenuItem className="rounded-md">
            <NetworkLinksDropdownMenu />
          </DropdownMenuItem>
        </section>

        <DropdownMenuSeparator className="bg-gray-100" />

        <section className="flex flex-col px-2 py-2" aria-labelledby="tokens">
          <DropdownMenuItem className="text-xs flex items-center gap-x-1 rounded-md">
            <NavLink to="#" className="text-xs">Disconnect</NavLink>
          </DropdownMenuItem>
        </section>


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
        {/* Mobile sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <ArrowRightBox className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white shadow-lg">
            <div className="flex flex-col h-full space-y-4 px-4 py-6">
              
              <div className="flex justify-center items-center">
                <Logo src="src/assets/degen-logo-default.svg" alt="DEGEN Logo" className="h-8 w-auto" />
              </div>

              <NavLink
                to="#"
                className="text-xs font-semibold px-2 py-1 rounded-md hover:bg-accent transition-colors"
              >
                Menu Item
              </NavLink>

              <NavLinksDropdownMenu />

              <div className="w-full mt-auto">
                <WalletDropdownMenu walletAddress={walletAddress} />
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop navigation */}
        <div className="hidden lg:flex w-full justify-between items-center px-4 py-2 bg-white shadow">
          <div className="flex gap-4 items-center">
            <Logo src="src/assets/degen-logo-dark.svg" alt="DEGEN Logo" className="h-6 w-auto" />

            <NavLink
              to="#"
              className="text-xs hover:bg-accent px-2 py-1 rounded-md transition-colors"
            >
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