import jwt from 'jsonwebtoken';
import config from "../../config.mjs";
const authenticateToken = (req, res, next) => {
    let token = req.headers['authorization'];
    // console.log("Token:", token);
    token = token.split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: "failed", error: "Please login to access this resource" });
    }
    jwt.verify(token, config.secretToken, (err, decodedToken) => {
        if (err) {
            return res.status(401).send({ message: "failed", error: "Invalid credentials" });
        }
        req.user = decodedToken;
        next();
    });
};

export { authenticateToken };