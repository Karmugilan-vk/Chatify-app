import jwt from "jsonwebtoken"

export const  generateToken = (userId,res) => {
    const { JWT_SECRET } = process.env;
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not configured");
    }

    const token = jwt.sign({ userId },JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true, // prevent XSS attacks: cross-site scripting
        sameSite: "strict", //CSRF attacks
        secure: process.env.NODE_ENV === "development" ? false : true,
    });

    return token;
};