// YourIconComponent.tsx
import React from 'react';
// import { ReactComponent as Icon } from './icon.svg';

import { ReactComponent as Icon } from '@/assets/*.svg';

interface IconProps {
  size?: string;
  color?: string;
  additionalClasses?: string;
}

const YourIconComponent: React.FC<IconProps> = ({ size = '8', color = 'text-blue-500', additionalClasses = '' }) => {
  return (
    <Icon className={`h-${size} w-${size} ${color} ${additionalClasses}`} />
  );
};

export default YourIconComponent;