package utilities

import "net/http"

func WriteJsonResponse(writer http.ResponseWriter, status int, jsonResponse []byte) {
	writer.Header().Set("Content-Type", "application/json")
	writer.WriteHeader(status)
	writer.Write(jsonResponse)
}
