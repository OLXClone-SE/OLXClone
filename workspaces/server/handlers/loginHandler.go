package handlers

import (
	"fmt"
	"net/http"
	"server/models"
	"server/utilities"
)

const password = "password" //db password column
const mailid = "mailid"     //db mailid column
type loginResponse struct {
	Approved bool `json:"approved"`
}

type loginRequestBody struct {
	Mailid   string `json:"mailid"`
	Password string `json:"password"`
}

func createLoginResponse(approved bool) []byte {
	response := loginResponse{
		Approved: approved,
	}
	loginResponse := utilities.ToJson(response)
	return loginResponse
}

func verifyUser(reqBodyObject loginRequestBody) bool {
	db := utilities.GetDBInstance()
	userInfo := models.User{}
	res := db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", mailid), reqBodyObject.Mailid).Select(password).Scan(&userInfo)
	return (userInfo.Password == reqBodyObject.Password) && res.RowsAffected != 0
}

func LoginHandler(writer http.ResponseWriter, request *http.Request) {
	var reqBodyObject loginRequestBody
	utilities.ParseRequestBody(request, &reqBodyObject)
	success := verifyUser(reqBodyObject)
	loginResponse := createLoginResponse(success)
	if loginResponse != nil {
		utilities.WriteJsonResponse(writer, http.StatusOK, loginResponse)
	}
}
