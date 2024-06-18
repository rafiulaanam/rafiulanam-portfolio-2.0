import { baseApi } from "../../api/baseApi";

const paginationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQueryProduct: builder.query({
            query: (page) => `/product?page=${page}`,
            providesTags:['refetch']
          }),
      
      }),
})

export const {useGetQueryProductQuery}= paginationApi