package handlers

import (
	"fmt"
	"net/http"
	"server/constants"
	"server/models"
	"server/utilities"
)

type resetPasswordResponse struct {
	Approved bool `json:"approved"`
}

type resetPasswordRequestBody struct {
	Mailid   string `json:"mailid"`
	Password string `json:"password"`
	Otp 	 int	`json:"otp"`
}

func CreateResetPasswordResponse(approved bool) []byte {
	response := resetPasswordResponse{
		Approved: approved,
	}
	resetPasswordResponse := utilities.ToJson(response)
	return resetPasswordResponse
}

func updateUserPassword(reqBodyObject resetPasswordRequestBody) bool {
	db := utilities.GetDBInstance()
	userInfo := models.User{}
	reqBodyObject.Password = utilities.GetHashString(reqBodyObject.Password)
	res := db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), reqBodyObject.Mailid).UpdateColumn(constants.Password, reqBodyObject.Password)
	return res.RowsAffected != 0
}

func ResetPasswordHandler(writer http.ResponseWriter, request *http.Request) {
	var reqBodyObject resetPasswordRequestBody
	utilities.ParseRequestBody(request, &reqBodyObject)
	success := utilities.VerifyOTP(reqBodyObject.Otp, reqBodyObject.Mailid)
	if success {
		success = updateUserPassword(reqBodyObject)
	}
	resetPasswordResponse := CreateResetPasswordResponse(success)
	if resetPasswordResponse != nil {
		utilities.WriteJsonResponse(writer, http.StatusOK, resetPasswordResponse)
	}
}
