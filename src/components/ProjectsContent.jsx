function ProjectsContent(props) {
    return(
        <div className="w-full h-full bg-shadow flex justify-center items-center">
            {props.id === 'kanban' &&
                <div className="w-max h-max flex flex-col justify-center items-center">
                    <p className="font-bold text-4xl">KANBAN</p>
                    <p className="font-bold text-4xl">APP</p>
                </div>
            }

            {props.id === 'tokped' &&
                <div className="w-max h-max flex flex-col justify-center items-center">
                    <p className="font-bold text-4xl">TOKOPEDIA</p>
                    <p className="font-bold text-4xl">PLAY</p>
                </div>
            }

            {props.id === 'gacoan' &&
                <div className="w-max h-max flex flex-col justify-center items-center">
                    <p className="font-bold text-4xl">GACOAN</p>
                    <p className="font-bold text-4xl">DELIVERY</p>
                </div>
            }
        </div>
    );
}

export default ProjectsContent;