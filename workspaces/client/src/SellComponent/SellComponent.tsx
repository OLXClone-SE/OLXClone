import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Typography from '@mui/material/Typography';
import { Copyright } from "../CopyrightComponent/CopyrightComponent";
import { UserProduct } from "../Types/user";
import { updateProductDetails } from "../ReduxSlices/SellSlice";
import { fetchUserProfile } from "../ReduxActions/UserProfileActions";
import { useAppSelector } from "../Store/hooks";
import { RootState } from "../Store/store";

export function SellComponent() {
    const dispatch = useDispatch()

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

    return (
        <React.Fragment>
            <Typography gutterBottom variant="h5" component="div">
                Product Details Here
            </Typography>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </React.Fragment>
    )
}

export default SellComponent;