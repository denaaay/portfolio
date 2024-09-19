import { useEffect, useState } from 'react';

function Loading() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, []);

    return(
        <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
            <div className={`w-full ${loading ? 'opacity-70' : 'opacity-0'} transition-opacity duration-1000 ease-linear flex justify-center items-center`}>
                <p className='text-white font-bold text-5xl'>dfahrony</p>
            </div>
        </div>
    );
}

export default Loading;