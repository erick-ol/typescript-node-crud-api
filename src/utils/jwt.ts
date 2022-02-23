import jwt from 'jsonwebtoken';
import JwtUser from '../interfaces/jwt';

const JWT_SECRET = 'asd234ASE#$@ASDq234';

const sign = (payload: JwtUser, duration = '1h') =>
  jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: duration,
  });

const verify = (token: string) =>
  jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });

export default { sign, verify };

// Baseado no arquivo da aula sobre JWT
// https://github.com/tryber/sd-014-c-live-lectures/blob/lecture/24.3/
