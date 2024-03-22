"use client"

import Image from "next/image";
import ScrollIntoView from "./scrollOnView";
import Phone from "../public/phone-transparence-SDGP.png";
import Phonelaptop from "../public/laptop-phone-transparence-SDGP new.png";
import Laptop1 from "../public/laptop-1-transparence-SDGP.png";




export default function Component() {
  return (
    <ScrollIntoView>
    <section  className="w-full py-12 px-4 my-36 mt-44">


            <div className=" ">
                
                <div className="lg:flex lg:flex-auto">
                  <div className="flex flex-col lg:flex-row items-center lg:mr-36 justify-center">
                    <Image
                      src={Phone}
                      alt="Phone Image"
                      className=" lg:w-3/4 w-screen" // Adjust the width and height as needed
                    />
                    <div className="lg:mt-4 my-3  text-center">
                        <h1 className="text-4xl font-bold ">Add your Study Materials</h1>
                        <p className=" mt-5 "> Discover a wide range of study materials meticulously crafted to help you deepen your understanding
                          and master key concepts. Whether your preparing for exams, expanding your knowledge,
                            or simply exploring new subjects, our resources are tailored to your needs.</p>
                    </div>
                      
                  </div>

                </div>
           
              
              <div className="lg:flex lg:flex-auto  mt-36">
                <div className="flex flex-col-reverse lg:flex-row  justify-center mt-36">
                 
                 <div className=" my-3 text-center lg:ml-10">
                    <h1 className="text-4xl font-bold">Generate Custom Quizzes</h1>
                    <p className=" mt-5">Create personalized quizzes with just a few clicks based on the content 
                        your been studying. Whether you want to test your own knowledge or 
                        challenge your friends, our quizzes are a fun and effective way to reinforce 
                        learning. Customize the quiz settings, such as the number of questions, 
                        to suit your preferences.</p>
                    </div>

                  <Image
                    src={Laptop1}
                    alt="Laptop Image"
                    className=" w-3/5 ml-20" // Adjust the width and height as needed
                  />
                  
                </div>

              </div>

              <div className="lg:flex lg:flex-auto mt-36">
                <div className="flex flex-col lg:flex-row  items-center">
                  <Image
                    src={Phonelaptop}
                    alt="Phone Image"
                    className=" w-3/5" // Adjust the width and height as needed
                  />
                  <div className=" my-3 text-center lg:ml-10">
                    <h1 className="text-4xl font-bold">Engage with Quizzifyme Chat</h1>
                    <p className=" mt-5">Interact with Quizzifyme Chat, an interactive feature designed to enhance your learning experience. 
                        Ask questions, seek clarification, or engage in discussions related to the study materials and quizzes. 
                        Quizzifyme Chat provides you with personalized support and guidance, making your learning journey more engaging 
                        and effective.</p>
                    
                  </div>
                </div>
              </div>


            </div>
    </section>
    </ScrollIntoView>


  )



  

}




