import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const token1 = window.localStorage.getItem("token");


const userid = window.localStorage.getItem("user_id");
const productListSlice = createSlice({
  name: 'productList',
  initialState: {
    products: [],
    updatedProducts: [],
    object: null,
    feacerProduct: null,
    trendingProduct: null,
    todayDeal: null,
    cartCal: null,
    islogin: null,
    cartLists: [],
    cartLengh: 0,
    profileData:null
  },
  reducers: {
    setProfile: (state, data) => {
      state.profileData = data.payload
    },
    setCartLeng: (state, data) => {
      state.cartLengh = data.payload
    },
    getProducts: (state, data) => {
      state.products = data.payload
    },
    setUpdatedProducts: (state, data) => {
      state.updatedProducts = data.payload.products
    },
    setCartCalc: (state, data) => {
      state.cartCal = data.payload
    },
    changeCountInProduct: (state, data) => {
      state.updatedProducts = data.payload
      // console.log(data.payload);
    },
    setObjectVal: (state, data) => {
      state.object = data.payload
    },
    setFeachers: (state, data) => {
      state.feacerProduct = data.payload
    },
    setTrendingProduct: (state, data) => {
      state.trendingProduct = data.payload
    },
    setTodayDeal: (state, data) => {
      state.todayDeal = data.payload
    },
    setIslogin: (state, data) => {
      state.islogin = data.payload
    },
    clearUpdatedProduct: (state, data) => {
      state.updatedProducts = []
    },
    setCartLists: (state, data) => {
      state.updatedProducts = data.payload
    },
    clereCartLitsItem: (state, data) => {
      state.updatedProducts = data.payload
    },
  }
})

export const productsApi = createApi({

  reducerPath: "productsApi",

  baseQuery: fetchBaseQuery({ baseUrl: `https://onlineparttimejobs.in/api/` }),
  tagTypes: ['CartType', 'wishUpdate', 'Shipping', 'Wishlist', 'updateOffline', 'Trending', 'Featured', 'billAdd', 'BillAdd', 'User', 'billing', 'shipping', 'review', 'blog', 'blogCat', 'reviewBlog'],
  endpoints: (builder) => ({

    // User Details
    getUserDetail: builder.query({
      query: (id) => ({
        url: `user/${id}`,
        method: "GET",
      }),
      providesTags: ['User']
    }),
    editUserDetail: builder.mutation({
      query: (data) => (
        {
          url: `user/edit-user`,
          method: "PUT",
          body: data
        }
      ),
      invalidatesTags: ['User']
    }),


    // billing detail
    addAddressDetail: builder.mutation({
      query: (payload) => ({
        url: `shippingAddress/add_shippingAddresss`,
        method: "POST",
        body: payload
      }),
      invalidatesTags: ['shipping']
    }),

    getShiipingAdd: builder.query({
      query: (id) => ({
        url: `shippingAddress/customer/${id}`,
        method: "GET",
      }),
      providesTags: ['shipping']
    }),

    deleteShipping: builder.mutation({
      query: (id) => ({
        url: `shippingAddress/delete_shippingAddresss/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['shipping']
    }),

    //Billing Add
    postBillAddres: builder.mutation({
      query: (paylode) => ({
        url: `user/register/billAddress`,
        method: "POST",
        body: paylode
      }),
      invalidatesTags: ['billing']
    }),

    getBillingAdd: builder.query({
      query: (id) => ({
        url: `shippingAddress/customer/${id}`,
        method: "GET",
      }),
      providesTags: ['billing']
    }),

    // shipping Add

    getShippingAdd: builder.query({
      query: (id) => ({
        url: `shippingAddress/customer/shipping/${userid}`,
        method: "GET",
      }),
      providesTags: ['shipping']
    }),

    shippingAdd: builder.mutation({
      query: (paylode) => ({
        url: `shippingAddress/customer/shipping/${userid}`,
        method: "POST",
        body: paylode
      }),
      invalidatesTags: ['Shipping']
    }),

    getAddressDetail: builder.query({
      query: (id) => ({
        url: `shippingAddress/${id}`,
        method: "GET",
      }),
      providesTags: ['shipping']
    }),
    setEditedAddres: builder.mutation({
      query: (paylode) => ({
        url: `user/register/billAddress`,
        method: "PUT",
        body: paylode

      }),
      invalidatesTags: ['billing']
    }),

    //GET active billling adress
    getActiveBilling: builder.query({
      query: (id) => ({
        url: `user/getActiveBillAddress/${id}`,
        method: "GET",
      }),
    }),


    // updateShipping and billing
    setBillingActive: builder.mutation({
      query: (val) => ({
        url: `user/updateSelectedBillingAddress`,
        method: "PUT",
        body: {
          userid: val.userid,
          ship_id: val.itemId
        }
      }),
    }),
  }),
});
export const {
  useSetBillingActiveMutation,
  useGetActiveBillingQuery,
  useSetEditedAddresMutation,
  useGetAddressDetailQuery,
  useAddAddressDetailMutation,
  useGetShiipingAddQuery,
  useDeleteShippingMutation,
  usePostBillAddresMutation,
  useGetUserDetailQuery,
  useEditUserDetailMutation,
  useGetBillingAddQuery,
  useGetShippingAddQuery,
} = productsApi;
export const { clearUpdatedProduct, setCartLists, setTodayDeal, setIslogin, setCartCalc, getProducts, setTrendingProduct, setFeachers, setUpdatedProducts, changeCountInProduct, setObjectVal, clereCartLitsItem, setCartLeng,setProfile } = productListSlice.actions;
export default productListSlice.reducer