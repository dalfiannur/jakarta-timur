export type EntityResponse<T> = {
  meta: {
    code: number;
    status: string;
    message: string;
  };
  data: T;
};
