package handlers

import (
	"fmt"
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
