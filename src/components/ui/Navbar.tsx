import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

// Icons from pixelarticons
import CopyIcon from 'pixelarticons/svg/copy.svg?react'
import AvatarIcon from 'pixelarticons/svg/avatar.svg?react'
import ChevronDownIcon from 'pixelarticons/svg/chevron-down.svg?react'
import ArrowRightBox from 'pixelarticons/svg/arrow-right-box.svg?react'


interface LogoProps {
  src: string;
  alt: string;
  className?: string; // Add className as an optional prop
};

interface WalletMenuProps {
  walletAddress: string;
};

interface NetworkSelectProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  onChange: (value: string) => void;
}

const networkOptions = [
  { value: 'Mainnet', label: 'Mainnet' },
  { value: 'Polygon', label: 'Polygon' },
  { value: 'Sepolia', label: 'Sepolia' },
  { value: 'Base', label: 'Base' },
];

const handleNetworkChange = (value: string) => {
  console.log(`Selected network: ${value}`);
};

const Logo: FC<LogoProps> = ({ src, alt }) => (
  <NavLink to="/" className="inline-flex items-center">
    <img src={src} className="max-w-[120px]" alt={alt} />
  </NavLink>
);

const TokenBalance: FC<{ balance?: string }> = ({ balance = "failed to load balance" }) => (
    <span className="text-md">{balance}</span>
);

