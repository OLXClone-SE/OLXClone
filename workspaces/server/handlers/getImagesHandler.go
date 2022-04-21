package handlers

import (
	"fmt"
	"io"
	"net/http"
	"os"
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

func GetImageUploadHandler(writer http.ResponseWriter, request *http.Request) {
	err := request.ParseMultipartForm(32 << 20) // maxMemory 32MB
	if err != nil {
		writer.WriteHeader(http.StatusBadRequest)
		return
	}
	println(request)
	//Access the photo key - First Approach
	file, fileHeader, err := request.FormFile("photo")
	if err != nil {
		println(err)
		writer.WriteHeader(http.StatusBadRequest)
		return
	}
	err = os.MkdirAll("../uploads", os.ModePerm)
	if err != nil {
		http.Error(writer, err.Error(), http.StatusInternalServerError)
		return
	}
	imagePath := fmt.Sprintf("./uploads/" + fileHeader.Filename)
	println("==========================" + imagePath + "===================")
	dst, err := os.Create(imagePath)
	if err != nil {
		http.Error(writer, err.Error(), http.StatusInternalServerError)
		return
	}

	defer dst.Close()

	// Copy the uploaded file to the filesystem
	// at the specified destination
	_, err = io.Copy(dst, file)
	if err != nil {
		http.Error(writer, err.Error(), http.StatusInternalServerError)
		return
	}

	fmt.Fprintf(writer, "Image uploaded succesfully")
	writer.WriteHeader(200)
	return
}