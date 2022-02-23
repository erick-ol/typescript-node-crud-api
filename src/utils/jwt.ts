import jwt from 'jsonwebtoken';

const JWT_SECRET = 'asd234ASE#$@ASDq234';

interface Payload {
  id: number;
  username: string;
}

const sign = (payload: Payload, duration = '1h') =>
  jwt.sign(payload, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: duration,
  });

const verify = (token: string) =>
  jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });

export default { sign, verify };

// Baseado no arquivo da aula sobre JWT
// https://github.com/tryber/sd-014-c-live-lectures/blob/lecture/24.3/
