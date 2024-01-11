
const MenuItem = ({language, setLanguage, setOpen}) => {
    const update = () => { 
        setLanguage(language);
        setOpen(false);
    }
    return (
        <li><a onClick={update}>{language}</a></li>
    )
}

export default MenuItem
