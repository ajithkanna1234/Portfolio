import { useState } from "react";
import { Carousel, Image } from 'antd';
import M from "../image/layer-icon-13.svg";
import left from "../image/caret-left.png";
import right from "../image/caret-right.png";
import Image2 from "../image/weatherR.png";
import Image1 from "../image/weatherH.png";
import cycle1 from "../image/Screenshot1.png";
import cycle2 from "../image/Screenshot2.png";
import cycle3 from "../image/Screenshot3.png";
import cycle4 from "../image/Screenshot4.png";
import cycle5 from "../image/Screenshot5.png";
import cycle6 from "../image/Screenshot6.png";
import learn1 from "../image/Screenshot (1).png";
import learn2 from "../image/Screenshot (2).png";
import learn3 from "../image/Screenshot (3).png";
import learn4 from "../image/Screenshot (4).png";
import learn5 from "../image/Screenshot (5).png";
import learn6 from "../image/Screenshot (6).png";
import learn7 from "../image/Screenshot (7).png";
import learn8 from "../image/Screenshot (8).png";
import learn9 from "../image/Screenshot (9).png";
import learn10 from "../image/Screenshot (10).png";
import learn11 from "../image/Screenshot (11).png";
import learn12 from "../image/Screenshot (12).png";
import learn13 from "../image/Screenshot (13).png";
import learn14 from "../image/Screenshot (14).png";
import learn15 from "../image/Screenshot (15).png";
import learn16 from "../image/Screenshot (16).png";
import learn17 from "../image/Screenshot (17).png";
import learn18 from "../image/Screenshot (18).png";
import learn19 from "../image/Screenshot (19).png";
import learn20 from "../image/Screenshot (20).png";
import learn21 from "../image/Screenshot (21).png";
import todo22 from "../image/Screenshot (22).png";
import todo23 from "../image/Screenshot (23).png";
import todo24 from "../image/Screenshot (24).png";

const PROJECTS = [
  {
    id: 0,
    title: "E-learning Platform",
    images: [learn1, learn2, learn3, learn4, learn5, learn6, learn7, learn8, learn9, learn10, learn11, learn12, learn13, learn14, learn15, learn16, learn17, learn18, learn19, learn20, learn21],       
    description: [
      "Developed a E-learning Platform using ReactJS and MongoDb for database integration",
      "Implemented user authentication and authorization (student,admin and instructor)",
      "Razorpay payment gateway integration for course purchase",
    ],
    bgColor: "bg-purple-100",
    renderContent: (images) => (
        <Carousel className="mx-auto w-[600px] pb-3 bg-black relative" autoplay>
        {images.map((image, index) => (
          <div key={index} className="">
            <Image className="w-full" src={image} />
          </div>
        ))}
      </Carousel>
    )
  },
  {
    id: 3,
    title: "Cycle Website",
    images: [cycle1, cycle2, cycle3, cycle4, cycle5, cycle6],
    description: [
      "Developed a Static cycle website using HTML and CSS",
      "Implemented responsive design principles",
      "Optimized for cross-browser compatibility"
    ],
    bgColor: "bg-blue-100",
    renderContent: (images) => (
      <Carousel className="mx-auto w-[600px] pb-3 bg-black relative" autoplay>
        {images.map((image, index) => (
          <div key={index} className="">
            <Image className="w-full" src={image} />
          </div>
        ))}
      </Carousel>
    )
  },
  {
    id: 1,
    title: "Weather App",
    images: [Image1, Image2],
    description: [
      "Developed a Weather app using ReactJS and Axios for API integration",
      "Displayed current weather metrics including temperature, humidity, and conditions",
      "Implemented efficient data fetching with caching strategies"
    ],
    bgColor: "bg-green-100",
    renderContent: (images) => (
        <Carousel className="mx-auto w-[600px] pb-3 bg-black relative" autoplay>
        {images.map((image, index) => (
          <div key={index} className="">
            <Image className="w-full" src={image} />
          </div>
        ))}
      </Carousel>
    )
  },
  {
    id: 4,
    title: "Todo List",
    images: [todo22, todo23, todo24],
    description: [
      "Developed a Todo List application using ReactJS and LocalStorage for database integration",
      "Implemented user authentication and authorization",
      "Implemented CRUD operations for managing tasks",
    ],       
    bgColor: "bg-red-100",
    renderContent: (images) => (
        <Carousel className="mx-auto w-[600px] pb-3 bg-black relative" autoplay>
        {images.map((image, index) => (
          <div key={index} className="">
            <Image className="w-full" src={image} />
          </div>
        ))}
      </Carousel>
    )
  },
];

function Project() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = PROJECTS[currentProjectIndex];

  const navigateProject = (direction) => {
    setCurrentProjectIndex(prev => {
      if (direction === "next") {
        return prev === PROJECTS.length - 1 ? 0 : prev + 1;
      } else {
        return prev === 0 ? PROJECTS.length - 1 : prev - 1;
      }
    });
  };

  return (
    <div className="overflow-hidden">
      <h1 className='tracking-wider bg-gray-100 text-gray-500 rounded-t-xl font-[fantasy] px-2 py-4 flex gap-1 items-center'>
        <span>PROJECTS</span>
        <img 
          className='inline h-4 hover:bg-gray-200 hover:scale-110 drop-shadow-none' 
          src={M} 
          alt="Projects icon"
          onClick={() => navigateProject("next")} 
        />
      </h1>
      
      <section className="border-1 h-[92%] rounded-b-xl border-gray-100 transition-all">
        <div className="flex items-center justify-between w-11/12 mx-auto">
          <button onClick={() => navigateProject("prev")} aria-label="Previous project">
            <img 
              className="mx-2 hover:bg-gray-100 transition-all duration-300 hover:scale-110" 
              src={left} 
              alt="Previous"
            />
          </button>
          
          <h1 className="text-xl text-gray-600 px-3 rounded font-[fantasy] tracking-wider mt-2 p-2">
            {currentProject.title}
          </h1>
          
          <button onClick={() => navigateProject("next")} aria-label="Next project">
            <img 
              className="mx-2 hover:bg-gray-100 transition-all duration-300 hover:scale-110" 
              src={right} 
              alt="Next"
            />
          </button>
        </div>
        
        <div className="mx-auto my-4 drop-shadow-none container-sm bg-black lg:mx-4">
          {currentProject.renderContent(currentProject.images)}
        </div>
        
        <ul className={`list-disc list-inside text-sm leading-loose ${currentProject.bgColor} lg:mx-4 container-sm mx-auto p-4 text-justify`}>
          {currentProject.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Project;