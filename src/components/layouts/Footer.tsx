import NyanCat from '@/assets/icons/nyan-cat.svg?react'
import TDLogoMark from '@/assets/td-logomark.svg?react'

export const Footer = () => {
    return (

      <footer className="border-t bg-White--2">
        <div className="container mx-auto py-4 px-4">

          <div className='flex justify-between'>
            <div className="text-xs text-gray-400 flex flex-row items-center justify-center">
              Powered by <NyanCat className="w-9 mx-1" />
              {/* Nyan Cat by Sem Schilder from <a href="https://thenounproject.com/browse/icons/term/nyan-cat/" target="_blank" title="Nyan Cat Icons">Noun Project</a> (CC BY 3.0) */}
            </div>
            <div>
              <TDLogoMark />
            </div>
          </div>
        </div>
      </footer>

    );
};