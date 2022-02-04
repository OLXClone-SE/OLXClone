package handlers

import (
	"fmt"
	"net/http"
	"server/constants"
	"server/models"
	"server/utilities"
)

type mailVerificationResponse struct {
	OtpSent bool `json:"otpsent"`
}

type userVerificationRequestBody struct {
	Mailid   string `json:"mailid"`
	Password string `json:"password"`
	Action 	 string	`json:"action"`
}

func createMailVerificationResponse(otpsent bool) []byte {
	response := mailVerificationResponse{
		OtpSent: otpsent,
	}
	mailVerificationResponseObject := utilities.ToJson(response)
	return mailVerificationResponseObject
}

func verifyMail(writer http.ResponseWriter, userVerificationReqBodyObject userVerificationRequestBody) {
	db := utilities.GetDBInstance()
	userInfo := models.User{}
	res := db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), userVerificationReqBodyObject.Mailid).Select(constants.MAIL_ID).Scan(&userInfo)
	success := false
	if((res.RowsAffected == 0 && userVerificationReqBodyObject.Action == constants.ACTION_SIGNUP)  ||  (res.RowsAffected != 0 && userVerificationReqBodyObject.Action == constants.ACTION_RESET_PASSWORD)) {
		otp := utilities.SendOtp(userVerificationReqBodyObject.Mailid)
		user := models.VerifyUser{}
		user.Mailid = userVerificationReqBodyObject.Mailid
		user.OTP = otp
		res := db.Table(user.TableName()).Create(&user)
		success = res.RowsAffected != 0
	}
	mailVerificationObject := createMailVerificationResponse(success)
	if mailVerificationObject != nil {
		utilities.WriteJsonResponse(writer, http.StatusOK, mailVerificationObject)
	}
}

func UserVerificationHandler(writer http.ResponseWriter, request *http.Request) {
	var userVerificationReqBodyObject userVerificationRequestBody
	utilities.ParseRequestBody(request, &userVerificationReqBodyObject)
	verifyMail(writer, userVerificationReqBodyObject)
}