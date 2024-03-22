import React from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/modetoggle";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GlobeIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Quizzifyme from "../public/logo-max.png";
// import { cookies } from "next/headers";
// import { createClient } from "@/utils/supabase/server";

export default async function Header() {
//   const cookieStore = cookies();
//   const supabase = createClient(cookieStore);
//   const { data } = await supabase.auth.getUser();
//   const loggedIn = data?.user !== null;
  return (
    <div className="fixed w-full top-0 rounded-full z-10">
      <div className="flex items-center justify-center px-5 py-4   dark:bg-slate-950 text-black bg-white dark:text-white ">
        <div className="w-10/12 flex flex-auto items-center justify-between">
          <Link className="flex justify-start" href="/">
            <GlobeIcon className="h-6 w-6" />
            {/* <Image
              src={Quizzifyme}
              alt="Quizzifyme"
              height={50}
              width={50}
              className="mx-auto block"/>  */}
            <h1 className="ml-2 text-lg font-semibold">Quizzifyme</h1>
          </Link>
          <nav className="hidden md:flex flex-auto items-center justify-center gap-4">
            <Link className="text-sm font-medium hover:underline" href="/">
              Home
            </Link>

              <Link
                href="#HowItWorks"
                className="text-sm font-medium hover:underline "
              >
              How It Works
            </Link>
            {/* <div className="absolute hidden group-hover:block bg-white shadow-md py-2 px-4 top-full mt-1">
              <Link
                className="block text-sm font-medium hover:underline "
                href="#"
              >
                Asia
              </Link>
              <Link
                className="block text-sm font-medium hover:underline "
                href="#"
              >
                Europe
              </Link>
              <Link
                className="block text-sm font-medium hover:underline "
                href="#"
              >
                America
              </Link>
            </div> */}

            {/* End of Activity Dropdown */}

            <Link
              className="text-sm font-medium hover:underline"
              href="#pricing"
            >
              Pricing
            </Link>

            <Link
              className="text-sm font-medium hover:underline"
              href="#features"
            >
              Features
            </Link>
            
            <Link
              className="text-sm font-medium hover:underline"
              href="#FAQ"
            >
             FAQ
            </Link>

            <Link 
              className="text-sm font-medium hover:underline"
              href="#about">
              About
            </Link>
  
          </nav>
          {/* {!loggedIn ? (
            <Link href="/login">
              <Button className="hidden md:inline-flex">Login</Button>
            </Link>
          ) : (
            <Link href="/subscribe">
              <Button className="hidden md:inline-flex">Subscribe</Button>
            </Link>
          )} */}
          
          <div className="flex flex-end">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="md:hidden" size="icon" variant="outline">
                  <HamburgerMenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                  <Link
                    className="text-lg font-medium hover:underline"
                    href="/"
                  >
                    Home
                  </Link>
                  <Link
                   href="#HowItWorks"
                  className="text-lg font-medium hover:underline "
                  >
                  How It Works
                 </Link>

                  <Link
                    className="text-lg font-medium hover:underline"
                    href="#features"
                  >
                    Features
                  </Link>
                  <Link
                    className="text-lg font-medium hover:underline"
                    href="#FAQ"
                  >
                    FAQ
                  </Link>
                  <Link
                    className="text-lg font-medium hover:underline"
                    href="#about"
                  >
                     About
                  </Link>
                  {/* {!loggedIn ? (
                    <Link href="/login">
                      <Button className="mt-4">Login</Button>
                    </Link>
                  ) : (
                    <Link href="/subscribe">
                      <Button className="mt-4">Subscribe</Button>
                    </Link>
                  )} */}
                </div>
              </SheetContent>
            </Sheet>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  );
}
