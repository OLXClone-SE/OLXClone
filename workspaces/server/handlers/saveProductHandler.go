package handlers

import (
	"net/http"
	"server/utilities"
)

type SaveProductResponse struct {
	Approved bool `json:"approved"`
}

type SaveProductRequestBody struct {
	Mailid      string `json:"mailid"`
	Phone       string `json:"phone"`
	Path        string `json:"path"`
	Productname string `json:"productname"`
	Category    string `json:"category"`
	Price       int    `json:"price"`
	Description string `json:"description"`
}

func saveProductResponse(approved bool) []byte {
	response := SaveProductResponse{
		Approved: approved,
	}
	saveProductRes := utilities.ToJson(response)
	return saveProductRes
}

func saveProduct(reqBodyObject SaveProductRequestBody) bool {
	db := utilities.GetDBInstance()
	res := db.Table("Products").Create(&reqBodyObject)
	return res.RowsAffected != 0
}

func SaveProductHandler(writer http.ResponseWriter, request *http.Request) {
	var reqBodyObject SaveProductRequestBody
	utilities.ParseRequestBody(request, &reqBodyObject)
	isSaved := saveProduct(reqBodyObject)
	saveProResp := saveProductResponse(isSaved)
	if saveProResp != nil {
		utilities.WriteJsonResponse(writer, http.StatusOK, saveProResp)
	}
}