import { baseApi } from "../../api/baseApi";
interface ApiResponse {
  data: project[]; // Assuming the projects are returned in a 'data' array
}

interface project {
  data:object
  _id: number;
  name: string;
  price: number;
  // add other relevant fields
}

interface projectQueryParams {
  index?: string;
  order?: 'asc' | 'desc';
  [key: string]: string | undefined; // This allows for any number of additional string-indexed properties
}
const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: "/blog",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['refetch']
    }),
    getBlogItems: builder.query({
      query: () => "/blog",
      providesTags:['refetch']
    }),
    getBlogById: builder.query({
      query: (id) => `/blog/${id}`,
      providesTags:['refetch']
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/${id}`,
        method: "DELETE"
      }),
      invalidatesTags:['refetch']
    }),




    
    removeprojectByIds: builder.mutation({
      query: (ids) => ({
        url: `/project-many`,
        method: "DELETE",
        body:ids
      }),
      invalidatesTags:['refetch']
    }),
    updateBlog: builder.mutation({
      query: ({id,data}) => ({
        url: `/project/${id}`,
        method: "PUT",
        body:data
      }),
      invalidatesTags:['refetch']
    }),
    getprojectByFilter: builder.query({
      query: (searchQuery) => ({
        url: `/project?${searchQuery}`,
        providesTags:['refetch']
        }),
      
    }),
    getprojectByIndex: builder.query<ApiResponse, projectQueryParams>({
      query: (params = {}) => {
        const { index, order, ...otherParams } = params;

        // Start with the base URL
        let queryString = '/projects';

        // Array to hold query string parts
        const queryParts: string[] = [];

        // Add parameters if they exist
        if (index) queryParts.push(`_sort=${encodeURIComponent(index)}`);
        if (order) queryParts.push(`_order=${encodeURIComponent(order)}`);

        // Add any additional parameters
        for (const [key, value] of Object.entries(otherParams)) {
          if (value !== undefined) { // Check if the value is not undefined
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
          }
        }

        // Combine the query parts with '&' and append to the base URL
        if (queryParts.length > 0) {
          queryString += `?${queryParts.join('&')}`;
        }

        return queryString;
      },
    }),
    logout: builder.mutation({
      query: (projectInfo) => ({
        url: "/project/logout",
        method: "POST",
        body: projectInfo,
      }),
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useGetBlogItemsQuery,
  useGetBlogByIdQuery,
  useUpdateBlogMutation,
  useDeleteBlogMutation,


  useLogoutMutation,
  // useGetprojectByIndexQuery,
  
  useGetprojectByFilterQuery,
  useRemoveprojectByIdsMutation
} = blogApi;
