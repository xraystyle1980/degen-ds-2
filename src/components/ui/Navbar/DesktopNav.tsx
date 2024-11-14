import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import CopyAddressButton from './CopyAddressButton';
import ProductLinks from './ProductLinks';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { NetworkSelect } from './NetworkSelect';
import DegenLogo from '@/assets/degen-logo-dark.svg?react'
// Icons from pixelarticons
import AvatarIcon from 'pixelarticons/svg/avatar.svg?react'
import ChevronDownIcon from 'pixelarticons/svg/chevron-down.svg?react'

const TokenBalance: FC<{ balance?: string }> = ({ balance = "failed to load balance" }) => (
  <span>{balance}</span>
);

interface DesktopNavProps {
  walletAddress: string;
  networkOptions: { value: string; label: string }[];
  handleNetworkChange: (value: string) => void;
}

const DesktopNav: FC<DesktopNavProps> = ({ walletAddress, networkOptions, handleNetworkChange }) => {
  return (
    <div className="hidden lg:flex w-full items-center p-2">
      <div className="flex gap-4 items-center w-full h-14">
        <DegenLogo className="" />

{/* About */}
        <div className="degen-nav-wrapper">
          <NavLink className="degen-nav-normalize flex-grow" to="#">About</NavLink>
        </div>

{/* Developers */}
        <div className="degen-nav-wrapper">
          <NavLink className="degen-nav-normalize flex-grow" to="#">Developers</NavLink>
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
            <DropdownMenuItem className="focus:bg-white">
              <ProductLinks />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

{/* Contact */}
        <div className="degen-nav-wrapper">
          <NavLink className="degen-nav-normalize flex-grow" to="#">Contact</NavLink>
        </div>
      </div>

{/* Wallet Section */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <section aria-labelledby="User Wallet Menu">
            <div className="degen-nav-wrapper degen-nav-normalize">
              <AvatarIcon className="w-4" />
              <span>user-wallet.ens</span>
              <ChevronDownIcon className="w-4" />
            </div>
          </section>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 rounded-lg bg-white border-none shadow-black animate-fadeIn">
          <section className="px-2 p-2 flex gap-x-1" aria-labelledby="Wallet Address Copy">
            <CopyAddressButton walletAddress={walletAddress} />
          </section>

{/* Token Balance */}
          <section className="flex flex-row px-2 pb-2 justify-center" aria-labelledby="Token Balance">
            <div className="text-xs">
              Balance <TokenBalance balance="420,669 DGN" />
            </div>
          </section>

          <DropdownMenuSeparator className="bg-gray-200" />

{/* Network Selection */}
          <section className="flex flex-col px-2 py-3" aria-labelledby="Select Network">
            <span className="text-xs font-nunitosans">Network</span>
            <NetworkSelect options={networkOptions} onChange={handleNetworkChange} />
          </section>

          <DropdownMenuSeparator className="bg-gray-200" />

{/* Disconnect */}
          <section className="flex flex-col px-2 py-2" aria-labelledby="Disconnect">
            <Button variant="ghost" className="degen-nav-wrapper p-1">
              Disconnect
              <span className="sr-only">Disconnect</span>
            </Button>
          </section>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DesktopNav;