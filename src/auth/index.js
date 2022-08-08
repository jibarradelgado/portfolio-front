import jwt_decode from 'jwt-decode';

export const getUser = (token) => {
  const decoded = jwt_decode(token);
  const userId = decoded.userId.toString();
  return userId;
};

export const getAuth = (token) => {
  const decoded = jwt_decode(token);
  const authId = decoded._id.toString();
  return authId;
};