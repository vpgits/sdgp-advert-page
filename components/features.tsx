"use client"

import Image from "next/image";

import ScrollIntoView from "./scrollOnView";

import InteractiveQuizzes from "../public/InteractiveQuizzes.png";
import Feedback from "../public/Real-time-Feedback.png";
import conprehensiveCoverage from "../public/Comprehensive-Subject-Coverage.png";
import communityEngagement from "../public/Community-Engagement.png";
import recommendations from "../public/AI-Powered-Recommendations.png";
import userinterface from "../public/User-Friendly-Interface.png";




export default function Component() {




  return (

    <ScrollIntoView>
    <section  className="w-full py-12 px-4 my-36 mt-44">
       <div className="text-3xl font-bold pb-7 text-center">Features</div>
            <div className=" text-center">
              <div className="lg:flex lg:flex-auto lg:flex-row justify-center">
                <div className="flex flex-auto flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Image
                    src={InteractiveQuizzes}
                    alt="Quizzes"
                    className="w-24 h-24" // Adjust the width and height as needed
                  />
                  <p className="lg:mt-4 my-3 mb-6">Interactive Quizzes</p>
                </div>

                <div className="flex flex-auto flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Image
                    src={Feedback}
                    alt="Feedback"
                    className="w-24 h-24" // Adjust the width and height as needed
                  />
                  <p className="lg:mt-4 my-3 mb-6">Real-time Feedback</p>
                </div>

                <div className="flex flex-auto flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Image
                    src={conprehensiveCoverage}
                    alt="Coverage"
                    className="w-24 h-24" // Adjust the width and height as needed
                  />
                  <p className="lg:mt-1 my-3 mb-6">
                    Comprehensive <br></br> Subject Coverage
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:flex-row justify-center">
                <div className="flex flex-auto flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Image
                    src={communityEngagement}
                    alt="Engagement"
                    className="w-24 h-24" // Adjust the width and height as needed
                  />
                  <p className="lg:mt-4 my-3 mb-6">Community Engagement</p>
                </div>

                <div className="flex flex-auto flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Image
                    src={recommendations}
                    alt="Recommendations"
                    className="w-24 h-24" // Adjust the width and height as needed
                  />
                  <p className="lg:mt-4 my-3 mb-6 ">
                    AI-Powered <br></br> Recommendations
                  </p>
                </div>

                <div className="flex flex-auto flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
                  <Image
                    src={userinterface}
                    alt="Interface"
                    className="w-24 h-24" // Adjust the width and height as needed
                  />
                  <p className="lg:mt-4 my-3 mb-6">User-Friendly Interface</p>
                </div>
              </div>
            </div>
    </section>
    </ScrollIntoView>


  )



  

}


