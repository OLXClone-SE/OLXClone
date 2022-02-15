package handlers

import (
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
