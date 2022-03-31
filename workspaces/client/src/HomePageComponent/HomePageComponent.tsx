import React, { useEffect } from "react";
import { NavBarComponent } from "../NavBarComponent/NavBarComponent";
import {
  Container,
} from "react-bootstrap";
import { SearchComponent } from "../SearchComponent/SearchComponent";
import { CardComponent } from "../CardComponent/CardComponent";
import { Copyright } from "../CopyrightComponent/CopyrightComponent";
import { useAppSelector } from "../Store/hooks";
import { RootState, store } from "../Store/store";
import { Navigate } from "react-router-dom";
import LoaderComponent from "../LoaderComponent/LoaderComponent";
import { useDispatch } from "react-redux";
import { getProducts } from "../ReduxActions/ProductActions";

export function HomepageComponent() {

  const { approved, pending } = useAppSelector((root: RootState) => root.LoginSlice);
  const { products } = useAppSelector((root: RootState) => root.ProductSlice)
  const dispatch = useDispatch();

  useEffect(() => {
    if (store.getState().ProductSlice.products == null)
      dispatch(getProducts({ mailid: "" }))
  })

  return (
    approved ?
      <React.Fragment>
        <style type="text/css">
          {`
    .cards-view {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-top: 30px;
        flex-flow: row wrap;
    }
    `}
        </style>
        <NavBarComponent />
        <Container>
          <SearchComponent />
        </Container>
        <Container className="cards-view">
          {products?.map(product => <CardComponent
            path={product?.path}
            name={product?.productname}
            desc={product?.description}
            price={product?.price}
          />)}
        </Container>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </React.Fragment>
      : <>{pending ? <LoaderComponent /> : <><Navigate replace to="/" /></>}</>
  );
}

export default HomepageComponent;
