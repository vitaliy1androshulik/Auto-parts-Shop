import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { APP_ENV } from "../env"; // або шлях до ваших змінних середовища
import {
    ISparePart,
    IProducer,
    IProvider,
    ICategory,
    ISubCategory,
} from "../pages/Category/types.ts"; // Шлях до вашого файлу з інтерфейсами

export const apiParts = createApi({
    reducerPath: "apiParts",
    baseQuery: fetchBaseQuery({
        baseUrl: `${APP_ENV.REMOTE_BASE_URL}api/Parts/all`, // Базова адреса вашого API
    }),

    tagTypes: ["SpareParts", "Producers", "Providers", "Categories", "SubCategories"],

    endpoints: (builder) => ({
        // ========================= SPARE PARTS =========================
        getSpareParts: builder.query<ISparePart[], void>({
            query: () => "spareparts", // GET /api/spareparts
            providesTags: ["SpareParts"],
        }),
        getSparePart: builder.query<ISparePart, number>({
            query: (id) => `spareparts/${id}`, // GET /api/spareparts/:id
            providesTags: (_result, _error, id) => [{ type: "SpareParts", id }],
        }),
        createSparePart: builder.mutation<ISparePart, Partial<ISparePart>>({
            query: (body) => ({
                url: "spareparts", // POST /api/spareparts
                method: "POST",
                body,
            }),
            invalidatesTags: ["SpareParts"],
        }),
        updateSparePart: builder.mutation<
            ISparePart,
            Partial<ISparePart> & Pick<ISparePart, "id">
        >({
            query: ({ id, ...rest }) => ({
                url: `spareparts/${id}`, // PUT /api/spareparts/:id
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "SpareParts", id }],
        }),
        deleteSparePart: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `spareparts/${id}`, // DELETE /api/spareparts/:id
                method: "DELETE",
            }),
            invalidatesTags: ["SpareParts"],
        }),

        // ========================= PRODUCERS =========================
        getProducers: builder.query<IProducer[], void>({
            query: () => "producers",
            providesTags: ["Producers"],
        }),
        getProducer: builder.query<IProducer, number>({
            query: (id) => `producers/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Producers", id }],
        }),
        createProducer: builder.mutation<IProducer, Partial<IProducer>>({
            query: (body) => ({
                url: "producers",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Producers"],
        }),
        updateProducer: builder.mutation<
            IProducer,
            Partial<IProducer> & Pick<IProducer, "id">
        >({
            query: ({ id, ...rest }) => ({
                url: `producers/${id}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "Producers", id }],
        }),
        deleteProducer: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `producers/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Producers"],
        }),

        // ========================= PROVIDERS =========================
        getProviders: builder.query<IProvider[], void>({
            query: () => "providers",
            providesTags: ["Providers"],
        }),
        getProvider: builder.query<IProvider, number>({
            query: (id) => `providers/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Providers", id }],
        }),
        createProvider: builder.mutation<IProvider, Partial<IProvider>>({
            query: (body) => ({
                url: "providers",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Providers"],
        }),
        updateProvider: builder.mutation<
            IProvider,
            Partial<IProvider> & Pick<IProvider, "id">
        >({
            query: ({ id, ...rest }) => ({
                url: `providers/${id}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "Providers", id }],
        }),
        deleteProvider: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `providers/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Providers"],
        }),

        // ========================= CATEGORIES =========================
        getCategories: builder.query<ICategory[], void>({
            query: () => "categories",
            providesTags: ["Categories"],
        }),
        getCategory: builder.query<ICategory, number>({
            query: (id) => `categories/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Categories", id }],
        }),
        createCategory: builder.mutation<ICategory, Partial<ICategory>>({
            query: (body) => ({
                url: "categories",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Categories"],
        }),
        updateCategory: builder.mutation<
            ICategory,
            Partial<ICategory> & Pick<ICategory, "id">
        >({
            query: ({ id, ...rest }) => ({
                url: `categories/${id}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "Categories", id }],
        }),
        deleteCategory: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `categories/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Categories"],
        }),

        // ========================= SUBCATEGORIES =========================
        getSubCategories: builder.query<ISubCategory[], void>({
            query: () => "subcategories",
            providesTags: ["SubCategories"],
        }),
        getSubCategory: builder.query<ISubCategory, number>({
            query: (id) => `subcategories/${id}`,
            providesTags: (_result, _error, id) => [{ type: "SubCategories", id }],
        }),
        createSubCategory: builder.mutation<ISubCategory, Partial<ISubCategory>>({
            query: (body) => ({
                url: "subcategories",
                method: "POST",
                body,
            }),
            invalidatesTags: ["SubCategories"],
        }),
        updateSubCategory: builder.mutation<
            ISubCategory,
            Partial<ISubCategory> & Pick<ISubCategory, "id">
        >({
            query: ({ id, ...rest }) => ({
                url: `subcategories/${id}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: (_result, _error, { id }) => [
                { type: "SubCategories", id },
            ],
        }),
        deleteSubCategory: builder.mutation<{ success: boolean }, number>({
            query: (id) => ({
                url: `subcategories/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["SubCategories"],
        }),
    }),
});

// ======================= ЕКСПОРТ ХУКІВ =========================

export const {
    // SpareParts
    useGetSparePartsQuery,
    useGetSparePartQuery,
    useCreateSparePartMutation,
    useUpdateSparePartMutation,
    useDeleteSparePartMutation,

    // Producers
    useGetProducersQuery,
    useGetProducerQuery,
    useCreateProducerMutation,
    useUpdateProducerMutation,
    useDeleteProducerMutation,

    // Providers
    useGetProvidersQuery,
    useGetProviderQuery,
    useCreateProviderMutation,
    useUpdateProviderMutation,
    useDeleteProviderMutation,

    // Categories
    useGetCategoriesQuery,
    useGetCategoryQuery,
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation,

    // SubCategories
    useGetSubCategoriesQuery,
    useGetSubCategoryQuery,
    useCreateSubCategoryMutation,
    useUpdateSubCategoryMutation,
    useDeleteSubCategoryMutation,
} = apiParts;