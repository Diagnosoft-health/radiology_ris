import jwt from "jsonwebtoken"

const KEY = 'hmskjgvfcfgjknklmnkn'

export default function (req, res) {

    if (!req.body) {
        res.statusCode = 404
        res.end('Error')
        return
    }

    const { email, password } = req.body
    
    res.json ({
        token: jwt.sign(
            {
                email,
                radiologist: email === "johndoe@email.com" && password==="radiologist"
            },
            KEY
        )
    })

    

    
}