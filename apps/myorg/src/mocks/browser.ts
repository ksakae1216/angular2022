import { setupWorker, rest } from 'msw';

export const mocks = [
  rest.get('https://hoge.com/users/:user', (req, res, ctx) => {
    const { user } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        name: `mocked-${user}`,
      })
    );
  }),
];

const worker = setupWorker(...mocks);
worker.start();

export { worker, rest };
