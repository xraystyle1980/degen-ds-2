import React, { useState } from 'react';
import { Button } from '../button';
import CopyIcon from 'pixelarticons/svg/copy.svg?react'

interface CopyAddressButtonProps {
  walletAddress: string;
}

const CopyAddressButton: React.FC<CopyAddressButtonProps> = ({ walletAddress }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <Button
      variant="default"
      onClick={handleCopy}
      className="border-none shadow-none rounded-md w-full">
      {isCopied ? 'Copied' : <>{walletAddress} <CopyIcon className="w-4" aria-hidden="true" /></> }
      <span className="sr-only">Copy address</span>
    </Button>
  );
};

export default CopyAddressButton;