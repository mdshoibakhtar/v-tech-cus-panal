import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import ShippingConfigurationAdmin from "../../Components/addNewProductsComponents/ShippingConfigurationAdmin";
import { useEditProductMutation, useForm_variatioMutation, useGetAttributesQuery, useGetBrandsQuery, useGetCategoriesQuery, useGetPickupPointQuery, useGetProductByIdQuery, useGetSellersQuery, useGetUnitMasterQuery } from "../../Components/all-products/allproductsApi/allProductsApi";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import ToggleStatus from "../toggleStatus/ToggleStatus";
import ProductDescriptionWrapper from "../productDescriptionWrapper/productDescriptionWrapper";
import ProductsVariation from "../addNewProductsComponents/ProductsVariation";
import { MultiselectOption } from "../../common/MultiSelectOption";
import { AttributeItem } from "../addNewProductsComponents/AttributeItem";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
let sendPayload = [];
function EditProducts() {


    const [featuredval, setFeaturedval] = useState(false)
    const [tags, setTags] = useState([]);
    const [sizeTags, setSizeTags] = useState([]);
    const [variationArr, setVariationArr] = useState([]);
    // const [categ, setCateg] = useState([]);
    const [finalCatD, setFinalCatD] = useState();
    const { data: categ } = useGetCategoriesQuery();
    const { data: sellerD } = useGetSellersQuery()
    const { data: unitMast } = useGetUnitMasterQuery()

    const params = useParams();
    const { data: productData, isSuccess, isLoading } = useGetProductByIdQuery(params.id);

    const { data: attributesData } = useGetAttributesQuery()

    const [form_variatio, { data: variationsData, isLoading: isVariantLoading, isError: formvariantError, isSuccess: sussVari }] = useForm_variatioMutation();

    useEffect(() => {
        if (isVariantLoading) {
            setVariationArr(variationsData)
        }
    }, [isVariantLoading])

    const [allAttributes, setAllAttributes] = useState(null);
    const getAttributes = (attributes) => {
        setAllAttributes([...attributes])
    }

    const [sendbox, setSendox] = useState()

    const getChoiceValues = (choiceValues, currentAttr) => {


        let flag = true;
        if (sendPayload.length) {
            sendPayload.map((item, i) => {
                if (item.id === currentAttr.id) {
                    sendPayload.splice(i, 1, currentAttr)
                    flag = false;
                }
            })
            if (flag) {
                sendPayload.push(currentAttr)
            }
        } else {
            sendPayload.push(currentAttr)
        }
        const filteredData = sendPayload?.filter(item => item.data.length)
        if (filteredData.length) {
            form_variatio({ attributes: filteredData, variations: variationArr })
        }
        setSendox(filteredData)
        if (!filteredData?.length) {
            // setVariationArr([])  
        }

    }

    useEffect(() => {
        if (sussVari) {
            setVariationArr(variationsData)
            return
        }
        setVariationArr(variationsData)
    }, [sussVari])




    const [inputval, setInputVal] = useState({
        todays_deal: false,
        featured: false,
        cash_on_delivery: false,
        show_stock_quantity: false,
        show_stock_with_text_only: false,
        hide_stock: false,
        low_stock_quantity: false,
        trending: false,
        // products information
        name: '',
        user_id: '63e6579c455104434981d8da',
        // category_id: '',
        // category_id: [],
        brand_id: '642d51f2a94153a958c06be4',
        unit_price: '',
        // weight: "",
        minimum_purchase_qty: '',
        tags: [],
        barcode: '',
        hsn_code: '',
        sale_rp: '',
        share_rp: '',
        refundable: '',
        // products images
        gallery_image: '',
        thumbnail_image: '',
        // product vedios
        vedio_provider: '',
        video_link: '',
        variations: [],
        attributes: '',
        size: '',
        current_stock: '',
        minimum_order_qty: '',
        shipping_cost: '',
        // Product price & stock
        // price: '',
        purchase_price: '',
        variant: '',
        variant_price: '',
        quantity: '',
        total_quantity: '',
        minimum_order_quantity: '',
        shipping_cost: '',
        Shipping_cost_multiply_with_quantity: '',
        slug: '',
        mrp: '',
        purchase_rate: '',
        sale_rate: '',
        tax: '',
        discount: '',
        discount_type: '',
        sku: '',
        pickup_points: '',
        current_qty: '',
        // seo meta tags
        meta_title: '',
        meta_description: '',
        meta_img: '',
        // low stock quantity
        Quantity: '',
        flash_discount: '',
        unit: ""
    });

    const brandData = useGetBrandsQuery();


    const onChangeHandler = (e) => {
        let slug = e.target.value + new Date().getUTCMilliseconds();
        const inpName = e.target.name;
        const inpVal = e.target.value;
        let tempPickList = JSON.parse(JSON.stringify(variationArr));

        if (inpName === 'discount') {

            tempPickList.map((item, i) => {
                if (item._id == e.target.getAttribute('data_id'))
                    return item[inpName] = inpVal
            })
            tempPickList.map((item, i) => {
                if (item._id == e.target.getAttribute('data_id'))
                    return item.sale_rate = item.mrp - e.target.value
            })

            const newVariationArr = [...tempPickList]
            setVariationArr(newVariationArr);
            const clonedObj = { ...inputval, slug };
            clonedObj[inpName] = inpVal;
            setInputVal(clonedObj);


        } else {


            tempPickList.map((item, i) => {
                if (item._id == e.target.getAttribute('data_id'))
                    return item[inpName] = inpVal
            })

            const newVariationArr = [...tempPickList]
            setVariationArr(newVariationArr);
            const clonedObj = { ...inputval, slug };
            clonedObj[inpName] = inpVal;
            setInputVal(clonedObj);
        }


    };


    const onchengePhotoHandel = (e) => {
        const clonedObj = { ...inputval };
        const inpName = e.target.name;
        const inpVal = e.target.files[0];
        clonedObj[inpName] = inpVal;
        setInputVal(clonedObj)
    }
    const submitEditProductData = async () => {
        const clonedObj = { ...inputval, variations: variationArr, tags: tags, category_id: finalCatD, variation_Form: sendbox };
        setInputVal(clonedObj);


        const url = `https://onlineparttimejobs.in/api/product/${params.id}`
        const formData = new FormData();

        formData.append('name', clonedObj.name);
        // formData.append('gallery_image', clonedObj.gallery_image);
        // formData.append('thumbnail_image', clonedObj.thumbnail_image);
        formData.append('brand_id', inputval.brand_id);
        formData.append('seller_id', clonedObj.seller_id);
        formData.append('shipping_cost', clonedObj.shipping_cost);
        formData.append('tags', clonedObj.tags);
        formData.append('category_id', clonedObj.category_id);
        formData.append('slug', clonedObj.slug);
        // formData.append('hsn_code', clonedObj.hsn_code);
        // formData.append('sale_rp', clonedObj.sale_rp);
        // formData.append('share_rp', clonedObj.share_rp);

        formData.append('variations', JSON.stringify(variationArr));
        formData.append('images', JSON.stringify(clonedObj.images));
        formData.append('variation_Form', JSON.stringify(clonedObj.variation_Form));
        formData.append('productDescription', JSON.stringify(clonedObj.productDescription))

        console.log(clonedObj);
        try {
            const res = await axios.put(url, formData);
            toastSuccessMessage()
        } catch (error) {
            alert('!Error Product not Edited')
        }

    };



    function handleTagKeyDown(e) {
        if (e.key !== 'Enter') return
        const value = e.target.value
        if (!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    };
    const removetagTag = (index) => [
        setTags(tags.filter((el, i) => i !== index))
    ];


    const toastSuccessMessage = () => {
        toast.success("Product Edited Successfully", {
            position: "top-center"
        })
    };

    // const { data: pickUp } = useGetPickupPointQuery();


    useEffect(() => {
        if (params.id && productData) {
            sendPayload = []
            const obj = { ...productData }
            setInputVal({ ...obj, brand_id: obj?.brand_id?._id })
            setFinalCatD([obj?.category_id[0]?._id])
            setTags(obj.tags)
            const weights = obj.variations.map((variation) => variation.weight)
            setSizeTags(weights);
            setVariationArr(obj.variations);
            setAllAttributes(obj.variation_Form)
        }
    }, [isSuccess, productData])

    const changeStatus = (isStatus, key) => {
        const clonedInputVal = { ...inputval }
        clonedInputVal[key] = isStatus;
        setInputVal(clonedInputVal)
    }

    useEffect(() => {
        if (formvariantError) {
            alert('Attributes not Valid')
        }
    }, [formvariantError])


    return (
        <>
            <div className="aiz-main-content">
                <div className="px-15px px-lg-25px">
                    <div className="aiz-titlebar text-left mt-2 mb-3">
                        {params.id ? <h5 className="mb-0 h6">Edit Product</h5> : <h5 className="mb-0 h6">Add New Product</h5>}
                    </div>
                    <div>
                        <form className="form form-horizontal mar-top" id="choice_form">
                            <div className="row gutters-5">
                                <div className="col-lg-8">

                                    <input type="hidden" name="_token" defaultValue="6klBhNOhEcSYzHAP1WU8ctR90lIocmkKBETVGkNx" />
                                    <input type="hidden" name="added_by" defaultValue="admin" onChange={onChangeHandler} />


                                    <div className="card">

                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Product Information</h5>
                                        </div>

                                        <div className="card-body">

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Product Name <span className="text-danger">*</span></label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" value={inputval?.name} name="name" placeholder="Product Name" required fdprocessedid="3bss68" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row" id="category">
                                                <label className="col-md-3 col-from-label">Category <span className="text-danger">*</span></label>
                                                <div className="col-md-8">

                                                    <Multiselect
                                                        displayValue="name"
                                                        isObject={true}
                                                        options={categ ? categ : []}
                                                        showCheckbox
                                                        selectedValues={productData && productData.category_id}
                                                        onRemove={(selectedCat) => {
                                                            const selectedIds = selectedCat.map((cat) => {
                                                                return cat._id
                                                            })
                                                            setFinalCatD(selectedIds)
                                                        }}
                                                        onSelect={(selectedCat) => {
                                                            // setFinalCatD(event)
                                                            const selectedIds = selectedCat.map((cat) => {
                                                                return cat._id
                                                            })
                                                            setFinalCatD(selectedIds)
                                                        }}
                                                    />

                                                </div>
                                            </div>


                                            <div className="form-group row" id="brand">
                                                <label className="col-md-3 col-from-label">Brand</label>
                                                <div className="col-md-8">

                                                    <select className="form-select" aria-label="Default select example" name="brand_id" onChange={onChangeHandler}>
                                                        {brandData.data && brandData.data.map((item) => {
                                                            return <option value={item._id} key={item._id} selected={item._id === productData?.brand_id?._id}>{item.name || item._id}</option>
                                                        })}
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="form-group row" id="seller">
                                                <label className="col-md-3 col-from-label">Seller</label>
                                                <div className="col-md-8">
                                                    <select className="form-select" aria-label="Default select example" name="seller_id" onChange={onChangeHandler}>
                                                        {/* {inputval?.brand_id && <option>{inputval?.brand_id?.name}</option>} */}
                                                        {sellerD && sellerD.map((item) => {
                                                            return <option value={item._id} key={item._id}>{item.firstname + " " + item.lastname}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Unit</label>
                                                <div className="col-md-8">
                                                    <select className="form-select" aria-label="Default select example" name="unit" onChange={onChangeHandler}>
                                                        <option value={1}>{inputval.unit ? inputval.unit : 'Select Unit'}</option>
                                                        {unitMast && unitMast.map((item) => {
                                                            return <option value={item.name} key={item._id}>{item.name}</option>
                                                        })}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Weight <small>(In Kg)</small></label>
                                                <div className="col-md-8">
                                                    <input type="text" value={inputval?.weight} className="form-control" name="weight" step="0.01" placeholder="weight" fdprocessedid="sq5qc3" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Minimum Purchase Qty <span className="text-danger">*</span></label>
                                                <div className="col-md-8">
                                                    <input type="number" value={inputval?.minimum_purchase_qty} lang="en" className="form-control" name=" minimum_purchase_qty" required fdprocessedid="d0gl3m" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Tags <span className="text-danger">*</span>
                                                </label>
                                                <div className="col-md-8">
                                                    <div className="tags_inp_wrapper">
                                                        <div className='tags-input-container'>
                                                            {tags.map((tag, index) => {
                                                                return <div className='tag-item' key={index}>
                                                                    <span className='text'>{tag}</span>
                                                                    <span className='close' onClick={() => removetagTag(index)}>&times;</span>
                                                                </div>
                                                            })}
                                                            <input type="text" onKeyDown={handleTagKeyDown} placeholder='type some text' className='tags-input' name="attributes" onChange={onChangeHandler} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Barcode</label>
                                                <div className="col-md-8">
                                                    <input type="text" value={inputval?.barcode} className="form-control" name="barcode" placeholder="Barcode" fdprocessedid="ifjwoo" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Refundable</label>
                                                <div className="col-md-8">
                                                    <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="refundable" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* <ProductsInformationAdmin /> */}

                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Product Images</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Gallery Images <small>(600x600)</small></label>
                                                <div className="col-md-8">

                                                    <div className="input-group" data-type="image" data-multiple="true">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                        </div>
                                                        <div className="form-control file-amount">
                                                            <input type="file" name="gallery_image" className="selected-files" onChange={onchengePhotoHandel} />
                                                        </div>
                                                    </div>
                                                    <div className="file-preview box sm">
                                                    </div>
                                                    <small className="text-muted">These images are visible in product details page gallery. Use 600x600 sizes images.</small>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Thumbnail Image <small>(300x300)</small></label>
                                                <div className="col-md-8">
                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                        </div>
                                                        <div className="form-control file-amount">
                                                            <input type="file" name="thumbnail_image" className="selected-files" onChange={onchengePhotoHandel} />
                                                        </div>
                                                    </div>
                                                    <div className="file-preview box sm">
                                                    </div>
                                                    <small className="text-muted">This image is visible in all product box. Use 300x300 sizes image. Keep some blank space around main object of your image as we had to crop some edge in different devices to make it responsive.</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <ProductsImages /> */}

                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Product Videos</h5>
                                        </div>
                                        <div className="card-body">

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Video Provider</label>
                                                <div className="col-md-8">
                                                    <select className="form-select" aria-label="Default select example" name="vedio_provider" onChange={onChangeHandler}>
                                                        <option value="youtube">Youtube</option>
                                                        <option value="dailymotion">Dailymotion</option>
                                                        <option value="vimeo">Vimeo</option>
                                                    </select>

                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Video Link</label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control" name="video_link" placeholder="Video Link" fdprocessedid="2pggse" onChange={onChangeHandler} />
                                                    <small className="text-muted">Use proper link without extra parameter. Don't use short share link/embeded iframe code.</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <ProductsDescriptionAdmin /> */}

                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">SEO Meta Tags</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Meta Title</label>
                                                <div className="col-md-8">
                                                    <input type="text" value={inputval?.meta_title} className="form-control" name="meta_title" placeholder="Meta Title" fdprocessedid="1hz7zu" onChange={onChangeHandler} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-3 col-from-label">Description</label>
                                                <div className="col-md-8">
                                                    <textarea name="meta_description" value={inputval?.meta_description} rows={8} className="form-control" onChange={onChangeHandler} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-md-3 col-form-label" htmlFor="signinSrEmail">Meta Image</label>
                                                <div className="col-md-8">
                                                    <div className="input-group" data-toggle="aizuploader" data-type="image">
                                                        <div className="input-group-prepend">
                                                            <div className="input-group-text bg-soft-secondary font-weight-medium">Browse</div>
                                                        </div>
                                                        <div className="form-control file-amount">
                                                            <input type="file" name="meta_image" className="selected-files" onChange={onChangeHandler} />
                                                        </div>
                                                    </div>
                                                    <div className="file-preview box sm">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <SeoMetaTagsAdmin /> */}

                                </div>
                                <div className="col-lg-4">
                                    <ShippingConfigurationAdmin />

                                    <div className="card">

                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Low Stock Quantity Warning</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group mb-3">
                                                <label htmlFor="name">
                                                    Quantity
                                                </label>
                                                <input type="number" name="low_stock_quantity" value={inputval?.low_stock_quantity} className="form-control" fdprocessedid="dtmr1" onChange={onChangeHandler} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">
                                                Stock Visibility State
                                            </h5>
                                        </div>
                                        <div className="card-body">

                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Show Stock Quantity</label>
                                                <div className="col-md-6">
                                                    {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="radio" name="show_stock_quantity" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label> */}
                                                    <ToggleStatus name="show_stock_quantity" isStatus={inputval?.show_stock_quantity} changeStatus={changeStatus} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Show Stock With Text Only</label>
                                                <div className="col-md-6">
                                                    {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="show_stock_with_text_only" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label> */}
                                                    <ToggleStatus name="show_stock_with_text_only" isStatus={inputval?.show_stock_with_text_only} changeStatus={changeStatus} />
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Hide Stock</label>
                                                <div className="col-md-6">
                                                    {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="hide_stock" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label> */}
                                                    <ToggleStatus name="hide_stock" isStatus={inputval.hide_stock} changeStatus={changeStatus} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Cash on Delivery</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Status</label>
                                                <div className="col-md-6">
                                                    {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="cash_on_delivery" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label> */}
                                                    <ToggleStatus name="cash_on_delivery" isStatus={inputval.cash_on_delivery} changeStatus={changeStatus} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Featured</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Status</label>
                                                <div className="col-md-6">
                                                    {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="featured" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label> */}
                                                    <ToggleStatus name="featured" isStatus={inputval.featured} changeStatus={changeStatus} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Todays Deal</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Status</label>
                                                <div className="col-md-6">
                                                    {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="todays_deal" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label> */}
                                                    <ToggleStatus name="todays_deal" isStatus={inputval.todays_deal} changeStatus={changeStatus} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div className="card-header">
                                            <h5 className="mb-0 h6">Trending</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="form-group row">
                                                <label className="col-md-6 col-from-label">Status</label>
                                                <div className="col-md-6">
                                                    {/* <label className="aiz-switch aiz-switch-success mb-0">
                                                        <input type="checkbox" name="trending" value={featuredval} onChange={onChangeHandler} />
                                                        <span />
                                                    </label> */}
                                                    <ToggleStatus name="trending" isStatus={inputval.trending} changeStatus={changeStatus} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className="row">
                                <div className="card mt-2 rest-part physical_product_show" data-select2-id={176}>
                                    <div className="card-header">
                                        <h4 className="mb-0">Variation</h4>
                                    </div>
                                    <div className="col-lg-12" style={{ padding: '25px', margin: '5px' }}>
                                        {/* <form> */}


                                        <div className="row">
                                            <div className="col-lg-6">
                                                <MultiselectOption allAttributes={allAttributes} data={attributesData} showCheckbox={true} getSelectedOptions={getAttributes}>
                                                    <label>Attributes:</label>
                                                </MultiselectOption>
                                            </div>

                                            {isSuccess && <div className="col-lg-12 mt-3">
                                                {allAttributes?.map((item) => {
                                                    return <AttributeItem key={item._id} item={item} isSuccess={isSuccess} isLoading={isLoading} handleChoiceValues={getChoiceValues} />
                                                })}
                                            </div>}



                                        </div>


                                    </div>
                                </div>




                                <div className="card mt-2 rest-part col-lg-12">
                                    <div className="card-header">
                                        <h4 className="mb-0">Product price &amp; stock</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-end">
                                            <div className="col-12 sku_combination table-responsive form-group" id="sku_combination">
                                                <table className="table table-bordered physical_product_show">

                                                    <thead>
                                                        <tr>
                                                            <td className="text-center">
                                                                <label className="control-label">#</label>
                                                            </td>
                                                            <td className="text-center">
                                                                <label className="control-label">Variant</label>
                                                            </td>
                                                            <td className="text-center">
                                                                <label className="control-label">MRP</label>
                                                            </td>
                                                            <td className="text-center">
                                                                <label className="control-label">Purchase Rate</label>
                                                            </td>
                                                            <td className="text-center">
                                                                <label className="control-label">Tax %</label>
                                                            </td>
                                                            <td className="text-center">
                                                                <label className="control-label">Tax Type</label>
                                                            </td>
                                                            <td className="text-center">
                                                                <label className="control-label">Sale Rate</label>
                                                            </td>
                                                            <td className="text-center">
                                                                <label className="control-label">Discount</label>
                                                            </td>
                                                            <td className="text-center">
                                                                <label className="control-label">Discount Type</label>
                                                            </td>
                                                            <td className="text-center">
                                                                <label className="control-label">SKU</label>
                                                            </td>
                                                            <td><label className="control-label">HSN Code</label></td>
                                                            <td><label className="control-label">Sale Reward Point</label></td>
                                                            <td><label className="control-label">Share Reward Point</label></td>
                                                            {/* <td className="text-center">
                                                                <label className="control-label">Pickup Point</label>
                                                            </td> */}
                                                            {/* <td className="text-center">
                                                                <label className="control-label">Quantity</label>
                                                            </td> */}
                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {variationArr?.map((item, index) => {
                                                            return <tr key={index}>
                                                                <td>
                                                                    <label data_id={item._id} name="weight" className="control-label"> <AiFillDelete /></label>
                                                                </td>
                                                                <td>
                                                                    <label data_id={item._id} name="weight" className="control-label">{item.weight}</label>
                                                                </td>
                                                                <td>
                                                                    <input data_id={item._id} type="number" name="mrp" className="form-control" required onChange={onChangeHandler} value={item.mrp} />
                                                                </td>

                                                                <td>
                                                                    <input data_id={item._id} type="number" name="purchase_rate" className="form-control" required onChange={onChangeHandler} value={item.purchase_rate} />
                                                                </td>
                                                                <td>
                                                                    <input data_id={item._id} type="string" name="tax" className="form-control" required onChange={onChangeHandler} value={item.tax} />
                                                                </td>

                                                                <td>
                                                                    <select name="tax_type" className="selectOptions" aria-label="Default select example" onChange={onChangeHandler}>
                                                                        <option value={'Inclusive'}>Inclusive</option>
                                                                        <option value={'Exclusive'}>Exclusive</option>
                                                                    </select>
                                                                </td>


                                                                <td>
                                                                    <input data_id={item._id} type="number" name="sale_rate" disabled className="form-control" required onChange={onChangeHandler} value={item.sale_rate} />
                                                                </td>
                                                                <td>
                                                                    <input data_id={item._id} type="text" name="discount" className="form-control" required onChange={onChangeHandler} value={item.discount} />
                                                                </td>
                                                                <td>
                                                                    <select name="discount_type" className="selectOptions" aria-label="Default select example" onChange={onChangeHandler}>
                                                                        <option value={'Percent'}>Percent</option>
                                                                        <option value={'Amount'}>Amount</option>
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <input data_id={item._id} type="text" name="sku" className="form-control" required onChange={onChangeHandler} value={item.sku} />
                                                                </td>

                                                                <td>
                                                                    <input data_id={item._id} type="text" name="hsn_code" value={item?.hsn_code} className="form-control" onChange={onChangeHandler} />
                                                                </td>
                                                                <td>
                                                                    <input data_id={item._id} type="text" name="sale_rp" value={item?.sale_rp} className="form-control" onChange={onChangeHandler} />
                                                                </td>
                                                                <td>
                                                                    <input data_id={item._id} type="text" name="share_rp" value={item?.share_rp} className="form-control" onChange={onChangeHandler} />
                                                                </td>

                                                                {/* <td>
                                                                    <select data_id={item._id} className="js-example-basic-multiple js-states js-example-responsive demo-select2 w-100 select2-hidden-accessible selectOptions" name="pickup_points" data-select2-id={20} tabIndex={-1} aria-hidden="true" onChange={onChangeHandler}>
                                                                        {pickUp && pickUp.map((item) => {
                                                                            return <option value={item._id} key={item._id}>{item.address}</option>
                                                                        })}
                                                                    </select>
                                                                </td>
                                                                <td>
                                                                    <input data_id={item._id} type="number" value={item.current_qty} name="current_qty" min={1} max={1000000} step={1} className="form-control" required onChange={onChangeHandler} />
                                                                </td> */}
                                                            </tr>
                                                        })}
                                                    </tbody>

                                                </table>
                                            </div>
                                            <div className="col-md-3 form-group physical_product_show" id="quantity">
                                                <label className="title-color">Total Quantity</label>
                                                <input type="number" min={0} defaultValue={0} step={1} placeholder="Quantity" name="current_stock" className="form-control" required fdprocessedid="gny5jm" readOnly="readonly" onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-md-3 form-group" id="minimum_order_qty">
                                                <label className="title-color">Minimum order quantity</label>
                                                <input type="number" value={inputval?.minimum_order_qty} placeholder="Minimum order quantity" name="minimum_order_qty" className="form-control" required fdprocessedid="wabmv" onChange={onChangeHandler} />
                                            </div>
                                            <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                <label className="title-color">Shipping cost </label>
                                                <input type="number" value={inputval?.shipping_cost} placeholder="Shipping cost" name="shipping_cost" className="form-control" required fdprocessedid="pvn15" onChange={onChangeHandler} />
                                            </div>

                                            <div className="col-md-3 form-group physical_product_show" id="shipping_cost">
                                                <label className="title-color">Shipping cost multiply with quantity </label>
                                                <label className="switcher title-color">
                                                    <input className="switcher_input" type="checkbox" name="multiplyQTY" />
                                                    <span className="switcher_control" />
                                                </label>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                {/* <ProductDescriptionWrapper />
                                <ProductsVariation handleVariantData={handleVariantData} /> */}

                            </div>
                        </form>
                    </div>
                    <button type="button" onClick={submitEditProductData} className="btn btn-primary m-3">Update Products</button>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}
export default EditProducts;