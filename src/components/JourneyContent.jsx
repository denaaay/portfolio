import FotoUnej from '../assets/images/journey/fotoUnej.png';
import FotoBB from '../assets/images/journey/fotoBB.png'

function JourneyContent(props) {
    return(
        <div className={`w-full h-full rounded-lg ${props.id === 'unej' ? 'bg-journeyUnej bg-zoom' : 'bg-journeyBB'} bg-cover bg-center`}>
            <div className="w-full h-full rounded-lg bg-shadow relative">
                {/* Role Title And Image */}
                <div className="absolute w-full h-max rounded-b-lg bottom-0 flex flex-col items-center">
                    <div className="w-full h-[40vh] flex">
                        {props.id === 'unej' ? <img src={FotoUnej} alt="fotoUnej.png" className='w-full h-full object-cover'/>
                        : <img src={FotoBB} alt="fotoUnej.png" className='w-full h-full object-cover'/>}
                    </div>
                    <div className="w-full h-max bg-element1 rounded-b-lg flex flex-col justify-center items-center py-4">
                        <p className="font-bold text-3xl">{props.id === 'unej' ? 'INFORMATION' : 'GOLANG'}</p>
                        <p className="font-bold text-3xl">{props.id === 'unej' ? 'TECHNOLOGY' : 'ENGINEER'}</p>
                    </div>
                </div>

                {/* Shadow */}
                <div className="absolute w-full h-full z-10 bg-element1 opacity-30"></div>

                {/* Title */}
                <div className="absolute w-full h-max flex flex-col justify-center items-center py-4 top-0 z-0">
                    <p className="font-bold text-3xl">{props.id === 'unej' ? 'UNIVERSITY OF' : 'BLUEBIRD'}</p>
                    <p className="font-bold text-6xl">{props.id === 'unej' ? 'JEMBER' : 'GROUP'}</p>
                </div>
            </div>
        </div>
    );
}

export default JourneyContent;