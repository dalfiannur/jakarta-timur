export type PaginationRequest = {
  page?: number;
  limit?: number;
};

export type PaginationResponse<T> = {
  meta: {
    code: number;
    status: string;
    message: string;
  };
  data: PaginationResult<T>;
};

export type PaginationResult<T> = {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string;
    label: string;
    active: boolean;
  }[];
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};
