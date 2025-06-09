import DecryptedText from "@/components/animation/decrypted-text"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import pikachu from "@/components/assets/pikachu-running.gif"
import profile from "@/components/assets/image.jpg"
import Image from "next/image"
import Orb from "@/components/animation/orb/Orb"
import { DownloadCloudIcon } from "lucide-react"
import { useResumeDownload } from "@/components/common/downloadResume"

const Profile = () => {
    const { downloadResume, downloadProgress, isDownloading } = useResumeDownload();

    const [view, setView] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setView(true)
        }, 1000)
    }, [])
    return (
        <div className="md:text-8xl text-5xl lg:text-9xl font-bold p-[4%] relative z-10 tracking-widest h-full grid gap-4">
            <div className="space-y-4 mt-10 bg-transparent backdrop-blur-sm">
                <DecryptedText text="DEVELOPER" className="text-white italic relative z-50" encryptedClassName="text-pink-700" />
                <AnimatePresence initial={0}>
                    <div className="flex gap-2 items-center">
                        <motion.p className="bg-gray-800 text-xs md:text-sm lg:text-base text-white font-light size-fit px-4 py-3">AJITH KANNA</motion.p>
                    </div>
                </AnimatePresence>
            </div>
            <div className={`flex flex-col justify-between h-full bg-black text-sm md:text-base md:p-8 p-4 font-light font-roboto text-justify sm:w-1/2 tracking-wide text-white z-50 relative transition-all duration-700 ${view ? "scale-100" : "scale-0"}`}>
                MERN Stack Developer with 2 years of experience building scalable web applications using React.js, Node.js, Express, and MongoDB. and collaborating in Agile teams. Skilled in UI/UX design, RESTful APIs, and state management ( Redux Toolkit, Context API). Certified Full-Stack Developer with a focus on clean code and responsive design.
                <button className="cursor-pointer size-fit font-medium px-3 py-2 mx-auto border transition-all duration-100 ease-linear rounded-full hover:bg-white hover:text-black" onClick={downloadResume}>{isDownloading ? <Image src={pikachu} alt="pikachu" className="h-5 w-fit" /> : "Resume"}</button>
            </div>
            <div className="h-screen w-full md:w-1/2 right-0 top-0 fixed z-0">
                <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={false}
                />
            </div>
        </div>
    )
}

export default Profile