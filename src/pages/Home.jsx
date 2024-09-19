import profileTitle from '../assets/images/profileTitle.png';
import NavButton from '../components/NavButton';
import CommingSoon from '../components/CommingSoon';
import Loading from '../components/Loading';
import { useEffect, useState } from 'react';

function Home() {
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

    const handleDownload = () => {
        window.open('../src/assets/file/resume.pdf', '_blank')

        // Membuat elemen <a> untuk mendownload file PDF
        const link = document.createElement('a');
        link.href = '../src/assets/file/resume.pdf'; // Path ke file PDF
        link.download = 'Resume-Deni_Fahrony.pdf'; // Nama file yang akan diunduh
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <div className='w-screen h-screen flex justify-center items-center'>
            {window.matchMedia("(max-width: 1024px)").matches ? 
                <CommingSoon /> :
                <div className="w-[85%] h-[97%] flex flex-col justify-between items-center gap-4">
                    {/* Title */}
                    <div className="w-full h-max py-2 flex justify-between items-center">
                        <p className="font-bold text-xl">dfahrony</p>
                        <button className="text-lg border-secondary border-[1px] rounded px-4 py-1 cursor-pointer hover:bg-secondary hover:border-transparent hover:text-primary transition duration-500" onClick={handleDownload}>download cv</button>
                    </div>

                    {/* Content */}
                    <div className="w-full flex-1 rounded-xl bg-homeImage bg-cover bg-center">
                        <div className="w-full h-full rounded-xl flex">
                            {/* Left Content */}
                            <div className="w-full h-full flex-1 rounded-l-xl bg-homeImageShadowLeft">
                                <div className="w-full h-full rounded-l-xl flex flex-col justify-between items-start pl-6 py-6">
                                    {/* Title */}
                                    <div className="w-[45%] h-max">
                                        <img src={profileTitle} alt="profileTitle.png" />
                                    </div>

                                    {/* Social Media Button */}
                                    <div className='w-max h-[50px] relative'>
                                        <div className='absolute w-[50px] h-[50px] border-[1px] border-secondary rounded-full bg-transparent bottom-0 left-0 flex justify-center items-center cursor-pointer hover:bg-secondary hover:text-primary transition duration-500' onClick={() => handleClick('in')}>
                                            <p className='text-xl font-thin'>in</p>
                                        </div>
                                        <div className='absolute w-[50px] h-[50px] border-[1px] border-secondary rounded-full bg-transparent bottom-0 left-[40px] flex justify-center items-center cursor-pointer hover:bg-secondary hover:text-primary transition duration-500' onClick={() => handleClick('yt')}>
                                            <p className='text-xl font-thin'>yt</p>
                                        </div>
                                        <div className='absolute w-[50px] h-[50px] border-[1px] border-secondary rounded-full bg-transparent bottom-0 left-[80px] flex justify-center items-center cursor-pointer hover:bg-secondary hover:text-primary transition duration-500' onClick={() => handleClick('ig')}>
                                            <p className='text-xl font-thin'>ig</p>
                                        </div>
                                        <div className='absolute w-[50px] h-[50px] border-[1px] border-secondary rounded-full bg-transparent bottom-0 left-[120px] flex justify-center items-center cursor-pointer hover:bg-secondary hover:text-primary transition duration-500' onClick={() => handleClick('git')}>
                                            <p className='text-xl font-thin'>git</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Right Content */}
                            <div className="w-full h-full flex-1 rounded-r-xl bg-homeImageShadowRight">
                                <div className="w-full h-full rounded-l-xl flex flex-col justify-between items-end pr-6 py-6 font-bold tracking-wider">
                                    {/* Name and Detail */}
                                    <div className='w-full h-max flex flex-col justify-start items-end text-8xl'>
                                        <p>Deni</p>
                                        <p>Fahrony</p>
                                        <div className='w-[65%] h-max rounded bg-primary bg-opacity-30 mt-10 p-4'>
                                            <p className='font-semibold text-sm text-right leading-6'>I am a motivated and skilled backend engineer specializing in Golang and full stack engineer using MERN stack.</p>
                                        </div>
                                    </div>

                                    {/* Navigation Button */}
                                    <NavButton page='home'/>
                                </div>
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

export default Home;