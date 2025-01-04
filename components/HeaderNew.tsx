
import { useState } from "react"; // Import useState
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md supports-[backdrop-filter]:bg-white border-b border-white/9">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              {/* <img
                src={Logo}
                alt="Liberty Credit Logo"
                className="h-10 w-auto"
              /> */}
              <span className="text-xl text-blue-400 font-bold text-customBlue  sm:inline-block">STOCKBARN</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            {/* <Link
              href="/login"
              className="text-sm font-medium text-customBlue hover:text-blue-200 transition-colors"
            >
              Login
            </Link> */}
            <Button
              asChild
              className="bg-customBlue text-white bg-blue-300 hover:bg-blue-400 transition-colors"
            >
              <Link href="/order">
                Order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </nav>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-customBlue hover:bg-customBlue/10"
              aria-label="Open menu"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 rounded-lg shadow-lg p-4">
            
            <Button
              asChild
              className="block w-full bg-customBlue text-white bg-blue-400  hover:bg-blue-500 transition-colors"
              onClick={toggleMenu}
            >
              <Link href="/order">
               Order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}