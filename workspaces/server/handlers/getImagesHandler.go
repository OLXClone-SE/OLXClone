package handlers

import (
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