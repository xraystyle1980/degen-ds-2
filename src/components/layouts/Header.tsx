import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-zinc-100">
            <nav className="container mx-auto py-4 px-4 flex items-center justify-between">
                <div className="flex w-full justify-between items-center">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-zinc-50">
                            <div className="flex flex-col h-full">
                                <div className="flex-grow">
                                    <nav className="flex flex-col gap-4 mt-8">
                                        <a href="#" className="block py-2 text-lg">Home</a>
                                        <a href="#" className="block py-2 text-lg">Components</a>
                                        <a href="#" className="block py-2 text-lg">About</a>
                                        <a href="#" className="block py-2 text-lg">Contact</a>
                                    </nav>
                                </div>
                                <div className="mt-auto">
                                    <img src="src/assets/degen-logo-default.svg" className="w-20 my-2" alt="DEGEN Logo" />
                                    <p className="text-sm">Degen Design System</p>
                                    <p className="text-sm text-gray-400">version 1.0.1</p>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                    
                    {/* Content visible on all screen sizes */}
                    <div>
                        <div className="h-12 flex items-center">
                            <h1 className="text-3xl">Style Guide</h1>
                        </div>
                        <p className="font-pixeloid text-sm text-gray-400">Components and Style Guide</p>
                    </div>
                    
                    {/* Desktop-only content */}
                    <div className="hidden lg:block">
                        <div className="h-12 flex justify-end">
                            <img src="src/assets/degen-logo-default.svg" className="w-20 my-2" alt="DEGEN Logo" />
                        </div>
                        <p className="text-sm text-right">Degen Design System</p>
                        <p className="text-sm text-right text-gray-400">version 1.0.1</p>
                    </div>
                </div>
            </nav>
        </header>
    );
};