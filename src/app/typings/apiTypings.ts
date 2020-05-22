export interface PaginatedApiResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}
