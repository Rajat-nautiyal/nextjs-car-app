import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

export const signToken = (payload:object,expiresIn:string='1h'):string =>{
    return jwt.sign(payload,SECRET_KEY,{expiresIn})
}
export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};
