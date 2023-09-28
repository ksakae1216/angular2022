export interface Paginator {
  pageSize: number;
  currentPage: number;
  pageSizeOptions: number[];
  length?: number;
}
