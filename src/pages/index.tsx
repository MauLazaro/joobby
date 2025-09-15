import { Key, useEffect, useState } from "react";
import { IconBriefcase, IconChecklist, IconMailForward, IconSearch } from "@tabler/icons-react";
import { Button, Chip, Tab, Tabs } from "@heroui/react";
import { getJobsType } from "src/core/utils/JobsType";
import { getJobs, Jobs } from "src/core/utils/Jobs";
import HeroImage from "@assets/hero-1.png";
import moment from "moment";
import "./landing.css";

const LandingPage = () => {
    const [data, setData] = useState<Jobs[]>([]);
    
    const tabsJob = [
        { id: 0, name: "Recent Jobs" },
        ...getJobsType
    ];
    
    useEffect(() => {
        setData(getJobs);
    }, []);
    
    const handleFilterJobs = (e: Key) => {
        let value = parseInt(e.toString());
        if (value == 0) setData(getJobs);
        else setData(getJobs.filter((item) => item.av?.id == value));
    }
    
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
            
            <section className="sec-space obj-width">
                <h2>Find a new job</h2>
                <p>Explore the most recent job opportunities</p>
                
                <div className="flex mt-12 justify-between items-center box-shadow job-id">
                    <Tabs 
                        items={tabsJob}
                        aria-label="Tabs" 
                        size="lg" 
                        radius="none"
                        defaultSelectedKey="0"
                        fullWidth={true}
                        classNames={{
                            tabList: "bg-white",
                            tabContent: "text-black group-data-[selected=true]:text-white",
                            cursor: "bg-[--main-color]"
                        }}
                        onSelectionChange={(e) => handleFilterJobs(e)}
                    >
                        {tabsJob.map((item) => <Tab className="py-[30px] px-5 max-[699px]:text-nowrap" key={item.id} title={item.name} /> )}
                    </Tabs>
                </div>
                
                <div className="jobs-container">
                    {data
                        .sort((a, b) => moment(b.timestamp).valueOf() - moment(a.timestamp).valueOf())
                        .slice(0, 9)
                        .map((item) => (
                            <li 
                                key={item.id}
                                className= "jList"
                            >
                                <img className="w-[40px]" src={item.company?.image} alt={item.company?.name} />
                                <h3 className="pb-0">{item.location}</h3>
                                <h3 className="pb-0">{item.title}</h3>
                                <h3 className="pb-0">{item.rate}</h3>
                                <Chip color="secondary" size="lg">{item.av?.name}</Chip>
                            </li>
                    ))}
                </div>
            </section>
            
            <section className="sec-space obj-width">
                <h2>Need something done?</h2>
                <p>Most viewed and all-time top-selling services</p>
                
                <div className="flex justify-between items-center flex-wrap">
                    <div className="w-[200px] max-[699px]:w-[40%]">
                        <IconSearch size={50} className="mt-12" title="Find job offers" />
                        <h3>Find job offers</h3>
                        <p>Browse thousands of opportunities tailored to your skills and goals.</p>
                    </div>
                    <div className="w-[200px] max-[699px]:w-[40%]">
                        <IconBriefcase size={50} className="mt-12" title="Build your profile" />
                        <h3>Build your profile</h3>
                        <p>Showcase your experience, education and project to stand out.</p>
                    </div>
                    <div className="w-[200px] max-[699px]:w-[40%]">
                        <IconChecklist size={50} className="mt-12" title="Apply with ease" />
                        <h3>Apply with ease</h3>
                        <p>Send applications quickly and track your progress in real time.</p>
                    </div>
                    <div className="w-[200px] max-[699px]:w-[40%]">
                        <IconMailForward size={50} className="mt-12" title="Get career support" />
                        <h3>Get career support</h3>
                        <p>If you need any help, don’t hesitate to contact us.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
