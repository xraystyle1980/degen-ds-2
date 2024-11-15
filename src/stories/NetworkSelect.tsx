import { FC } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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

export { NetworkSelect, networkOptions };