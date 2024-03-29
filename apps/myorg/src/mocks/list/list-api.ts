import { rest } from 'msw';

export const listApiMocks = [
  rest.get(`*/api/list`, async (req, res, ctx) => {
    const pageSize = req.url.searchParams.get('pageSize');
    const currentPage = req.url.searchParams.get('currentPage');

    const response = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 12, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 15, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 22, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 25, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 31, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 32, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 33, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 34, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 35, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 36, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 37, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 38, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 39, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 40, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];

    const ret = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      list: [{} as any],
      paginator: { pageSize, currentPage, length: response.length },
    };
    if (pageSize && currentPage) {
      ret.list = response.slice(
        (Number(currentPage) - 1) * Number(pageSize),
        Number(currentPage) * Number(pageSize)
      );
    } else {
      ret.list = response;
    }
    return res(ctx.delay(1000), ctx.status(200), ctx.json(ret));
  }),
];
