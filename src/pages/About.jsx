import NavButton from "../components/NavButton";
import MailIcon from '../assets/icon/mail.png';
import ContentTitle from "../components/ContentTitle";
import JourneyContent from "../components/JourneyContent";
import JourneyContent2 from "../components/JourneyContent2";
import CommingSoon from "../components/CommingSoon";

function About() {
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            {window.matchMedia("(max-width: 1024px)").matches ? 
                <CommingSoon /> :
                <div className="w-[85%] h-[90%] flex justify-between gap-10">
                    {/* About Me */}
                    <div className="flex-[2] h-full flex flex-col justify-between gap-8">
                        <ContentTitle title="about me"/>

                        {/* Description */}
                        <div className="w-full flex-1 flex flex-col justify-between">
                            <p className="text-xl text-justify font-thin leading-8">A graduate of the University of Jember's Faculty of Computer Science, I have a strong foundation in programming and a passion for creating efficient and scalable solutions. With a keen attention to detail and a problem-solving mindset, I thrive in a collaborative environment and enjoy tackling complex challenges in the field of software development.</p>
                            <div className="w-full h-max flex justify-between items-center">
                                <div className="h-[35px]">
                                    <img src={MailIcon} alt="mail.png" className="w-full h-full"/>
                                </div>
                                <p className="text-xl font-thin">dfahrony7@gmail.com</p>
                            </div>
                        </div>

                        {/* Navigation Button */}
                        <NavButton page='about'/>
                    </div>

                    {/* Journey */}
                    <div className="flex-[6] h-full flex flex-col justify-between gap-8">
                        <ContentTitle title="journey"/>

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
                </div>
            }
        </div>
    );
}

export default About;