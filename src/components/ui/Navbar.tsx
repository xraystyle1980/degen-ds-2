import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import DegenLogo from '@/assets/degen-logo-dark.svg?react'
// Icons from pixelarticons
import CopyIcon from 'pixelarticons/svg/copy.svg?react'
import AvatarIcon from 'pixelarticons/svg/avatar.svg?react'
import ChevronDownIcon from 'pixelarticons/svg/chevron-down.svg?react'
import Menu from 'pixelarticons/svg/menu.svg?react'


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
const TokenBalance: FC<{ balance?: string }> = ({ balance = "failed to load balance" }) => (
    <span>{balance}</span>
);
const ProductLinks: FC = () => {
  const menuItems: { label: string; route: string }[] = [
    { label: "Menu Item One", route: "#" },
    { label: "Menu Item Two", route: "#" },
    { label: "Menu Item Three", route: "#" },
  ];
  return (
    <ul className="flex flex-col gap-1">
      {menuItems.map((item) => (
        <li key={item.route} className='degen-nav-wrapper'>
          <NavbarLink to={item.route}>
            {item.label}
          </NavbarLink>
        </li>
      ))}
    </ul>
  );
};
const WalletMenuCopyButton: FC<WalletMenuProps> = ({ walletAddress }) => {
  const AddressCopyButton: FC = () => {
    return (
      <Button variant="default" className='border-none shadow-none rounded-md w-full' onClick={() => handleCopy(walletAddress)}>
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
  <NavLink className="degen-nav-normalize flex-grow" to={to}>
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
          <SelectItem key={option.value} value={option.value} className="degen-nav-wrapper">
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
    <nav className="w-full container mx-auto flex items-center justify-between px-2 bg-white rounded-xl">
      <div className="flex w-full items-center justify-between">


{/* Mobile Navs */}
        <Sheet>
          <SheetTrigger asChild className='lg:hidden'>
            <div className='pl-1 m-2 hover:bg-gray-100 transition-colors rounded-md cursor-pointer'>
              <Menu className="degen-nav-wrapper w-8 lg:hidden" />
              <span className="sr-only">Toggle menu</span>
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="degen-sheet w-[300px] bg-white shadow-lg p-1">
            <div className="flex flex-col h-full px-0 py-6">
              <div className="flex w-full items-center">
                <DegenLogo />
              </div>
              <div className="flex flex-col h-full justify-center">
                <Separator className="bg-gray-200" />
{/* About */}
                <div className='degen-nav-sidebar degen-nav-sidebar-vert-rhythm'>
                  <NavbarLink to="#">About</NavbarLink> 
                </div>
                <Separator className="bg-gray-200" />
{/* Developers */}
                <div className='degen-nav-sidebar degen-nav-sidebar-vert-rhythm'>
                  <NavbarLink to="#">Developers</NavbarLink> 
                </div>
                <Separator className="bg-gray-200" />
{/* Product */}
                <Accordion className='w-full' type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className='degen-nav-sidebar !no-underline px-2 text-lg'>
                      <span>Product</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ProductLinks /> 
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Separator className="bg-gray-200" />
{/* Contact */}
                <div className='degen-nav-sidebar degen-nav-sidebar-vert-rhythm'>
                  <NavbarLink to="#">Contact</NavbarLink> 
                </div>
                <Separator className="bg-gray-200" />
              </div>
              <section className="" aria-labelledby="User Wallet Menu">
              <Separator className="bg-gray-200" />
{/* Wallet */}
                <div className="flex items-center gap-1 py-3 px-2">
                  <AvatarIcon className="w-4" />
                  <span>user-wallet.ens</span>
                </div>
                <section className="px-2 p-2 flex gap-x-1" aria-labelledby="Wallet Address Copy">
                  <WalletMenuCopyButton walletAddress={walletAddress} />
                </section>
                <section className="flex flex-row px-2 pb-2 justify-center" aria-labelledby="Token Balance">
                  <div className="text-xs">
                    Balance <TokenBalance balance="420,669 DGN" />
                  </div>
                </section>
                <Separator className="bg-gray-200" />
                <section className="flex flex-col px-2 py-4 gap-1" aria-labelledby="Select Network">
                  <span className="text-xs">Network</span>
                  <NetworkSelect options={networkOptions} placeholder="Select a network" onChange={handleNetworkChange} />
                </section>
                <Separator className="bg-gray-200" />
                <section className="flex flex-col px-2 py-2" aria-labelledby="Disconnect">
                  <Button variant="ghost" className='degen-nav-wrapper'>
                    Disconnect<span className="sr-only">Disconnect</span>
                  </Button>
                </section>
              </section>
            </div>
          </SheetContent>
        </Sheet>


{/* Desktop Navs */}
        <div className="hidden lg:flex w-full items-center p-2">
          <div className="flex gap-4 items-center w-full h-14">
            <DegenLogo className="" />
{/* About */}
            <div className='degen-nav-wrapper'>
              <NavbarLink to="#">About</NavbarLink> 
            </div>
{/* Developers */}
            <div className='degen-nav-wrapper'>
              <NavbarLink to="#">Developers</NavbarLink> 
            </div>
{/* Product */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="degen-nav-wrapper degen-nav-normalize">
                  <span>Product</span>
                  <ChevronDownIcon className="w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 rounded-lg bg-white shadow-black animate-fadeIn">
                <DropdownMenuItem className='focus:bg-white'>
                  <ProductLinks />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
{/* Contact */}
            <div className='degen-nav-wrapper'>
              <NavbarLink to="#">Contact</NavbarLink> 
            </div>
          </div>
{/* Wallet */}
            <DropdownMenu>
              <DropdownMenuTrigger className="">
                <section className="" aria-labelledby="User Wallet Menu">
                  <div className="degen-nav-wrapper degen-nav-normalize">
                    <AvatarIcon className="w-4" />
                    <span>user-wallet.ens</span>
                    <ChevronDownIcon className="w-4" />
                  </div>
                </section>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 rounded-lg bg-white border-none shadow-black animate-fadeIn">
                <section className="px-2 p-2 flex gap-x-1" aria-labelledby="Wallet Address Copy">
                  <WalletMenuCopyButton walletAddress={walletAddress} />
                </section>
                <section className="flex flex-row px-2 pb-2 justify-center" aria-labelledby="Token Balance">
                  <div className="text-xs">
                    Balance <TokenBalance balance="420,669 DGN" />
                  </div>
                </section>
                <DropdownMenuSeparator className="bg-gray-200" />
                <section className="flex flex-col px-2 py-3" aria-labelledby="Select Network">
                  <span className="text-xs font-nunitosans">Network</span>
                  <NetworkSelect options={networkOptions} placeholder="Sepolia" onChange={handleNetworkChange} />
                </section>
                <DropdownMenuSeparator className="bg-gray-200" />
                <section className="flex flex-col px-2 py-2" aria-labelledby="Disconnect">
                  <Button variant="ghost" className='degen-nav-wrapper p-1'>
                    Disconnect<span className="sr-only">Disconnect</span>
                  </Button>
                </section>
              </DropdownMenuContent>
            </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;