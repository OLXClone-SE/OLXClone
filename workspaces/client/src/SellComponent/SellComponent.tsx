import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Copyright } from "../CopyrightComponent/CopyrightComponent";
import { UserProduct } from "../Types/user";
import { updateProductDetails } from "../ReduxSlices/SellSlice";
import { fetchUserProfile } from "../ReduxActions/UserProfileActions";
import { useAppSelector } from "../Store/hooks";
import { RootState } from "../Store/store";
import { saveUserProduct } from "../ReduxActions/SellActions";
import { categories } from "../Utils/CategoriesList";
import { NavBarComponent } from "../NavBarComponent/NavBarComponent";
import { useNavigate } from "react-router-dom";
import './SellComponent.css';

export function SellComponent() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    if (!document.cookie.split(";").find(row => row.startsWith('token='))?.length) {
        console.log("not here");
        navigate('/')
    }
    const initialState: UserProduct = {
        productname: "",
        category: "",
        price: -1,
        path: "",
        description: "",
        approved: false,
        phone: "",
        mailid: ""
    }
    
    const [product, setProduct] = useState<UserProduct>({
        ...initialState
    });

    const { mailid, phone } = useAppSelector((state: RootState) => state.UserProfileSlice)
    const { loginData } = useAppSelector((root: RootState) => root.LoginSlice);

    useEffect(() => {
        if (mailid === "")
            dispatch(fetchUserProfile({ mailid: loginData.mailid }))
    })

    const { productname, category, price, path, description, approved } = useAppSelector((root: RootState) => root.SellSlice)

    useEffect(() => {
        setProduct({ productname, category, price, path, description, approved, phone, mailid })
    }, [productname, category, price, path, description, approved, phone, mailid])

    const handleChange = (event: any) => {
        const userProduct: UserProduct = {
            productname: event.target.name === "productname" ? event.target.value : product.productname,
            category: event.target.name === "category" ? event.target.options.selectedIndex : product.category,
            price: event.target.name === "price" ? +event.target.value : product.price,
            path: "../images/product.jpg",
            description: event.target.name === "description" ? event.target.value : product.description,
            approved: false,
            phone,
            mailid
        }
        console.log(userProduct)
        dispatch(updateProductDetails({ userProduct }))
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        dispatch(saveUserProduct({ ...product, phone, mailid, category: categories()[+product.category] }))
    }

    return (
        <React.Fragment>
            <NavBarComponent />
            <div className="container sell">
                <form>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" id="productname" name="productname" onChange={handleChange} placeholder="Enter Product Name" required />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-select" id="category" name="category" defaultValue={0} onChange={handleChange}>
                            {[categories().map((category, idx) => <option value={idx}>{category}</option>)]}
                        </select>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" id="price" name="price" className="form-control" onChange={handleChange} required />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" id="description" name="description" onChange={handleChange} rows={3} maxLength={100} placeholder="max 100 characters" required></textarea>
                    </div>
                    <br />
                    {/* <div className="form-group">
                        <label className="form-label" htmlFor="customFile">Image</label>
                        <input type="file" accept="image/*" name="path" className="form-control" onChange={handleChange} id="customFile" required />
                    </div>
                    <br /> */}
                    <button type="submit" onClick={handleSubmit} style={{ marginRight: "20px" }} className="btn btn-primary">Sell Product</button>
                    <button type="reset" className="btn btn-primary">Reset</button>
                </form>
            </div>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </React.Fragment>
    )
}

export default SellComponent;