const NavLinks: FC = () => {
  const menuItems: { label: string; route: string }[] = [
    { label: "Menu Item One", route: "#" },
    { label: "Menu Item Two", route: "#" },
    { label: "Menu Item Three", route: "#" },
  ];
  return (
    <ul className="flex flex-col gap-1">
      {menuItems.map((item) => (
        <li key={item.route}>
          <NavLink className="text-sm" to={item.route}>
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const WalletMenuCopyButton: FC<WalletMenuProps> = ({ walletAddress }) => {
  const AddressCopyButton: FC = () => {
    return (
      <Button variant="outline" className='py-6' onClick={() => handleCopy(walletAddress)}>
        <span className="mr-1">{walletAddress}</span>
        <CopyIcon className="w-4" aria-hidden="true" />
        <span className="sr-only">Copy address</span>
      </Button>
    );
  };
  const handleCopy = (text: string) => 
    navigator.clipboard.writeText(text).then(() => 
      console.log("Copied:", text));
  return (
    <AddressCopyButton />
  );
};

const NavbarLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <NavLink className="text-sm" to={to}>
    {children}
  </NavLink>
);

const NetworkSelect: FC<NetworkSelectProps> = ({ options, placeholder = 'Select network', onChange }) => {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger className="w-full rounded-md border border-gray-200 shadow-sm">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value} className="py-2">
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const Navbar: FC = () => {
  const walletAddress = '0x9876...ABCD'; // Replace with dynamic data as needed
  return (
    <nav className="w-full bg-white h-18 container mx-auto flex items-center justify-between">
      <div className="flex w-full items-center justify-between">

{/* Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <ArrowRightBox className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-white shadow-lg p-1">
            <div className="flex flex-col h-full space-y-4 px-2 py-6">
              <div className="flex items-center">
                <Logo src="src/assets/degen-logo-dark.svg" alt="DEGEN Logo" className="h-2" />
              </div>
              <div className='rounded-lg px-4 py-4 border-neutral-950 border-2 border-solid'>
                <NavbarLink to="#">About</NavbarLink> 
              </div>
              <div className='rounded-lg px-4 py-4 border-neutral-950 border-2 border-solid'>
                <NavbarLink to="#">Contact</NavbarLink> 
              </div>
              <Accordion className='rounded-lg px-4 border-neutral-950 border-2 border-solid' type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className='text-md'>Mobile Accordion</AccordionTrigger>
                  <AccordionContent>
                    <NavLinks /> 
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Accordion className='rounded-lg px-0 border-neutral-950 border-2 border-solid' type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className='text-md px-4'>user-wallet.ens</AccordionTrigger>
                  <AccordionContent>
                    <section className="flex flex-col px-4 py-4" aria-labelledby="Wallet Address Copy">
                      <WalletMenuCopyButton walletAddress={walletAddress} /> 
                    </section>
                    <Separator className="bg-black" />
                    <section className="flex flex-col px-4 py-4" aria-labelledby="Token Balance">
                      <span className="text-xs font-nunitosans py-2 text-gray-500 uppercase">Degen Tokens</span>
                      <TokenBalance balance="420,669 DGN" />
                    </section>
                    <Separator className="bg-black" />
                    <section className="flex flex-col px-4 py-4" aria-labelledby="Select Network">
                      <span className="text-xs font-nunitosans py-2 text-gray-500 uppercase">Network</span>
                      <NetworkSelect options={networkOptions} placeholder="Select a network" onChange={handleNetworkChange} />
                    </section>
                    <Separator className="bg-black" />
                    <section className="flex flex-col px-4 pt-4" aria-labelledby="Disconnect">
                      <NavbarLink to="#">Disconnect</NavbarLink>
                    </section>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>


{/* Desktop Navs */}
        <div className="hidden lg:flex w-full items-center p-2 bg-red-900 shadow">
          <div className="flex gap-4 items-center bg-yellow-400 w-full h-14">
            <Logo src="src/assets/degen-logo-dark.svg" alt="DEGEN Logo" className="h-6 w-auto" />
{/* About */}
            <div className='bg-yellow-300 flex items-center gap-x-1 px-2 py-2 rounded-md'>
              <NavbarLink to="#">About</NavbarLink> 
            </div>
{/* Developers */}
            <div className='bg-yellow-300 flex items-center gap-x-1 px-2 py-2 rounded-md'>
              <NavbarLink to="#">Developers</NavbarLink> 
            </div>

{/* Product */}
            <DropdownMenu>
              <DropdownMenuTrigger className='flex'>
                <div className='bg-yellow-300 flex items-center gap-x-1 px-2 py-2 rounded-md'>
                  <span className='whitespace-nowrap text-sm'>Marketplace</span> <ChevronDownIcon className="w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 bg-white shadow-black animate-fadeIn">
                <DropdownMenuItem className='focus:bg-white'>
                  <NavLinks />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Developers */}
            <div className='bg-yellow-300 flex items-center gap-x-1 px-2 py-2 rounded-md'>
              <NavbarLink to="#">Developers</NavbarLink> 
            </div>
          </div>
{/* Wallet */}
            <DropdownMenu>
              <DropdownMenuTrigger className="">
                <section className="flex bg-yellow-500 h-14 py-2" aria-labelledby="User Wallet Menu">
                  <div className="bg-yellow-300 flex items-center gap-x-1 px-2 py-2 rounded-md transition-colors duration-200 ease-in-out hover:bg-accent">
                    <AvatarIcon className="w-4" />
                    <span className='whitespace-nowrap text-sm'>user-wallet.ens</span>
                    <ChevronDownIcon className="w-4" />
                  </div>
                </section>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 bg-white rounded-none border-none shadow-black animate-fadeIn">
                <section className="px-2 py-2 flex gap-x-1" aria-labelledby="Wallet Address Copy">
                  <DropdownMenuLabel>
                    <WalletMenuCopyButton walletAddress={walletAddress} />
                  </DropdownMenuLabel>
                </section>
                <DropdownMenuSeparator className="bg-gray-100" />
                <section className="flex flex-col px-2 py-2" aria-labelledby="Token Balance">
                  <span className="text-xs font-nunitosans">Degen Tokens</span>
                  <DropdownMenuItem className="flex items-center gap-x-1 rounded-md">
                    <TokenBalance balance="420,669 DGN" />
                  </DropdownMenuItem>
                </section>
                <DropdownMenuSeparator className="bg-gray-100" />
                <section className="flex flex-col px-2" aria-labelledby="Select Network">
                  <span className="text-xs font-nunitosans">Network</span>
                  <NetworkSelect options={networkOptions} placeholder="Select a network" onChange={handleNetworkChange} />
                </section>
                <DropdownMenuSeparator className="bg-gray-100" />
                <section className="flex flex-col px-2 py-2" aria-labelledby="Disconnect">
                  <DropdownMenuItem>
                    <NavbarLink to="#">Disconnect</NavbarLink>
                  </DropdownMenuItem>
                </section>
              </DropdownMenuContent>
            </DropdownMenu>

        </div>
      </div>
    </nav>
  );
};


export default Navbar;