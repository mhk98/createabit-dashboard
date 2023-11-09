import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CategoryApi = createApi({
  reducerPath: "CategoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
    // baseUrl: "https://createabit-backend.onrender.com/api/v1/",
  }),

  tagTypes: ["category"], // Define the tag type
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (category) => ({
        url: "/category/create-category",
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["category"],
    }),

    updateCategory: build.mutation({
      query: ({ id, data }) => ({
        url: `/category/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),

    deleteCategory: build.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),

    getAllCategory: build.query({
      query: () => ({
        url: "/category",
      }),
      providesTags: ["category"],

      //   refetchOnMountOrArgChange: true,
      //   pollingInterval: 1000,
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = CategoryApi;
