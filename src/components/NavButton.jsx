import { useNavigate } from "react-router-dom";

function NavButton(props) {
    const navigate = useNavigate();

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
            {props.page !== 'home' && <div className="w-max h-max text-xl font-thin py-2 px-6 rounded border-secondary border-[1px] cursor-pointer hover:text-primary hover:bg-secondary transition duration-500" onClick={() => handleClick('prev')}>
                <p>prev</p>
            </div>}
            <div className="w-max h-max text-xl font-thin py-2 px-6 rounded border-secondary border-[1px] cursor-pointer hover:text-primary hover:bg-secondary transition duration-500" onClick={() => handleClick('next')}>
                {props.page === 'contact' ? <p>home</p> : <p>next</p>}
            </div>
        </div>
    );
}

export default NavButton;