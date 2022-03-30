package handlers

import (
	"fmt"
	"net/http"
	"server/constants"
	"server/models"
	"server/utilities"
)

type GetUserDetailsResponse struct {
	Mailid string `json:"mailid"`
	Fname  string `json:"fname"`
	Lname  string `json:"lname"`
	Phone  string `json:"phone"`
}

type GetUserDetailsRequestBody struct {
	Mailid string `json:"mailid"`
}

func getUserDetailsResponse(userDetails models.User) []byte {
	response := GetUserDetailsResponse{
		Mailid: userDetails.Mailid,
		Fname:  userDetails.Fname,
		Lname:  userDetails.Lname,
		Phone:  userDetails.Phone,
	}
	userDetailsResponse := utilities.ToJson(response)
	return userDetailsResponse
}

func fetchUser(reqBodyObject GetUserDetailsRequestBody) models.User {
	db := utilities.GetDBInstance()
	userInfo := models.User{}
	db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), reqBodyObject.Mailid).Scan(&userInfo)
	return userInfo
}

func GetUserDetailsHandler(writer http.ResponseWriter, request *http.Request) {
	var reqBodyObject GetUserDetailsRequestBody
	utilities.ParseRequestBody(request, &reqBodyObject)
	userDetails := fetchUser(reqBodyObject)
	userDetailsResp := getUserDetailsResponse(userDetails)
	if userDetailsResp != nil {
		utilities.WriteJsonResponse(writer, http.StatusOK, userDetailsResp)
	}
}
