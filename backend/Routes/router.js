const express = require('express');
const { useResolvedPath } = require('react-router-dom');
const router = express.Router()
const {Configuration, OpenAIApi} = require("openai");
const e = require('express');
const config = new Configuration({ 
    apiKey: "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"
})
const openai = new OpenAIApi(config);

let users = []

router.get('/users', (req, res) => { 
    res.send(users);
})

// router.post('/ai', (req, res)=> { 
//     const prompt = req.body["prompt"]
    
//     const timeComplexityAnalysis = async () => { 
//         const completion = await openai.createCompletion({
//             model: "text-davinci-003", 
//             temperature: 0, 
//             max_tokens: 400,
//             prompt: prompt,
//         })
//         res.send(completion.data.choices[0].text);

//     }
//     timeComplexityAnalysis();


// })

router.post('/users', (req, res) => { 
    if (req.body["ai"]) { 
        const prompt = req.body["prompt"]
    
        const timeComplexityAnalysis = async () => { 
            const completion = await openai.createCompletion({
                model: "text-davinci-003", 
                temperature: 0, 
                max_tokens: 400,
                prompt: prompt,
            })
            res.send(completion.data.choices[0].text);

        }
        timeComplexityAnalysis();



    } else { 

    
        
        let seen = false;
        let index = 0;
        for (; index < users.length; index++) { 
            let user = users[index]
            if ((user["email"] === req.body.email)) { 
                res.send("0");
                seen = true;
                break;
            }
        }
        if (!seen) { 
            users.push(req.body);
            res.send("1");
        }
    }
    
})
module.exports = router