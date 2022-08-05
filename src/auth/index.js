import jwt_decode from 'jwt-decode';

export const getUser = (token) => {
  const decoded = jwt_decode(token);
  const userId = decoded.userId.toString();
  return userId;
};