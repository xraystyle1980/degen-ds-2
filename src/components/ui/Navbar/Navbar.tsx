import { FC } from 'react'
import MobileSidebar from './MobileSidebar'
import DesktopNav from './DesktopNav'


const Navbar: FC = () => {
  const walletAddress = '0x9876...ABCD';
  const networkOptions = [
    { value: 'Mainnet', label: 'Mainnet' },
    { value: 'Polygon', label: 'Polygon' },
    { value: 'Sepolia', label: 'Sepolia' },
    { value: 'Base', label: 'Base' },
  ];
  const handleNetworkChange = (value: string) => {
    console.log(`Selected network: ${value}`);
  };
  return (
    <nav className="w-full container mx-auto flex items-center justify-between px-2 bg-white rounded-xl">
      <div className="flex w-full items-center justify-between">
        <MobileSidebar
          walletAddress={walletAddress}
          networkOptions={networkOptions}
          handleNetworkChange={handleNetworkChange}
        />
        <DesktopNav
          walletAddress={walletAddress}
          networkOptions={networkOptions}
          handleNetworkChange={handleNetworkChange}
        />
      </div>
    </nav>
  );
};


export default Navbar;