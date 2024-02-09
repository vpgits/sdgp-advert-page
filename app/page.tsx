import React from 'react';
import Image from '../public/laptop.jpg';


const App: React.FC = () => {
  return (
    <div className="bg-gray-100">

     <div className='p-3 bg-white'>
      
      <nav className="bg-blue-400 text-white text-center py-2 rounded-3xl opacity-80 shadow-2xl">

        <ul className="flex justify-left text-lg p-5 font-bold">

          <li className="mx-5 "><a href="#features" className="hover:underline hover:shadow-xl">Features</a></li>
          <li className="mx-5"><a href="#why-quizfime" className="hover:underline hover:shadow-xl">Why Quizfime?</a></li>
          <li className="mx-5"><a href="#contact" className="hover:underline hover:shadow-xl">Contact</a></li>
          <li className="mx-5"><a href="#about" className="hover:underline hover:shadow-xl">About</a></li>

        </ul>
      </nav>

    </div>
     
     <div className=' flex items-center bg-white p-14 text-black'>
           
        <div className="text-6xl font-bold flex-none"> 
           <div className='px-11 py-2 drop-shadow-lg'>Elevate <br></br></div>
           <div className='px-11 py-2 drop-shadow-lg'>Your Learning <br></br></div>
           <div className='px-11 py-2 drop-shadow-lg'>Experience</div>
        </div>

        <div>
        <img src={Image.src} alt="laptop" className="size-7/8 mx-auto my-2 " />
        </div>
        
      </div>

      <div className='bg-white p-10'>

            <section id="why-quizfime" className="bg-blue-400 py-8 rounded-3xl drop-shadow-2xl">
              <h2 className="text-3xl text-center mb-4 text-black font-bold">Why Quizfime?</h2>
              <p className="text-lg text-center">
                Personalized Learning: Tailored quizzes and learning paths to suit your unique needs.<br />
                Efficiency: Maximize your study time with targeted learning objectives.<br />
                Engagement: Interactive quizzes and a supportive community foster an engaging learning environment.<br />
                Innovation: Stay at the forefront of education technology with Quizfime's AI-driven approach.
              </p>
            </section>
      </div>

      <div className='p-5'>

      <section id="features" className="py-8 bg-blue-400">
        <h2 className="text-2xl text-center mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg">
          <li>Adaptive Learning Paths</li>
          <li>Interactive Quizzes</li>
          <li>Real-time Feedback</li>
          <li>Comprehensive Subject Coverage</li>
          <li>Community Engagement</li>
          <li>AI-Powered Recommendations</li>
          <li>User-Friendly Interface</li>
        </ul>
      </section>

      </div>
     
      <footer id="contact" className="bg-blue-500 text-white text-center py-4">
        <h3 className="text-xl mb-2">Contact Us</h3>
        <p>Email: info@quizfime.com</p>
        <p>Phone: 123-456-7890</p>
      </footer>
    </div>
  );
}

export default App;

