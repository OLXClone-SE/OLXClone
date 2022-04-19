package handlers

import (
	"fmt"
	"net/http"
	"server/constants"
	"server/utilities"
)

type Product struct {
	Mailid      string `json:"mailid"`
	Phone       string `json:"phone"`
	Id          int    `json:"id"`
	Path        string `json:"path"`
	Productname string `json:"productname"`
	Category    string `json:"category"`
	Price       int    `json:"price"`
	Description string `json:"description"`
}

type GetProductsResponse struct {
	Products []Product `json:"products"`
}

type GetProductsRequestBody struct {
	Mailid string `json:"mailid"`
}

func getProductsResponse(products []Product) []byte {
	response := GetProductsResponse{
		Products: products,
	}
	productsResponse := utilities.ToJson(response)
	return productsResponse
}

func fetchProducts(reqBodyObject GetProductsRequestBody) []Product {
	db := utilities.GetDBInstance()
	var products []Product
	if reqBodyObject.Mailid != "" {
		db.Table("Products").Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), reqBodyObject.Mailid).Scan(&products)
	} else {
		db.Table("Products").Scan(&products)
	}
	return products
}

func GetProductsHandler(writer http.ResponseWriter, request *http.Request) {
	var reqBodyObject GetProductsRequestBody
	utilities.ParseRequestBody(request, &reqBodyObject)
	productDetails := fetchProducts(reqBodyObject)
	productDetailsResp := getProductsResponse(productDetails)
	verify := utilities.VerifyCookie(writer, request)
	if !verify {
		productDetailsResp = utilities.ToJson(GetUserDetailsResponse{})
	}
	if productDetailsResp != nil {
		utilities.WriteJsonResponse(writer, http.StatusOK, productDetailsResp)
	}
}
