import aboutimg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion} from "framer-motion";
const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="flex flex-wrap justify-center items-center my-20 text-center text-4xl">
                <motion.div
                whileInView={{opacity:1,x:0,y:0}}
                initial={{x:-100,y:-30,opacity:0}}
                transition={{duration:0.5}} 
                >A</motion.div>
                <motion.div
                whileInView={{opacity:1,x:0,y:0}}
                initial={{x:-60,y:-30,opacity:0}}
                transition={{duration:0.5}}
                >b</motion.div>
                <motion.div
                whileInView={{opacity:1,x:0,y:0}}
                initial={{x:-30,y:-30,opacity:0}}
                transition={{duration:0.5}}
                >o</motion.div>
                <motion.div
                whileInView={{opacity:1,x:0,y:0}}
                initial={{x:0,y:-30,opacity:0}}
                transition={{duration:0.5}}
                >u</motion.div>
                <motion.div
                whileInView={{opacity:1,x:0,y:0}}
                initial={{x:30,y:-30,opacity:0}}
                transition={{duration:0.5}}
                >t</motion.div>
                <div className="w-2"></div>
                <motion.div
                whileInView={{opacity:1,x:0,y:0}}
                initial={{x:60,y:-30,opacity:0}}
                transition={{duration:0.5}}
                className="text-neutral-500"
                >M</motion.div>
                <motion.div
                whileInView={{opacity:1,x:0,y:0}}
                initial={{x:100,y:-30,opacity:0}}
                transition={{duration:0.5}}
                className="text-neutral-500"
                >e</motion.div>
                {/* <span className="text-neutral-500"> Me</span> */}
                </h2>
            <div className="flex flex-wrap">
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{x:-100,opacity:0}}
                transition={{duration:0.5}} 
                className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={aboutimg} alt="" />
                    </div>
                </motion.div>
                <motion.div 
                whileInView={{opacity:1,x:0}}
                initial={{x:100,opacity:0}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About