function ContentTitle(props) {
    return(
        <p className={`font-bold text-3xl ${props.isLoading ? 'opacity-0' : 'opacity-100'} ${props.delay} transition duration-1000`}>{props.title}</p>
    );
}

export default ContentTitle;