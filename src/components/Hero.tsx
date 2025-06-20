import { curve } from "../assets";
import Section from "./Section";
import Button from './Button';
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos"; 

const Hero = () => {

   const parallaxRef = useRef<HTMLDivElement | null>(null);

  return (
    <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
    >
        <div className="container relative" ref={parallaxRef}>
            <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
                <h1 className="h1 mb-6">
                    Discover the Journey and Background of &nbsp;
                    <span className="inline-block relative"> Flourvex <img src={curve} alt="Curve" className="absolute top-full left-0 w-full xl:-mt-2" width={624} height={28} /> </span>
                </h1>
    
                <p className="body-1 max-w-3xl mx-auto mb-6 text-[var(--n-1)] lg:mb-8">
                    Flourvex blends a passion for tech, music, and Funko Pops—crafting a space where creativity and ideas come together.
                </p>

                <Button href="/pricing" white>
                    Get Started
                </Button>
            </div>
            <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                    <div className="relative bg-[var(--n-8)] rounded-[1rem]">
                        <div className="h-[1.4rem] bg-[var(--n-10)] rounded-t-[0.9rem]"/>
                        <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                            <img src="../src/assets/hero/robotfunko.png" 
                                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[1%]"
                                width={1024}
                                height={490}
                                alt="IA"
                            />
                            
                            <ScrollParallax isAbsolutelyPositioned>
                                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"/>
                            </ScrollParallax>
                            

                            <ScrollParallax isAbsolutelyPositioned>
                                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-[var(--n-9)]/40 backdrop-blur border border-[var(--n-1)]/10 rounded-2xl xl:flex">
                                    {heroIcons.map((icon, index) => (
                                        <li className="p-5" key={index}>
                                            <img
                                                src={icon}
                                                width={24}
                                                height={25}
                                                alt={icon}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </ScrollParallax>
                            <ScrollParallax isAbsolutelyPositioned>
                                <Notification
                                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                                    title="Main Characters"
                                />    
                            </ScrollParallax>
                        </div>
                    </div>
                    <Gradient/>
                </div>
                <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[108%] lg:-top-[103%]">
                    <img 
                        src="../src/assets/hero/robot-background.png"
                        className="w-full"
                        width={1440} 
                        height={1800}
                        alt="hero"
                    />
                </div>
               <BackgroundCircles parallaxRef={parallaxRef} />
            </div>
            <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/>
        </div>
        <BottomLine/>
    </Section>
  )
}

export default Hero