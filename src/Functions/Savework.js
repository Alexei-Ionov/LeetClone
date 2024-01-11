const Savework = (completion_stage, id, auth, setAuth, code, language) => {
    // const {setAuth} = useContext(AuthContext);
    let new_auth = auth;
    new_auth["problems"][id][0] = completion_stage;
    new_auth["problems"][id][1] = code;
    new_auth["problems"][id][2] = language;
    setAuth(new_auth);
    window.localStorage.setItem('LEETCLONE_AUTH', JSON.stringify(new_auth));
}

export default Savework
