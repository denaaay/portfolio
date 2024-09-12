import ContentTitle from "../components/ContentTitle";
import NavButton from "../components/NavButton";
import ProjectsContent from "../components/ProjectsContent";
import GithubIcon from '../assets/icon/github.png';

function Portfolio(){
    const tech1 = ['golang', 'javascript', 'dart', 'python', 'html', 'css', 'sql']
    const tech2 = ['rest', 'gin', 'gorm', 'node', 'express', 'react', 'flutter', 'tailwind', 'bootstrap', 'mysql', 'postgres', 'mongodb', 'redis']
    const tech3 = ['git', 'vscode', 'postman', 'figma', 'pgadmin']

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
        <div className="w-[85%] h-[90%] flex justify-between gap-10">
            {/* Portfolio */}
            <div className="flex-[6] h-full flex flex-col justify-between gap-8">
                <ContentTitle title='projects'/>

                {/* Content */}
                <div className="w-full h-full bg-projectBackground bg-cover bg-center rounded-lg">
                    <div className="w-full h-full rounded-lg bg-shadow flex flex-col">
                        <div className="flex-1 w-full rounded-t-lg flex items-center">
                            <div className="flex-1"></div>
                            <div className="flex-[2] h-full rounded-tr-lg bg-projectMojaveBackground bg-cover bg-center cursor-pointer hover:bg-zoomContent transition-all duration-500" onClick={() => handleClick('mojave')}>
                                <div className="w-full h-full rounded-tr-lg bg-shadow flex justify-center items-center">
                                    <p className="font-bold text-4xl">MOJAVE HOME</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full flex items-center">
                            <div className="flex-1 h-full bg-projectKanbanBackground bg-cover bg-center cursor-pointer hover:bg-zoom transition-all duration-500" onClick={() => handleClick('kanban')}>
                                <ProjectsContent id='kanban'/>
                            </div>
                            <div className="flex-1 h-full bg-projectTokpedBackground bg-cover bg-center cursor-pointer hover:bg-zoomContent transition-all duration-500" onClick={() => handleClick('tokped')}>
                                <ProjectsContent id='tokped'/>
                            </div>
                            <div className="flex-1 h-full"></div>
                        </div>
                        <div className="flex-1 w-full rounded-b-lg flex items-center">
                            <div className="flex-1 h-full"></div>
                            <div className="flex-1 h-full bg-projectGacoanBackground bg-cover bg-center cursor-pointer hover:bg-zoom transition-all duration-500" onClick={() => handleClick('gacoan')}>
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
                <ContentTitle title='technology'/>

                {/* Content */}
                <div className="w-full h-full flex flex-col justify-between items-start">
                    {/* Skills */}
                    <div className="w-full h-full flex flex-col justify-start items-start gap-8">
                        {/* Programming Languages */}
                        <div className="w-full flex flex-wrap gap-3">
                            {tech1.map((tech, index) => {
                                return <div key={index} className="px-4 py-2 bg-element1 text-secondary rounded">
                                    {tech}
                                </div>
                            })}
                        </div>

                        {/* Framework */}
                        <div className="w-full flex flex-wrap gap-3">
                            {tech2.map((tech, index) => {
                                return <div key={index} className="px-4 py-2 bg-element2 text-secondary rounded">
                                    {tech}
                                </div>
                            })}
                        </div>

                        {/* Tools */}
                        <div className="w-full flex flex-wrap gap-3">
                            {tech3.map((tech, index) => {
                                return <div key={index} className="px-4 py-2 bg-element1 text-secondary rounded">
                                    {tech}
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full h-max flex justify-end">
                    <NavButton page='portfolio'/>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;