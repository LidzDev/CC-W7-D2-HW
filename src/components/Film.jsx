const Film = ({children, url}) => {

    return (
        <>
            <li><a href={url}>{children}</a></li>
        </>
    )
}

export default Film