// Icon.tsx
import React from 'react';

interface IconProps {
  src: React.FunctionComponent<React.SVGProps<SVGSVGElement>>; // SVG component imported with svgr
  size?: string;
  color?: string;
  additionalClasses?: string;
}

const Icon: React.FC<IconProps> = ({ src: SvgComponent, size = '8', color = 'text-blue-500', additionalClasses = '' }) => {
  return <SvgComponent className={`h-${size} w-${size} ${color} ${additionalClasses}`} />;
};

export default Icon;