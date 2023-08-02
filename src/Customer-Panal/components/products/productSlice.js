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
    profileData: null
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
    setCart: builder.mutation({
      query: (payload) => ({
        url: `cart`,
        method: "POST",
        body: payload,
        headers: {
          "content-type": "application/json; charset=UTF-8",
          // authorization: `Bearer ${token1}`,
        },
      }),
      invalidatesTags: ['CartType']
    }),
    offlineAddPost: builder.mutation({
      query: (data) => ({
        url: `/cart/offline/add`,
        method: "POST",
        body: data
      }),
    }),


    sendCombo: builder.mutation({
      query: (data) => ({
        url: `cart/combo`,
        method: "POST",
        body: data
      }),
    }),
    // Wishlist
    setWishList: builder.mutation({
      query: (payload) => ({
        url: `product/wishlist`,
        method: "POST",
        body: payload
      }),
      invalidatesTags: ['Wishlist', 'wishUpdate']
    }),







    // for all apis do this

    getProducts: builder.query({
      query: () => ({
        url: `product`,
        method: "GET",
      }),
    }),

    getProductDetail: builder.query({
      query: (val) => ({
        url: `product/public/${val.proid + '&' + val.userid}`,
        method: "GET",
      }),
      providesTags: ['wishUpdate']
    }),

    getAllStatusOrders: builder.query({
      query: () => ({
        url: 'orderStatusMaster',
        method: 'GET'
      })
    }),

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

    // Cart
    setCart: builder.mutation({
      query: (payload) => ({
        url: `cart`,
        method: "POST",
        body: payload,
        headers: {
          "content-type": "application/json; charset=UTF-8",
          authorization: `Bearer ${token1}`,
        },
      }),
      invalidatesTags: ['CartType']
    }),

    // Cart
    setCartSingle: builder.mutation({
      query: (payload) => ({
        url: `order/temp_single`,
        method: "POST",
        body: {
          product: payload.product_id,
          products: [],
          variant: "64194f09cc684ae2fc9ba58d",
          count: 5,
          Seller: "ETG",
          Amount: "100",
          Delivery_Status: "Pending",
          Payment_method: "COD",
          Payment_Status: "Unpaid",
          orderStatus: "Not Processed",
          userid: payload.user_id,
        },
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token1}`,
        },
      }),
    }),

    setCartTempt: builder.mutation({
      query: (data) => (
        {
          url: `order/temp_cart`,
          method: "POST",
          body: data,
        }
      ),
      invalidatesTags: ['orders', 'CartType']

    }),

    quantityCart: builder.mutation({
      query: (payload) => ({
        url: `updateById_Cart/${payload.id}`,
        method: "POST",
        body: payload.data,

      }),
    }),

    clearAllList: builder.mutation({
      query: (payload) => {
        return {
          url: `cart/empty-cart`,
          method: "DELETE",
          body: {
            userid: payload
          }
        }
      },
      invalidatesTags: ['CartType']

    }),

    deleteData: builder.mutation({
      query: (data) => ({
        url: `cart/${data.id}`,
        method: "DELETE",
        body: {
          userid: data.userid
        }
      }),
      invalidatesTags: ['CartType'],
    }),

    getCart: builder.query({
      query: (id) => (
        {
          url: `cart/${id}`,
          method: "GET",
        }
      ),
      providesTags: ['CartType'],
      // keepUnusedDataFor: 1
    }),

    setQuantityCart: builder.mutation({
      query: (paylode) => (
        {
          url: `cart/updateById_Cart/${paylode.id}`,
          method: "POST",
          body: paylode.data,
        }
      )
    }),

    // Wishlist
    setWishList: builder.mutation({
      query: (payload) => ({
        url: `product/wishlist`,
        method: "POST",
        body: payload
      }),
      invalidatesTags: ['Wishlist', 'wishUpdate']
    }),
    getWishList: builder.query({
      query: (userid) => {
        console.log('whishlist--')
        return {
          url: `user/wishlist/${userid}`,
          method: "GET",
        }
      },
      providesTags: ['Wishlist']
    }),
    deleteWishlist: builder.mutation({
      query: (val) => ({
        url: `product/wishlist/delete_wishlist/${val.id}`,
        method: "DELETE",
        body: {
          userid: val.userId
        }
      }),
      invalidatesTags: ['Wishlist']
    }),

    // get orderHistory

    getOrderHistory: builder.query({
      query: (id) => ({
        url: `order/getorderbyuser/${id}`,
        method: "GET",
      }),
      providesTags: ['orders']
    }),


    // Login
    setRegister: builder.mutation({
      query: (payload) => ({
        url: `user/register`,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),

    setLogin: builder.mutation({
      query: (payload) => ({
        url: `user/login`,
        method: "POST",
        body: payload,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          // "auth" : `Bearer ${token1}`
        },
      }),
    }),

    getCategories: builder.query({
      query: () => `category`,
    }),
    getBrands: builder.query({
      query: () => `brand`,
    }),
    getSizes: builder.query({
      query: () => `size`,
    }),

    // Pickup points
    getPickUpPoints: builder.query({
      query: () => ({
        url: `pickupPoints`,
        method: "GET",
        // headers: {
        //   "Content-type": "application/json; charset=UTF-8",
        //   Authorization: `Bearer ${token1}`,
        // },
      }),
    }),

    getPickUpPointsById: builder.query({
      query: (id) => ({
        url: `pickupPoints/${id}`,
        method: "GET",
      }),
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

    getTrendingProduct: builder.query({
      query: () => ({
        url: `trending`,
        method: "GET",
      }),
      providesTags: ['Trending']
    }),

    // featured prducts

    getFeaturedProduct: builder.query({
      query: () => ({
        url: `product/featured`,
        method: "GET",
      }),
      providesTags: ['Featured']
    }),

    getOrderDetail: builder.query({
      query: (id) => ({
        url: `order/getOrderById/${id}`,
        method: "GET",
      }),
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

    // Menu list 
    getMenuList: builder.query({
      query: (id) => ({
        url: `category/filter`,
        method: "GET",
      }),
    }),

    // INCquantity

    IncCount: builder.mutation({
      query: (paylode) => ({
        url: `cart/updateById_Cart/${paylode.id}`,
        method: "POST",
        body: {
          userid: paylode.userid,
          count: paylode.count
        }
      }),
      invalidatesTags: ['CartType']
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


    // GET Catogary Produts
    getCategoriesProduct: builder.query({
      query: (id) => ({
        url: `product/category/${id}`,
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

    //Coupons Api
    getCoupon: builder.mutation({
      query: (coopon) => ({
        url: `cart/coupon`,
        method: "POST",
        body: {
          userid: coopon.id,
          coupon_id: coopon.value
        }
      }),
      invalidatesTags: ['CartType']
    }),

    //Seller Add
    addSeller: builder.mutation({
      query: (data) => ({
        url: `sellerList/add_sellers`,
        method: "POST",
        body: data
      }),
    }),

    loginSeller: builder.mutation({
      query: (data) => ({
        url: `sellerList/add_sellers`,
        method: "POST",
        body: data
      }),
    }),

    listSellers: builder.query({
      query: () => ({
        url: `sellerList`,
        method: "GET",
      }),
    }),

    SellerDetail: builder.query({
      query: (id) => ({
        url: `sellerList/${id}`,
        method: "GET",
      }),
    }),

    // List Alll Brand
    ListAllBrand: builder.query({
      query: () => ({
        url: `brand/public`,
        method: "GET",
      }),
    }),

    brandProduct: builder.query({
      query: (id) => ({
        url: `product/brand/${id}`,
        method: "GET",
      }),
    }),

    // Gallary List
    getGallaryList: builder.query({
      query: (id) => ({
        url: `photoGallery`,
        method: "GET",
      }),
    }),

    // VideoGallery List
    getVideoGallery: builder.query({
      query: (id) => ({
        url: `videoGallery`,
        method: "GET",
      }),
    }),

    //Faqs
    getFaqsList: builder.query({
      query: (id) => ({
        url: `faqs`,
        method: "GET",
      }),
    }),

    // contactMessage
    contactMessage: builder.mutation({
      query: (data) => ({
        url: `contactMessage/add_ContactMessage`,
        method: "POST",
        body: data
      }),

    }),

    // Review Product
    reviewProduct: builder.mutation({
      query: (data) => ({
        url: `rating/add_Rating`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ['review']
    }),

    getReviews: builder.query({
      query: (val) => ({
        url: `rating/product/${val.proid}&${val.variant_id}`,
        method: "GET",
      }),
      providesTags: ['review']
    }),

    filterReviewbyRate: builder.mutation({
      query: (data) => ({
        url: `rating/filtering`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ['review']
    }),


    // Blogs Apis
    getBlogs: builder.query({
      query: () => ({
        url: `blogs`,
        method: "GET",
      }),
      providesTags: ['blog']
    }),

    getBlogDetails: builder.query({
      query: (id) => ({
        url: `blogs/${id}`,
        method: "GET",
      }),
      providesTags: ['blog']
    }),


    //privacyPolicy
    getPrivacyPolicy: builder.query({
      query: () => ({
        url: `privacyPolicy/singlePrivacyPolicy`,
        method: "GET",
      }),
      providesTags: ['privacyPolicy']
    }),


    //termsCondition

    getTermsCondition: builder.query({
      query: () => ({
        url: `termsCondition/singleTermsAndCondition`,
        method: "GET",
      }),
      providesTags: ['termsCondition']
    }),

    // blogs catagarys

    getBlogCat: builder.query({
      query: () => ({
        url: `blogsCat`,
        method: "GET",
      }),
      providesTags: ['blogCat']
    }),



    getRevireBlog: builder.query({
      query: (id) => ({
        url: `reviews/blogs/${id}`,
        method: "GET",
      }),
      providesTags: ['reviewBlog']
    }),

    sendCommentBlogs: builder.mutation({
      query: (data) => ({
        url: `reviews/blogs`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ['reviewBlog']
    }),


    sendLinke: builder.mutation({
      query: (id) => ({
        url: `reviews/like/${id}`,
        method: "POST",
        body: { userid }
      }),
      invalidatesTags: ['reviewBlog']
    }),

    //getLanguage 
    getLanguage: builder.query({
      query: (id) => ({
        url: `language`,
        method: "GET",
      }),
    }),
    //getcurrency
    getCurrency: builder.query({
      query: (id) => ({
        url: `currency`,
        method: "GET",
      }),
    }),

    // change language and currency 

    changeCurrency: builder.mutation({
      query: (data) => ({
        url: `user/currency`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ['User']
    }),

    changeLanguage: builder.mutation({
      query: (data) => ({
        url: `user/language`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ['User']
    }),

    // pickstock 

    pickupStock: builder.mutation({
      query: (data) => ({
        url: `productStocks/filter`,
        method: "POST",
        body: data
      }),
    }),

    postCartOffline: builder.mutation({
      query: (data) => ({
        url: `cart/offlineCart`,
        method: "POST",
        body: data
      }),
      invalidatesTags: ['CartType'],
    }),


    // offline Add 
    offlineAddPost: builder.mutation({
      query: (data) => ({
        url: `/cart/offline/add`,
        method: "POST",
        body: data
      }),
    }),

    // offline CartList
    offlineCartList: builder.mutation({
      query: (data) => ({
        url: `cart/offline`,
        method: "POST",
        body: data
      }),
      providesTags: ['updateOffline']
    }),

    // offline cartUpdate 
    offlineCartUpdate: builder.mutation({
      query: (paylode) => ({
        url: `cart/updateById_CartOffline/${paylode.id}`,
        method: "POST",
        body: paylode.data
      }),
      invalidatesTags: ['updateOffline']
    }),


    sendRma: builder.mutation({
      query: (data) => ({
        url: `rma/requestRMA`,
        method: "POST",
        body: data
      }),
    }),


    sendCombo: builder.mutation({
      query: (data) => ({
        url: `cart/combo`,
        method: "POST",
        body: data
      }),
    }),


  }),
});
export const {
  useSetWishListMutation,
  useSendComboMutation,
  useOfflineAddPostMutation,
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
  useSetCartMutation,


  
  useGetAllStatusOrdersQuery,
  useSendRmaMutation,
  useOfflineCartUpdateMutation,
  useOfflineCartListMutation,
  useChangeCurrencyMutation,
  usePickupStockMutation,
  useChangeLanguageMutation,
  useGetCurrencyQuery,
  useGetLanguageQuery,
  useSendLinkeMutation,
  useSendCommentBlogsMutation,
  useGetRevireBlogQuery,
  useGetBlogCatQuery,
  useGetTermsConditionQuery,
  useGetPrivacyPolicyQuery,
  useGetBlogDetailsQuery,
  useGetBlogsQuery,
  useFilterReviewbyRateMutation,
  useGetReviewsQuery,
  useReviewProductMutation,
  useContactMessageMutation,
  useGetVideoGalleryQuery,
  useGetFaqsListQuery,
  useGetGallaryListQuery,
  useBrandProductQuery,
  useListAllBrandQuery,
  useSellerDetailQuery,
  useListSellersQuery,
  useAddSellerMutation,
  useGetCouponMutation,
  useGetBrandsQuery,
  useGetCategoriesQuery,
  useGetSizesQuery,
  useGetProductsQuery,
  useSetRegisterMutation,
  useSetLoginMutation,
  useGetCartQuery,
  useGetPickUpPointsQuery,
  useSetCartSingleMutation,
  useGetProductDetailQuery,
  useSetCartTemptMutation,
  useClearAllListMutation,
  useDeleteDataMutation,
  useQuantityCartMutation,
  useSetQuantityCartMutation,
  useGetWishListQuery,
  useDeleteWishlistMutation,
  useGetOrderHistoryQuery,
  useGetPickUpPointsByIdQuery,
  useGetTrendingProductQuery,
  useGetFeaturedProductQuery,
  useGetOrderDetailQuery,
  useGetMenuListQuery,
  useIncCountMutation,
  usePostCartOfflineMutation,
} = productsApi;
export const { clearUpdatedProduct, setCartLists, setTodayDeal, setIslogin, setCartCalc, getProducts, setTrendingProduct, setFeachers, setUpdatedProducts, changeCountInProduct, setObjectVal, clereCartLitsItem, setCartLeng, setProfile } = productListSlice.actions;
export default productListSlice.reducer