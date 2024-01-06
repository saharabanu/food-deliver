import { baseApi } from "./baseApi";

export const PRODUCT_URL = "/Item?page=1&pageSize=10";

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // all Books
    getAllProducts: build.query({
      query: (arg) => {
        return {
          url: PRODUCT_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response, meta) => {
        return {
          products: response,
          meta,
        };
      },
      providesTags: ["products"],
    }),
  }),
});

export const { useGetAllProductsQuery } = productApi;
