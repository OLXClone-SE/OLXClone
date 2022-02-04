package handlers

import (
	"net/http"
	"server/models"
	"server/utilities"
)

type signupResponse struct {
	Approved bool `json:"approved"`
}

func createSignupResponse(approved bool) []byte {
	response := signupResponse{
		Approved: approved,
	}
	signupResponse := utilities.ToJson(response)
	return signupResponse
}

func checkOTP(signupReqBodyObject models.User) bool {
	otp := signupReqBodyObject.OTP
	mailid := signupReqBodyObject.Mailid
	return utilities.VerifyOTP(otp, mailid)
}

func addUser(signupReqBodyObject models.User) bool {
	db := utilities.GetDBInstance()
	res := db.Table(signupReqBodyObject.TableName()).Create(&signupReqBodyObject)
	return res.RowsAffected != 0
}

func SignupHandler(writer http.ResponseWriter, request *http.Request) {
	var signupReqBodyObject models.User
	utilities.ParseRequestBody(request, &signupReqBodyObject)
	success := checkOTP(signupReqBodyObject)
	if success {
		success = addUser(signupReqBodyObject)
		signupResponse := createSignupResponse(success)
		if signupResponse != nil {
			utilities.WriteJsonResponse(writer, http.StatusOK, signupResponse)
		}
	}
}