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

func sendOtp(reqBodyObject forgotPasswordRequestBody) bool {
	var otp int
	db := utilities.GetDBInstance()
	userInfo := models.User{}
	db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", mailid), reqBodyObject.Mailid).Select("otp").Scan(&userInfo)
	if userInfo.OTP != constants.OTP_DEFAULT {
		if userInfo.OTP == 0 {
			return false
		}
		otp = userInfo.OTP
	} else {
		otp = utilities.GenerateOtp()
	}
	db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", mailid), reqBodyObject.Mailid).UpdateColumn("otp", otp)
	success := utilities.SendMail(reqBodyObject.Mailid, "OTP for olxclone", fmt.Sprintf("Your OTP is %d", +otp))
	return success
}

func ForgotPasswordHandler(writer http.ResponseWriter, request *http.Request) {
	var reqBodyObject forgotPasswordRequestBody
	utilities.ParseRequestBody(request, &reqBodyObject)
	success := sendOtp(reqBodyObject)
	loginResponse := createforgotPasswordResponse(success)
	if loginResponse != nil {
		utilities.WriteJsonResponse(writer, http.StatusOK, loginResponse)
	}
}
