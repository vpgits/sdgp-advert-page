"use client"

import React from "react";
import Image from "next/image";
import LaptopImage2 from "../../public/laptop-2-transparence-SDGP.png";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import { Button } from "../ui/button";
import ProductIntro from "../productIntorduction";
import Features from "../features";
import UserFeedback from "../feedback";
import FAQ from "../Faq";
import Footer from "../footer";
import Pricing from "../pricing";
import ScrollIntoView from "../scrollOnView";


export default function AdvertPage() {
  return (
    <div className="flex flex-auto w-full justify-center my-16" >
      <div className=" mt-56 " >

        
        <ScrollIntoView>
        <div className="text-center">
            <div className="text-5xl font-bold">
              Elevate Your Learning Experience<br></br>
              with Quizifyme
            </div>
            <div className="text-xl font-medium mt-8">
              AI quizzes Generator
            </div>
            <Link href="https://quizzifyme.venura.dev/" >
                <Button className="bg-blue-400 hover:bg-blue-500
                 text-white text-xl font-bold py-6 px-12 rounded-full mt-10
                 hover:scale-105 transition-transform duration-300">
                  Get Started
                </Button>
            </Link>
        </div>
        </ScrollIntoView>

           <ScrollIntoView>
           
           <div className=" mt-72">
            <h1 className=" text-center font-bold lg:text-9xl text-4xl">How It Works</h1>
              <div className="flex flex-auto justify-center">
              <Image 
              src={LaptopImage2}
              alt="laptop" 
              className=" lg:w-3/4 w-full"/>
              </div>
            </div>
            </ScrollIntoView>

            <div>
            <ProductIntro />
            </div>
            


          {/* <div id="review"></div>
          <div  className=" mt-56 " >
            <UserFeedback />
          </div> */}

        
          <div id='features'></div>
          <div>
            <Features />
          </div>

          <div id=""></div>
          <div className="">
            <Pricing />
          </div>

            

          <div id="FAQ"></div>
          <div className=" mt-32">
              <FAQ />
          </div>
           
          <div id="about"></div>
              <Footer />

         
       
      </div>
    </div>
  );
}

