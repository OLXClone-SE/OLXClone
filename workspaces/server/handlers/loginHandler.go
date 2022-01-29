package handlers

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"server/utilities"
)

type loginResponse struct {
	Approved bool `json:"approved"`
}

func LoginHandler(writer http.ResponseWriter, request *http.Request) {
	body, err := ioutil.ReadAll(request.Body)
	fmt.Println("reading body")
	if err != nil {
		fmt.Println("body parse failed")
	}
	response := loginResponse{
		Approved: true,
	}
	bodyString := string(body)
	fmt.Println("hhhh" + bodyString)
	jsonResponse := utilities.GetJson(writer, response)
	if jsonResponse != nil {
		writer.Header().Set("Content-Type", "application/json")
		writer.WriteHeader(http.StatusOK)
		writer.Write(jsonResponse)
		fmt.Println(response)
	}
}
