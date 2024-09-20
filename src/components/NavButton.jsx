import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function NavButton(props) {
    const [hoverLoading, setHoverLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setHoverLoading(true);
        }, 5000)
    }, [])

    const handleClick = (nav) => {
        if (nav === 'next') {
            if (props.page === 'home') {
                navigate('/about');
            } else if (props.page === 'about') {
                navigate('/portfolio')
            } else if (props.page === 'portfolio') {
                navigate('/contact')
            } else if (props.page === 'contact') {
                navigate('/')
            }
        } else if (nav === 'prev') {
            navigate(-1);
        }
    }

    return(
        <div className="w-max h-max flex justify-center items-center gap-4 text-secondary">
            {props.page !== 'home' && <div className={`w-max h-max text-xl font-thin py-2 px-6 rounded border-secondary border-[1px] cursor-pointer hover:text-primary hover:bg-secondary transition duration-700 ${props.isLoading ? 'opacity-0' : 'opacity-100'} ${hoverLoading ? 'delay-0 duration-500' : props.page === 'about' ? 'delay-[1300ms]' : props.page === 'portfolio' ? 'delay-[2800ms]' : props.page === 'contact' && 'delay-[2700ms]'}`} onClick={() => handleClick('prev')}>
                <p>prev</p>
            </div>}
            <div className={`w-max h-max text-xl font-thin py-2 px-6 rounded border-secondary border-[1px] cursor-pointer hover:text-primary hover:bg-secondary transition duration-700 ${props.isLoading ? 'opacity-0' : 'opacity-100'} ${hoverLoading ? 'delay-0 duration-500' : props.page === 'home' ? 'delay-[1900ms]' : props.page === 'about' ? 'delay-[1500ms]' : props.page === 'portfolio' ? 'delay-[3000ms]' : props.page === 'contact' && 'delay-[2900ms]'}`} onClick={() => handleClick('next')}>
                {props.page === 'contact' ? <p>home</p> : <p>next</p>}
            </div>
        </div>
    );
}

export default NavButton;