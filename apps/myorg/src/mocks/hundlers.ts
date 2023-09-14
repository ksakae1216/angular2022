import { listApiMocks } from './list/list-api';
import { loginApiMocks } from './login/login-api';

export const hundlers = [...loginApiMocks, ...listApiMocks];
