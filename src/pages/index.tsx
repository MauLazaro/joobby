import { Button } from "@heroui/react";
import HeroImage from "@assets/hero-1.png";
import "./landing.css";

const LandingPage = () => {
    return (
        <div className="sec-space">
            <section className="bg-[--main-color]">
                <div className="obj-width flex max-[699px]:flex-col justify-between max-[699px]:justify-center items-center max-[699px]:items-start h-[100vh] max-[699px]:h-auto max-[699px]:py-[6rem]">
                    <div className="w-[45%] max-[699px]:w-full text-white">
                        <h1 className="max-[899px]:text-4xl">Find the right job opportunities for your career</h1>
                        <p className="py-6">
                            Connect with companies and professionals to discover job 
                            opportunities that match your skills and goals.
                        </p>
                        <div className="relative">
                            <input 
                                type="text"
                                className="w-full h-16 px-5 rounded-[35px] text-sm border-none outline-none text-black"
                                placeholder="Search your new job here..." 
                            />
                            <Button className="c-btn absolute top-[12px] right-[20px]" href="#">Search</Button>
                        </div>
                    </div>
                    
                    <div className="w-[50%] max-[699px]:hidden">
                        <img src={HeroImage} className="w-full object-cover" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
