import { baseApi } from "../../api/baseApi";

interface ApiResponse {
  data: SoldHistory[]; // Assuming the sold history records are returned in a 'data' array
}

interface SoldHistory {
  _id: number;
  buyerName: string;
  quantitySold: number;
  SellDate: string; // Assuming there's a sale date
  // Add other relevant fields specific to sold history
}

interface SoldHistoryQueryParams {
  index?: string;
  order?: 'asc' | 'desc';
  [key: string]:string | undefined; // This allows for any number of additional properties of any type
}

const soldHistoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSoldHistory: builder.mutation({
      query: (historyInfo) => ({
        url: "/sell",
        method: "POST",
        body: historyInfo,
      }),
      invalidatesTags:['refetch']
    }),
    getSoldHistories: builder.query({
      query: ({page,filter}) => `/sell?page=${page}&filter=${filter}`,
      providesTags:['refetch']
    }),
    getSingleSoldHistory: builder.query({
      query: (id) => `/soldHistory/${id}`,
      providesTags:['refetch']
    }),
    removeSoldHistory: builder.mutation({
      query: (id) => ({
        url: `/soldHistory/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:['refetch']
    }),
    updateSoldHistory: builder.mutation({
      query: ({id, data}) => ({
        url: `/soldHistory/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags:['refetch']
    }),
    getSoldHistoryByIndex: builder.query<ApiResponse, SoldHistoryQueryParams>({
      query: (params = {}) => {
        const { index, order, ...otherParams } = params;

        let queryString = '/soldHistories';
        const queryParts: string[] = [];

        if (index) queryParts.push(`_sort=${encodeURIComponent(index)}`);
        if (order) queryParts.push(`_order=${encodeURIComponent(order)}`);

        for (const [key, value] of Object.entries(otherParams)) {
          if (value !== undefined) {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
          }
        }

        if (queryParts.length > 0) {
          queryString += `?${queryParts.join('&')}`;
        }

        return queryString;
      },
    }),
    // Assuming logout is user-specific and not directly related to the sold history itself.
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useCreateSoldHistoryMutation,
  useGetSoldHistoriesQuery,
  useGetSingleSoldHistoryQuery,
  useRemoveSoldHistoryMutation,
  useUpdateSoldHistoryMutation,
  useGetSoldHistoryByIndexQuery,
  useLogoutMutation, // Kept as is if logout is generic and not specifically for products or sold history
} = soldHistoryApi;
