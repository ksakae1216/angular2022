import { rest } from 'msw';

export const loginApiMocks = [
  rest.post(`*/api/login`, async (req, res, ctx) => {
    const body = await req.json();

    let status = 200;

    if (body.loginId !== 'test' || body.password !== 'Password1') {
      status = 400;
    }

    return res(
      ctx.delay(2000),
      ctx.status(status),
      ctx.json({
        accessToken: '123456abcde',
        userName: 'TEST 太郎',
      })
    );
  }),
];
