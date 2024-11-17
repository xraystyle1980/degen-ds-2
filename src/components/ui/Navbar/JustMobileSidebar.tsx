// MobileSidebar.tsx

import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import AvatarIcon from 'pixelarticons/svg/avatar.svg?react'
import CopyAddressButton from './CopyAddressButton';
import { NetworkSelect } from './NetworkSelect';
import ProductLinks from './ProductLinks';
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

import DegenLogo from '@/assets/degen-logo-dark.svg?react'

import Menu from 'pixelarticons/svg/menu.svg?react'

const TokenBalance: FC<{ balance?: string }> = ({ balance = "failed to load balance" }) => (
    <span>{balance}</span>
);

interface MobileSidebarProps {
  walletAddress: string;
  networkOptions: { value: string; label: string }[];
  handleNetworkChange: (value: string) => void;
}

const MobileSidebar: FC<MobileSidebarProps> = ({ walletAddress, networkOptions, handleNetworkChange }) => {
  return (

<div id="mockup-device" className="rounded-lg overflow-hidden">
      {/* Mockup Content */}
    
    
    <Sheet>
      <SheetTrigger asChild>
        <div className="pl-1 m-2 hover:bg-gray-100 transition-colors rounded-md cursor-pointer">
          <Menu className="degen-nav-wrapper w-8" />
          <span className="sr-only">Toggle menu</span>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="absolute degen-sheet w-[300px] bg-white shadow-lg p-1">

     
    
        <div className="flex flex-col h-full px-0 py-6">
          <div className="flex w-full items-center">
            <DegenLogo />
          </div>
          <div className="flex flex-col h-full justify-center">
            <Separator className="bg-gray-200" />

            {/* About */}
            <div className="degen-nav-sidebar degen-nav-sidebar-vert-rhythm">
              <NavLink className="degen-nav-normalize flex-grow" to="#">
                About
              </NavLink>
            </div>
            <Separator className="bg-gray-200" />

            {/* Developers */}
            <div className="degen-nav-sidebar degen-nav-sidebar-vert-rhythm">
              <NavLink className="degen-nav-normalize flex-grow" to="#">
                Developers
              </NavLink>
            </div>
            <Separator className="bg-gray-200" />

            {/* Product */}
            <Accordion className="w-full" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="degen-nav-sidebar !no-underline px-2 text-lg">
                  <span>Product</span>
                </AccordionTrigger>
                <AccordionContent>
                  <ProductLinks />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Separator className="bg-gray-200" />

            {/* Contact */}
            <div className="degen-nav-sidebar degen-nav-sidebar-vert-rhythm">
              <NavLink className="degen-nav-normalize flex-grow" to="#">
                Contact
              </NavLink>
            </div>
            <Separator className="bg-gray-200" />
          </div>

          {/* Wallet Section */}
          <section className="" aria-labelledby="User Wallet Menu">
            <Separator className="bg-gray-200" />

            <div className="flex items-center gap-1 py-3 px-2">
              <AvatarIcon className="w-4" />
              <span>user-wallet.ens</span>
            </div>

            <section className="px-2 p-2 flex gap-x-1" aria-labelledby="Wallet Address Copy">
              <CopyAddressButton walletAddress={walletAddress} />
            </section>

            <section className="flex flex-row px-2 pb-2 justify-center" aria-labelledby="Token Balance">
              <div className="text-xs">
                Balance <TokenBalance balance="420,669 DGN" />
              </div>
            </section>

            <Separator className="bg-gray-200" />

            {/* Network Selection */}
            <section className="flex flex-col px-2 py-4 gap-1" aria-labelledby="Select Network">
              <span className="text-xs">Network</span>
              <NetworkSelect options={networkOptions} onChange={handleNetworkChange} />
            </section>

            <Separator className="bg-gray-200" />

            {/* Disconnect */}
            <section className="flex flex-col px-2 py-2" aria-labelledby="Disconnect">
              <Button variant="ghost" className="degen-nav-wrapper">
                Disconnect
                <span className="sr-only">Disconnect</span>
              </Button>
            </section>
          </section>
        </div>
      </SheetContent>
    </Sheet>
    </div>
  );
};

export default MobileSidebar;