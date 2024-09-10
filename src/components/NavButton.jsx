function NavButton(props) {
    return(
        <div className="w-max h-max flex justify-center items-center gap-4 text-secondary">
            {props.home !== true && <div className="w-max h-max text-xl font-thin py-2 px-6 rounded border-secondary border-[1px] cursor-pointer hover:text-primary hover:bg-secondary transition duration-500">
                <p>prev</p>
            </div>}
            <div className="w-max h-max text-xl font-thin py-2 px-6 rounded border-secondary border-[1px] cursor-pointer hover:text-primary hover:bg-secondary transition duration-500">
                {props.contact === true ? <p>home</p> : <p>next</p>}
            </div>
        </div>
    );
}

export default NavButton;