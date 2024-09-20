import ContentTitle from "../components/ContentTitle";
import NavButton from "../components/NavButton";
import CommingSoon from "../components/CommingSoon";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function Contact() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }, []);

    const handleClick = (route) => {
        if (route === 'in') {
            window.open('https://www.linkedin.com/in/dfahrony/', '_blank');
        } else if (route === 'yt') {
            window.open('https://youtube.com/@dfahrony1218?si=XX_CjDl9ayv4Xfi1', '_blank');
        } else if (route === 'ig') {
            window.open('https://instagram.com/dfahrony', '_blank');
        } else if (route === 'git') {
            window.open('https://github.com/denaaay', '_blank');
        }
    }
    
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            {window.matchMedia("(max-width: 1024px)").matches ? 
                <CommingSoon /> :
                <div className="w-[85%] h-[90%] flex justify-between gap-10">
                    {/* Contact */}
                    <div className="flex-[2] h-full flex flex-col justify-between gap-12">
                        <ContentTitle title='get in touch with me' isLoading={loading} delay={'delay-[500ms]'}/>

                        {/* Content */}
                        <div className="w-full h-full flex flex-col justify-start items-start">
                            {/* Content Description */}
                            <div className="w-full h-max delay-[4700ms]" data-aos="fade-right" data-aos-duration="700" data-aos-easing="linear">
                                <p className="text-xl text-secondary font-medium">Available for discussion, collaboration, or just to say hello. Please catch me down here.</p>
                            </div>

                            {/* Contact List */}
                            <div className="w-full h-full flex flex-col justify-center items-start gap-6 text-xl text-secondary">
                                {/* Linkedin */}
                                <div className="w-max px-4 py-2 bg-element1 rounded cursor-pointer hover:bg-secondary hover:text-primary transition duration-700 delay-[5000ms]" onClick={() => handleClick('in')} data-aos="fade-right" data-aos-duration="700" data-aos-easing="linear">
                                    linkedin @dfahrony
                                </div>

                                {/* Youtube */}
                                <div className="w-max px-4 py-2 bg-element2 rounded cursor-pointer hover:bg-secondary hover:text-primary transition duration-700 delay-[5300ms]" data-aos="fade-right" data-aos-duration="700" data-aos-easing="linear" onClick={() => handleClick('yt')}>
                                    youtube @DFahrony
                                </div>

                                {/* Instagram */}
                                <div className="w-max px-4 py-2 bg-element1 rounded cursor-pointer hover:bg-secondary hover:text-primary transition duration-700 delay-[5600ms]" data-aos="fade-right" data-aos-duration="700" data-aos-easing="linear" onClick={() => handleClick('ig')}>
                                    instagram @dfahrony
                                </div>

                                {/* Github */}
                                <div className="w-max px-4 py-2 bg-element2 rounded cursor-pointer hover:bg-secondary hover:text-primary transition duration-700 delay-[5900ms]" data-aos="fade-right" data-aos-duration="700" data-aos-easing="linear" onClick={() => handleClick('git')}>
                                    github @denaaay
                                </div>

                                {/* Mail */}
                                <div className="w-max px-4 py-2 bg-element1 rounded delay-[6200ms]" data-aos="fade-right" data-aos-duration="700" data-aos-easing="linear">
                                    mail dfahrony7@gmail.com
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-max flex justify-start">
                            <NavButton page='contact' isLoading={loading}/>
                        </div>
                    </div>

                    {/* Additional Image */}
                    <div className="flex-[3] h-full rounded-xl bg-projectBackground bg-center bg-cover relative">
                        <div className="w-full h-full bg-shadow bg-center flex">
                            <div className="flex-1 flex flex-col">
                                <div className="flex-1"></div>
                                <div className="flex-[2] rounded-bl-xl bg-journeyUnej bg-center bg-cover bg-zoom delay-[7600ms]" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="linear">
                                </div>
                            </div>
                            <div className="flex-[2] flex flex-col">
                                <div className="flex-1 rounded-tr-xl bg-journeyBB bg-center bg-cover delay-[7000ms]" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear">
                                </div>
                                <div className="flex-1 flex">
                                    <div className="flex-1 bg-journeyGoto bg-center bg-cover delay-[7900ms]" data-aos="flip-up" data-aos-duration="1000" data-aos-easing="linear"></div>
                                    <div className="flex-1"></div>
                                </div>
                                <div className="flex-1 rounded-br-xl bg-journeyBB2 bg-center bg-cover delay-[7300ms]" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear"></div>
                            </div>
                        </div>
                    </div>

                    <div className={`absolute fixed top-0 right-0 w-screen h-screen bg-black z-40 translate-x-0 overflow-hidden ${!loading ? 'translate-x-[-100%]' : 'translate-x-0 delay-700'} transition-transform duration-1000 ease-out`}>
                        <Loading />
                    </div>
                </div>
            }
        </div>
    );
}

export default Contact;