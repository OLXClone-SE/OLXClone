package handlers

import (
	"fmt"
	"net/http"
	"server/constants"
	"server/models"
	"server/utilities"
)

type forgotPasswordResponse struct {
	OtpSent bool `json:"otpsent"`
}

type forgotPasswordRequestBody struct {
	Mailid string `json:"mailid"`
}

func createforgotPasswordResponse(otpsent bool) []byte {
	response := forgotPasswordResponse{
		OtpSent: otpsent,
	}
	loginResponse := utilities.ToJson(response)
	return loginResponse
}

func updateUserOTP(mailid string, otp int) {
	db := utilities.GetDBInstance()
	userInfo := models.User{}
	db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), mailid).UpdateColumn("otp", otp)
}

func ForgotPasswordHandler(writer http.ResponseWriter, request *http.Request) {
	var reqBodyObject forgotPasswordRequestBody
	utilities.ParseRequestBody(request, &reqBodyObject)
	otp := utilities.SendOtp(reqBodyObject.Mailid)
	success := false
	if(otp != -1) {
		updateUserOTP(reqBodyObject.Mailid, otp)
		success = true
	}
	loginResponse := createforgotPasswordResponse(success)
	if loginResponse != nil {
		utilities.WriteJsonResponse(writer, http.StatusOK, loginResponse)
	}
}
