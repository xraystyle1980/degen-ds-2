import DegenLogo from '@/assets/degen-logo-dark.svg?react'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-White--2">
      <nav className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex w-full justify-between items-center">
          
          {/* Content visible on all screen sizes */}
          <div>
            <div className="h-12 flex items-center">
              <h1 className="text-3xl">Component Zone</h1>
            </div>
            <p className="font-pixeloid text-sm text-gray-400">Patterns and Style Guide</p>
          </div>
          
          {/* Desktop-only content */}
          <div className="hidden lg:block">
            <div className="h-12 flex justify-end">
              <DegenLogo className="w-20 my-2" />
            </div>
            <p className="text-sm text-right">Degen Design System</p>
            <p className="text-sm text-right text-gray-400">version 1.0.1</p>
          </div>
        </div>
      </nav>
    </header>
  );
};