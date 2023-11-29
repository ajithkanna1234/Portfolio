import { useState } from "react"
import M from "../image/layer-icon-13.svg"
import left from "../image/caret-left.png"
import right from "../image/caret-right.png"
import Image2 from "../image/weatherR.png"
import Image1 from "../image/weatherH.png"
import cycle1 from "../image/Screenshot1.png"
import cycle2 from "../image/Screenshot2.png"
import cycle3 from "../image/Screenshot3.png"
import cycle4 from "../image/Screenshot4.png"
import cycle5 from "../image/Screenshot5.png"
import cycle6 from "../image/Screenshot6.png"
import { Carousel } from 'antd';
function Project() {

    const [ plus, setPlus ] = useState(false)
    const plusclick = () => {
        setPlus(!plus)
    }
    return (
        <div className="overflow-hidden ">
            <h1 className='tracking-wider bg-gray-100 text-gray-500 rounded-t-xl font-[fantasy] px-2 py-4 flex gap-1 items-center'>
                <span>PROJECTS</span>
                <img className='inline h-4 hover:bg-gray-200 hover:scale-110 drop-shadow-none' src={M} onClick={() => plusclick()} />
            </h1>
            <section className="border-1 h-[92%] rounded-b-xl border-gray-100 transition-all ">
                <div className="flex items-center justify-between  w-11/12 mx-auto">
                    <button onClick={() => plusclick()} className="">
                        <img className="mx-2  hover:bg-gray-100 transition-all duration-300 hover:scale-110" title="Previous" src={left} />
                    </button>
                    {plus === true ? (
                        <h1 className=" text-xl text-gray-600 px-3 rounded font-[fantasy] tracking wider  mt-2 p-2">Cycle</h1>
                    ) : (
                        <h1 className=" text-xl text-gray-600 px-3 rounded font-[fantasy] tracking wider  mt-2 p-2">Weather App</h1>
                    )}
                    <button onClick={() => plusclick()} className="">
                        <img className="mx-2  hover:bg-gray-100 transition-all duration-300 hover:scale-110" title="next" src={right} />
                    </button>
                </div>
                <div className="mx-auto my-4 drop-shadow-none container-sm">
                    {plus === true ? (
                        <div className=" transition-all duration-300 justify-center items-center  mx-auto">
                            <Carousel className="w-[660px] mx-auto" autoplay>
                                <div className="mx-auto">
                            <img className="P-img" src={cycle1} />

                                </div>
                                <div className="mx-auto">
                            <img className="P-img" src={cycle2} />

                                </div>
                                <div className="mx-auto">
                            <img className="P-img " src={cycle3} />

                                </div>
                                <div className="mx-auto">
                            <img className="P-img " src={cycle4} />

                                </div>
                                <div className="mx-auto">
                            <img className="P-img " src={cycle5} />

                                </div>
                                <div className="mx-auto">
                            <img className="P-img " src={cycle6} />

                                </div>
                            </Carousel>
                        </div>) : (
                        <div className="flex transition-all duration-300 justify-center items-center flex-wrap  mx-auto relative">
                            <img className="w-[45%] P hover:scale-110 z-0 border-2 delay-300 hover:z-10 hover:transition-all ease duration-300 " src={Image1} />
                            <img className="w-[45%] P hover:scale-110 z-0 border-2 delay-300 hover:z-10 hover:transition-all ease duration-300 " src={Image2} />
                        </div>
                    )}
                </div>
                {plus === true ? (
                    <ul className="list-disc list-inside font-[cursive] text-sm leading-loose bg-blue-100 w-11/12 mx-auto p-4 text-justify">
                        <li>
                            Developed a Static cycle website with my knowledge using basic <b>HTML</b> and <b>CSS</b>
                        </li>
                    </ul>
                ) : (
                    <ul className="list-disc list-inside font-[cursive] text-sm leading-loose bg-green-100 w-11/12 mx-auto p-4 text-justify">
                        <li>
                            Developed a Weather app using ReactJS and Axios method for fetching weather data.
                        </li>
                        <li>Displayed the current weather information such as temperature, humidity and weather description.</li>
                        <li>
                            With the use of the axios method, the app efficiently fetches data from weather Api's, ensuring reliable and timely updates.
                        </li>
                    </ul>
                )}
            </section>
        </div>
    )
}

export default Project