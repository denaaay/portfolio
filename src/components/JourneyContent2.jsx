import FotoRG from '../assets/images/journey/fotoRG.png';
import FotoGoto from '../assets/images/journey/fotoGoto.png'

function JourneyContent2(props) {
    return(
        <div className={`w-full h-full rounded-lg ${props.id === 'rg' ? 'bg-journeyRG delay-[6300ms]' : 'bg-journeyGoto delay-[6500ms]'} bg-cover bg-center`} data-aos="flip-down" data-aos-duration="1000" data-aos-easing="linear">
            <div className="w-full h-full rounded-lg bg-shadow relative">
                {/* Role Title And Image */}
                <div className="absolute w-full h-full rounded-b-lg bottom-0 flex flex-col items-center">
                    <div className={`w-full h-full flex justify-center items-center ${props.id === 'goto' && 'bg-gotoShadow rounded-t-lg'}`}>
                        {props.id === 'rg' ? <img src={FotoRG} alt="fotoUnej.png" className='w-[50%] h-max object-cover'/>
                        : <img src={FotoGoto} alt="fotoUnej.png" className='w-[80%] h-max object-cover'/>}
                    </div>
                    <div className="w-full h-max bg-element1 rounded-b-lg flex flex-col justify-center items-center py-4">
                        <p className="font-bold text-3xl">{props.id === 'rg' ? 'BACKEND' : 'FULLSTACK'}</p>
                        <p className="font-bold text-3xl">ENGINEER</p>
                    </div>
                </div>

                {/* Shadow */}
                <div className="absolute w-full h-full z-10 bg-element1 opacity-30"></div>
            </div>
        </div>
    );
}

export default JourneyContent2;