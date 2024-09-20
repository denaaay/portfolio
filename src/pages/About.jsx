import NavButton from "../components/NavButton";
import MailIcon from '../assets/icon/mail.png';
import ContentTitle from "../components/ContentTitle";
import JourneyContent from "../components/JourneyContent";
import JourneyContent2 from "../components/JourneyContent2";
import CommingSoon from "../components/CommingSoon";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    return(
        <div className="w-screen h-screen flex justify-center items-center">
            {window.matchMedia("(max-width: 1024px)").matches ? 
                <CommingSoon /> :
                <div className="w-[85%] h-[90%] flex justify-between gap-10">
                    {/* About Me */}
                    <div className="flex-[2] h-full flex flex-col justify-between gap-8">
                        <ContentTitle title="about me" isLoading={loading} delay={'delay-[500ms]'}/>

                        {/* Description */}
                        <div className="w-full flex-1 flex flex-col justify-between">
                            <p className="text-xl text-justify font-thin leading-8 delay-[4700ms]" data-aos="fade-right" data-aos-duration="700" data-aos-easing="linear">A graduate of the University of Jember's Faculty of Computer Science, I have a strong foundation in programming and a passion for creating efficient and scalable solutions. With a keen attention to detail and a problem-solving mindset, I thrive in a collaborative environment and enjoy tackling complex challenges in the field of software development.</p>
                            <div className="w-full h-max flex justify-between items-center delay-[5000ms]" data-aos="fade-right" data-aos-duration="700" data-aos-easing="linear">
                                <div className="h-[35px]">
                                    <img src={MailIcon} alt="mail.png" className="w-full h-full"/>
                                </div>
                                <p className="text-xl font-thin">dfahrony7@gmail.com</p>
                            </div>
                        </div>

                        {/* Navigation Button */}
                        <NavButton page='about' isLoading={loading}/>
                    </div>

                    {/* Journey */}
                    <div className="flex-[6] h-full flex flex-col justify-between gap-8">
                        <ContentTitle title="journey" isLoading={loading} delay={'delay-[1700ms]'}/>

                        {/* Journey Content */}
                        <div className="flex-1 w-full flex justify-between gap-8">
                            <div className="flex-1 h-full">
                                <JourneyContent id='unej'/>
                            </div>
                            <div className="flex-1 h-full flex flex-col justify-between items-center gap-8">
                                <div className="flex-1 w-full">
                                    <JourneyContent2 id='rg'/>
                                </div>
                                <div className="flex-1 w-full">
                                    <JourneyContent2 id='goto'/>
                                </div>
                            </div>
                            <div className="flex-1 h-full">
                                <JourneyContent id='bb'/>
                            </div>
                        </div>
                    </div>

                    <div className={`absolute fixed top-0 right-0 w-screen h-screen bg-[#121212] z-40 translate-x-0 overflow-hidden ${!loading ? 'translate-x-[-100%]' : 'translate-x-0 delay-700'} transition-transform duration-1000 ease-out`}>
                        <Loading />
                    </div>
                </div>
            }
        </div>
    );
}

export default About;