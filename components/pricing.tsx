"use client"


import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import Link from "next/link";
import { Button } from "@/components/ui/button"
import ScrollIntoView from "./scrollOnView";

export default function Component() {



  return (

    <ScrollIntoView>
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Join Our Qiuzme
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Get access to premium features and enhance your productivity.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button>Start Your Free Trial</Button>

            </div>
          </div>
        </div>
      </section>  
   
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3 md:gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>  
                <CardDescription>$10/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>200 responses per month</li>
                  <li>20,000 character input</li>
                  <li>Basic chat support</li>
                  <li>Exports</li>
                  <li>1 user</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="https://quizzifyme.venura.dev/login">
                <Button>Learn More</Button>
                </Link>
                
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pro</CardTitle>
                <CardDescription>$20/month</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Unlimited responses per month</li>
                  <li>Up to 3 users</li>
                  <li>Exports</li>
                  <li>Priority chat support</li>
               
                </ul>
              </CardContent>
              <CardFooter>
              <Link href="https://quizzifyme.venura.dev/login">
                <Button>Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>Contact Us</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>All Pro Features</li>
                  <li>Custom users</li>
                  <li>24/7 Support</li>
                </ul>
              </CardContent>
              <CardFooter>
              <Link href="https://quizzifyme.venura.dev/login">
                <Button>Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

    </ScrollIntoView>
  );
}


// function CheckIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polyline points="20 6 9 17 4 12" />
//     </svg>
//   )
// }


 {/* <section className="w-full py-12 px-4 my-28">
      <div className="flex flex-col items-center mb-20">
        <h1 className="text-3xl font-bold tracking-tight mb-3">Pricing Plans</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-center">
        Get access to premium features and enhance your productivity.
        </p>
      </div>

      <div className="container grid gap-6 md:gap-8 lg:grid-cols-3 xl:px-0 lg:mr-10">
        <div className="flex flex-col p-6 bg-gray-100 rounded-lg md:gap-4 lg:gap-8 dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold tracking-tight dark:text-gray-100">Basic</h3>
          <p className="text-sm leading-loose text-gray-600 dark:text-gray-400">
            For individuals just getting started.
          </p>
          <ul className="flex-1 grid w-full max-w-xs gap-2 my-4 text-sm dark:text-gray-400">
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              200 responses per month
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Unlimited projects
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Basic analytics
            </li>
          </ul>
          <Button> Learn more </Button>
        </div>
        <div className="flex flex-col p-6 bg-gray-100 rounded-lg md:gap-4 lg:gap-8 dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold tracking-tight dark:text-gray-100">Pro</h3>
          <p className="text-sm leading-loose text-gray-600 dark:text-gray-400">For teams looking to collaborate.</p>
          <ul className="flex-1 grid w-full max-w-xs gap-2 my-4 text-sm dark:text-gray-400">
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              5 users
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Unlimited projects
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Advanced analytics
            </li>
          </ul>
          <Button>Learn more</Button>
        </div>
        <div className="flex flex-col p-6 bg-gray-100 rounded-lg md:gap-4 lg:gap-8 dark:bg-gray-800 hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold tracking-tight dark:text-gray-100">Enterprise</h3>
          <p className="text-sm leading-loose text-gray-600 dark:text-gray-400">For organizations that need control.</p>
          <ul className="flex-1 grid w-full max-w-xs gap-2 my-4 text-sm dark:text-gray-400">
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              10 users
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Unlimited projects
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              Advanced analytics
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              SSO & security features
            </li>
          </ul>
          <Button size="lg">Contact sales</Button>
        </div>
      </div>
    </section> */}