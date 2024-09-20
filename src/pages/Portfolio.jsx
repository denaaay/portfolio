import ContentTitle from "../components/ContentTitle";
import NavButton from "../components/NavButton";
import ProjectsContent from "../components/ProjectsContent";
import GithubIcon from '../assets/icon/github.png';
import CommingSoon from "../components/CommingSoon";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

function Portfolio(){
    const [loading, setLoading] = useState(true);
    const [hoverLoading, setHoverLoading] = useState(false);
    const tech1 = ['golang', 'javascript', 'dart', 'python', 'html', 'css', 'sql']
    const tech2 = ['rest', 'gin', 'gorm', 'node', 'express', 'react', 'flutter', 'tailwind', 'bootstrap', 'mysql', 'postgres', 'mongodb', 'redis']
    const tech3 = ['git', 'vscode', 'postman', 'figma', 'pgadmin']

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 4000);

        setTimeout(() => {
            setHoverLoading(true);
        }, 5000)
    }, []);

    const handleClick = (route) => {
        if (route === 'mojave') {
            window.open('https://www.mojavehome.com/', '_blank');
        } else if (route === 'kanban') {
            window.open('https://github.com/denaaay/kanban-app', '_blank');
        } else if (route === 'tokped') {
            window.open('https://github.com/denaaay/tokopedia-play-be', '_blank');
        } else if (route === 'gacoan') {
            window.open('https://www.figma.com/design/ohZEyLK4IpWXbD5EFTGz2N/PBM-B4?node-id=0-1&t=hhLmiCtAuoEC5dFw-1', '_blank');
        }
    }

    return(
        <div className="w-screen h-screen flex justify-center items-center">
            {window.matchMedia("(max-width: 1024px)").matches ? 
                <CommingSoon /> :
                <div className="w-[85%] h-[90%] flex justify-between gap-10">
                    {/* Portfolio */}
                    <div className="flex-[6] h-full flex flex-col justify-between gap-8">
                        <ContentTitle title='projects' isLoading={loading} delay={'delay-[500ms]'}/>

                        {/* Content */}
                        <div className="w-full h-full bg-projectBackground bg-cover bg-center rounded-lg">
                            <div className="w-full h-full rounded-lg bg-shadow flex flex-col">
                                <div className="flex-1 w-full rounded-t-lg flex items-center">
                                    <div className="flex-1"></div>
                                    <div data-aos="flip-up" data-aos-duration="1000" data-aos-easing="linear" className={`flex-[2] h-full rounded-tr-lg bg-projectMojaveBackground bg-cover bg-center cursor-pointer hover:bg-zoomContent transition-all duration-700 delay-[4700ms]`} onClick={() => handleClick('mojave')}>
                                        <div className="w-full h-full rounded-tr-lg bg-shadow flex justify-center items-center">
                                            <p className="font-bold text-4xl">MOJAVE HOME</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 w-full flex items-center">
                                    <div className="flex-1 h-full bg-projectKanbanBackground bg-cover bg-center cursor-pointer hover:bg-zoom transition-all duration-700 delay-[4900ms]" onClick={() => handleClick('kanban')} data-aos="flip-up" data-aos-duration="1000" data-aos-easing="linear">
                                        <ProjectsContent id='kanban'/>
                                    </div>
                                    <div className="flex-1 h-full bg-projectTokpedBackground bg-cover bg-center cursor-pointer hover:bg-zoomContent transition-all duration-700 delay-[5100ms]" onClick={() => handleClick('tokped')} data-aos="flip-up" data-aos-duration="1000" data-aos-easing="linear">
                                        <ProjectsContent id='tokped'/>
                                    </div>
                                    <div className="flex-1 h-full"></div>
                                </div>
                                <div className="flex-1 w-full rounded-b-lg flex items-center">
                                    <div className="flex-1 h-full"></div>
                                    <div className="flex-1 h-full bg-projectGacoanBackground bg-cover bg-center cursor-pointer hover:bg-zoom transition-all duration-700 delay-[5300ms]" onClick={() => handleClick('gacoan')} data-aos="flip-up" data-aos-duration="1000" data-aos-easing="linear">
                                        <ProjectsContent id='gacoan'/>
                                    </div>
                                    <div className="flex-1 h-full flex justify-center items-center">
                                        <img src={GithubIcon} alt="github.png" className="h-[70%] object-cover"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[3] h-full flex flex-col justify-between gap-8">
                        <ContentTitle title='technology' isLoading={loading} delay={'delay-[1700ms]'}/>

                        {/* Content */}
                        <div className="w-full h-full flex flex-col justify-between items-start">
                            {/* Skills */}
                            <div className="w-full h-full flex flex-col justify-start items-start gap-8">
                                {/* Programming Languages */}
                                <div className="w-full flex flex-wrap gap-3 delay-[5700ms]" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear">
                                    {tech1.map((tech, index) => {
                                        return <div key={index} className="px-4 py-2 bg-element1 text-secondary rounded">
                                            {tech}
                                        </div>
                                    })}
                                </div>

                                {/* Framework */}
                                <div className="w-full flex flex-wrap gap-3 delay-[6000ms]" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear">
                                    {tech2.map((tech, index) => {
                                        return <div key={index} className="px-4 py-2 bg-element2 text-secondary rounded">
                                            {tech}
                                        </div>
                                    })}
                                </div>

                                {/* Tools */}
                                <div className="w-full flex flex-wrap gap-3 delay-[6300ms]" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="linear">
                                    {tech3.map((tech, index) => {
                                        return <div key={index} className="px-4 py-2 bg-element1 text-secondary rounded">
                                            {tech}
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-max flex justify-end">
                            <NavButton page='portfolio' isLoading={loading}/>
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

export default Portfolio;