import { rest, setupWorker } from 'msw';
import { hundlers } from './hundlers';

const worker = setupWorker(...hundlers);
worker.start();

export { worker, rest };
