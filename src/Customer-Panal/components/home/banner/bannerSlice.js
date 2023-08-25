import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../../server';
export const bannerApi = createApi({
    reducerPath: 'bannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${base_url}` }),
    endpoints: (builder) => ({
        getBanner: builder.query({
            query: () => ({
                url: 'banner',
                method: 'GET'
            })
        }),
    })
})
export const { useGetBannerQuery } = bannerApi;