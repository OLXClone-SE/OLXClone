package utilities

import (
	"encoding/json"
	"net/http"
)

func GetJson(writer http.ResponseWriter, response interface{}) []byte {
	json, err := json.MarshalIndent(response, "", "\t")
	if err != nil {
		writer.Write([]byte("json parse failed"))
		return nil
	}
	return json
}
