import axios from "axios";
const GetTimeComplexity = async(code, language) => { 
    const url = 'http://localhost:4000/users';
    const req = `Please return an array containing the time complexities in big-O notation for each line of code in the code below given in ${language}: {\n}${code}`
    const to_ai = `Please give a brief analysis of the time complexity of this code in ${language} in big-O notation: {\n}${code}`
    const new_req = `Please return the original code but on each line of code enter a comment for that line's time complexity in big-O notation. Properly format the resulting code using "\n" for each new line of code. The language used is ${language} and the code is: {\n}${code}`
    const info = { 
        prompt: to_ai, 
        ai: true
    }
    try { 
        const res = await axios.post(url, info);
        
        return res.data;
    } catch (err) { 
        console.log(err) 
    }
}

export default GetTimeComplexity