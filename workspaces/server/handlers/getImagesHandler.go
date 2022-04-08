package handlers

import (
	"fmt"
	"server/constants"
	"server/utilities"
)

type Images struct {
	Mailid      string `json:"mailid"`
	Phone       string `json:"phone"`
	Id          int    `json:"id"`
	Path        string `json:"path"`
	Productname string `json:"productname"`
	Category    string `json:"category"`
	Price       int    `json:"price"`
	Description string `json:"description"`
}

type GetImagesResponse struct {
	Products []Product `json:"products"`
}

type GetImagesRequestBody struct {
	Mailid string `json:"mailid"`
}

func getImagesResponse(products []Product) []byte {
	response := GetProductsResponse{
		Products: products,
	}
	productsResponse := utilities.ToJson(response)
	return productsResponse
}

func fetchImages(reqBodyObject GetProductsRequestBody) []Product {
	db := utilities.GetDBInstance()
	var products []Product
	if reqBodyObject.Mailid != "" {
		db.Table("Products").Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), reqBodyObject.Mailid).Scan(&products)
	} else {
		db.Table("Products").Scan(&products)
	}
	return products
}
