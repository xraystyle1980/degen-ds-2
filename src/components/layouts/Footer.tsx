import NyanCat from '@/assets/icons/nyan-cat.svg?react'
import TDLogoMark from '@/assets/td-logomark.svg?react'

export const Footer = () => {
    return (

      <footer className="border-t bg-White--2">
        <div className="container mx-auto py-4 px-4">

          <div className='flex justify-between'>
            <div className="text-sm text-Neutral-0 flex flex-row items-center justify-center">
              Powered by <NyanCat className="w-9 mx-1" />
            </div>
            <div>
              <TDLogoMark />
            </div>
          </div>
        </div>
      </footer>

    );
};