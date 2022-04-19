package handlers

import (
	"fmt"
	"net/http"
	"server/constants"
	"server/models"
	"server/utilities"
)

type updateUserDetailsResponse struct {
	Updated bool `json:"approved"`
}

func createUpdateUserDetailsResponse(success bool) []byte {
	response := updateUserDetailsResponse{
		Updated: success,
	}
	updateUserDetailsResponse := utilities.ToJson(response)
	return updateUserDetailsResponse
}

func updateUserDetails(reqBodyObject models.UpdtableUserDetails) bool {
	db := utilities.GetDBInstance()
	userInfo := models.User{}
	res := db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), reqBodyObject.Mailid).UpdateColumn(constants.FirstName, reqBodyObject.Fname).UpdateColumn(constants.LastName, reqBodyObject.Lname).UpdateColumn(constants.Mobile, reqBodyObject.Phone)
	return res.RowsAffected != 0
}

func UpdateUserDetailsHandler(writer http.ResponseWriter, request *http.Request) {
	verify := utilities.VerifyCookie(writer, request)
	fmt.Print(verify)
	var updateUserDetailsReqBodyObject models.UpdtableUserDetails
	utilities.ParseRequestBody(request, &updateUserDetailsReqBodyObject)
	success := updateUserDetails(updateUserDetailsReqBodyObject)
	updateUserDetailsResponse := createUpdateUserDetailsResponse(success)
	if updateUserDetailsResponse != nil {
		utilities.WriteJsonResponse(writer, http.StatusOK, updateUserDetailsResponse)
	}
}
