import { NavLink } from "react-router-dom"
// import YourIconComponent from './YourIconComponent'

import YourIconComponent from '../components/button-demo'

import Icon from '@/components/Icon';
import { ReactComponent as HomeIcon } from '@/assets/react.svg';
// import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]



const Home = () => {
    return (
      <div>
        <div className="my-4 py-4">
            <h6 className="text-sm font-bold text-black font-nunitosans">Display</h6>
            <h1 className="display-5xl">H1 Degen Style Guide</h1>
            <h2 className="display-4xl">H2 Degen Style Guide</h2>
            <h3 className="display-3xl">H3 Degen Style Guide</h3>
            <h4 className="display-2xl-regular">H4 Degen Style Guide</h4>
            <h5 className="display-xl-regular">H5 Degen Style Guide</h5>
            <h6 className="display-lg-regular">H6 Degen Style Guide</h6>
            <h6 className="display-sm-regular">H6 Degen Style Guide</h6>
        </div>
        <div className="my-4 py-4">
            <h6 className="text-sm font-bold text-black font-nunitosans">Body</h6>
            <p className="font-pixeloid">Body Base Regular the fuzzy cat jumped over the chuffy dog</p>
        </div>
        <div className="component-zone">
        {/* Build components below 👇 */}

          <header className="sticky top-0 z-50 w-full bg-zinc-100">
            <nav className="container mx-auto flex items-center justify-between">
              <div className="flex w-full justify-between items-center">
                <Sheet>
                  {/* Mobile sheet */}
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
                {/* Desktop-only content */}
                <div className="hidden lg:flex w-full justify-between">
                  <div className="h-12 flex justify-end">
                  
                    <NavigationMenu style={
                      {
                        width: '100%',
                        background: 'red'
                      }}>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuLink asChild>
                            <NavLink to="/">
                              <img src="src/assets/degen-logo-default.svg" className="w-20 my-2" alt="DEGEN Logo" />
                            </NavLink>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <a
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                    href="/"
                                  >    
                                    <div className="mb-2 mt-4 text-lg font-medium">
                                      Title
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                      Little paragraph about something.
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              </li>
                              <NavLink to="#" title="Link">
                                Link One
                              </NavLink>
                              <NavLink to="#" title="Link title">
                                Link Two
                              </NavLink>
                              <NavLink to="#" title="Link title">
                                Link Three
                              </NavLink>
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>Marketplace</NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {components.map((component) => (
                                <li key={component.title} className="border rounded-lg p-4 hover:bg-gray-100">
                                  <a href={component.href}>
                                    {component.title}
                                  </a>
                                  <p className="text-gray-600 mt-2">{component.description}</p>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink asChild>
                            <NavLink to="#">

                              <Button variant="link">Hello</Button>

                            </NavLink>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                          <NavigationMenuLink asChild>
                            <NavLink to="#">

                              <Button variant="link">Hello</Button>

                            </NavLink>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger>
  {/* <YourIconComponent className="text-blue-500 h-8 w-8" /> */}
tricedesign.eth</DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>Billing</DropdownMenuItem>
                      <DropdownMenuItem>Team</DropdownMenuItem>
                      <DropdownMenuItem>Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                </div>
              </div>
            </nav>
          </header>

        {/* End component zone ☝️ */}
        </div>
      </div>
    );
  };
  
  export default Home;