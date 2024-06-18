import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `auth/user/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["refetch"],
    }),
    getUsers: builder.query({
      query: () => "/auth/users",
      providesTags:['refetch']
    }),
    logout: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/logout",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useUpdateUserMutation,
  useGetUsersQuery
} = authApi;
