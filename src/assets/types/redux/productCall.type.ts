export type StartGetProductsType = {
  type: "START_GET_PRODUCTS";
  url: string;
}
export type GetProductsType =  {
  type: "GET_PRODUCTS";
  payload: any
}
export type CreateErrorType =  {
  type: "CREATE_ERROR",
  payload: any
}