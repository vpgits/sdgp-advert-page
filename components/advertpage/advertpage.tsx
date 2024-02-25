import React from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';
import InteractiveQuizzes from '../../public/InteractiveQuizzes.png';
import Feedback from '../../public/Real-time-Feedback.png';
import conprehensiveCoverage from '../../public/Comprehensive-Subject-Coverage.png';
import communityEngagement from '../../public/Community-Engagement.png';
import recommendations from '../../public/AI-Powered-Recommendations.png';
import userinterface from '../../public/User-Friendly-Interface.png';




export default function AdvertPage(){
  return (
   
    <div className="flex justify-center">
            
            <div className='mt-20'>
                <div className='text-center text-5xl font-bold'>
                Elevate Your Learning Experience<br></br>
                        with Quizifyme
                </div>
                <div className='text-center text-xl font-medium mt-8'>
                AI quizzes Generator
                </div>

                <div className='text-center mt-8'>
                <Link href=''>
                <Button className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full'>Get Started</Button>
                </Link>

                
                <div className='text-center mt-96'>
                    <div className='text-center text-3xl font-bold pb-7'>
                    Features
                    </div>

                    <div>
                        <div className='grid grid-cols-3 gap-4 mt-8'>
                            <div className='text-center'>
                            <Image className='ml-20 mb-5' src={InteractiveQuizzes} alt="Quizzes" width={100} height={100} />
                            <div>Interactive Quizzes</div>
                            </div>
                            <div className='text-center'>
                            <Image className='ml-7 mb-5' src={Feedback} alt="Feedback" width={200} height={200} />
                            <div>Real-time Feedback</div>
                            </div>
                            <div className='text-center'>
                            <Image className='ml-14 mb-5' src={conprehensiveCoverage} alt="Coverage" width={122} height={122} />
                            <div>Comprehensive Subject Coverage</div>
                            </div>
                            <div className='text-center'>
                            <Image className='ml-20 mb-5' src={communityEngagement} alt="Engagement" width={100} height={100} />
                            <div>Community Engagement</div>
                            </div>
                            <div className='text-center'>
                            <Image className='ml-16 ' src={recommendations} alt="Recommendations" width={100} height={100} />
                            <div>AI-Powered Recommendations</div>
                            </div>
                            <div className='text-center'>
                            <Image className='ml-20 mb-2' src={userinterface} alt="Interface" width={100} height={100} />
                            <div>User-Friendly Interface</div>
                            </div>
                        </div>
                    </div>

                </div>




                </div>


                




            </div>
      
           
    </div>

    

  );
}












   {/* <div className='p-3 pb-0 pt-1 bg-white'>
            
            <nav className="bg-blue-400 text-white text-center py-2 rounded-3xl opacity-90 shadow-2xl">

        
                <ul className="text-lg lg:p-5 font-bold lg:flex">

                <li className="mx-5"><a href="#QUIZIFYME" className=" hover:drop-shadow-xl hover:text-lime-400 ">QUIZIFYME</a></li>
                <li className="mx-5 "><a href="#features" className="hover:drop-shadow-xl hover:text-lime-400">Features</a></li>
                <li className="mx-5"><a href="#why-quizfime" className="hover:drop-shadow-xl hover:text-lime-400">Why Quizfime?</a></li>
                <li className="mx-5"><a href="#contact" className="hover:drop-shadow-xl hover:text-lime-400">Contact</a></li>
                <li className="mx-5"><a href="#about" className="hover:drop-shadow-xl hover:text-lime-400">About</a></li>

                </ul>
            </nav>


            </div>
        
            <div className='bg-white grid lg:grid-cols-2 gap-2 mt-16'>
                
                <div className='lg:ml-16'> 
                    <div className='px-12 text-indigo-400 font-medium'>
                        <div>AI quizzes Generator</div>
                    </div>
                    <div className='text-6xl font-bold  text-black  '>
                        <div className='px-11 py-2 drop-shadow-lg '>Elevate <br></br></div>
                        <div className='px-11 py-2 drop-shadow-lg'>Your Learning <br></br></div>
                        <div className='px-11 py-2 drop-shadow-lg'>Experience</div>
                    </div>
                </div>

                <div  className="lg:size-auto lg:max-w-2xl md:max-w-sm mx-auto">
                <img src={Image9.src} alt="laptop" />
                </div>
                
            </div>

            <div className='lg:p-5 bg-white lg:mt-20 p-2'>

    <div className="py-4 bg-blue-200 rounded-2xl drop-shadow-xl mx-5">
        <h2 className="text-black font-bold text-4xl text-center mb-10 pt-10">Key Features</h2>
        <div className="grid grid-cols-3 lg:gap-3 lg:justify-items-center gap-3 text-xs md:text-lg">
            <div className='ml-5 flex flex-auto justify-center flex-col text-justify'>
            <img src={Image3.src} alt="Quizzes" className='size-1/3 lg:ml-14 my-4 rounded-sm ml-5' />
            <span>Interactive Quizzes</span>
            </div>
            <div className='ml-0 flex flex-auto justify-center flex-col text-justify'>
            <img src={Image4.src} alt="Feedback" className='size-1/3 lg:ml-14 my-4 rounded-sm ml-6' />
            <span>Real-time Feedback</span>
            </div>
            <div className='ml-0 flex flex-auto justify-center flex-col text-justify'>
            <img src={Image5.src} alt="Coverage" className='size-1/3 lg:ml-24 my-4 rounded-sm ml-8' />
            <span>Comprehensive Subject Coverage</span>
            </div>
            <div className='ml-4 flex flex-auto justify-center flex-col text-justify'>
            <img src={Image6.src} alt="Engagement" className='size-1/3 lg:ml-16 my-4 rounded-sm ml-7' />
            <span>Community Engagement</span>
            </div>
            <div className='ml-0 flex flex-auto justify-center flex-col text-justify'>
            <img src={Image7.src} alt="Recommendations" className='size-1/3 lg:ml-20 my-4 rounded-sm ml-7' />
            <span>AI-Powered Recommendations</span>
            </div>
            <div className='ml-0 flex flex-auto justify-center flex-col text-justify'>
            <img src={Image8.src} alt="Interface" className='size-1/3 lg:ml-20 my-4 rounded-sm ml-6' />
            <span>User-Friendly Interface</span>
            </div>
    </div>

    </div>

        



        <div className='grid lg:grid-cols-2 gap-2 lg:mt-32 lg:mb-32'>
        
                <div className=' bg-white'>
                <div className=' lg:size-auto md:size-auto mx-auto'>
                <img src={Image10.src} alt="laptop" />
                </div>
                </div>    
    
                <div className='bg-white lg:mr-10'>

                    <div id="why-quizfime" className="bg-blue-200 py-16 rounded-2xl drop-shadow-2xl">
                        <div>
                        <div className="text-3xl text-center mb-4 text-black font-bold opacity-80 ">Why Quizfime?</div>
                        <div className="text-lg text-center opacity-80">
                            Personalized Learning: Tailored quizzes and learning paths to suit your unique needs.<br />
                            Efficiency: Maximize your study time with targeted learning objectives.<br />
                            Engagement: Interactive quizzes and a supportive community foster an engaging learning environment.<br />
                            Innovation: Stay at the forefront of education technology with Quizfime's AI-driven approach.
                        </div>
                        </div>
                    </div>
            
                </div>
        </div>










    

        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
                Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas
                in. Explicabo id ut laborum.
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                        repellendus etur quidem assumenda.
                    </p>
                    <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                        <div className="h-px flex-auto bg-gray-100" />
                    </div>
                    <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                    >
                        
                    </ul>
                    </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                </p>
                                <a
                                href="#"
                                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Get access
                                </a>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                Invoices and receipts available for easy company reimbursement
                                </p>
                            </div>
                            </div>
                        </div>
            </div>
        </div>
        </div>
        
        <footer id="contact" className="bg-blue-500 text-white text-center py-4">
            <h3 className="text-xl mb-2">Contact Us</h3>
            <p>Email: info@quizfime.com</p>
            <p>Phone: 123-456-7890</p>
        </footer>
            </div> */}


