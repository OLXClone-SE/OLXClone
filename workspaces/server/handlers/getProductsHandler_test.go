package handlers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"reflect"
	"server/utilities"
	"testing"
)

func TestGetProductsHandler(t *testing.T) {
	utilities.SetTestingEnvironmentVariables(t);

	var jsonStr = []byte(`{"mailid":"maneesh.konkala@gmail.com"}`)

	req, err := http.NewRequest("POST", "/getUserDetails", bytes.NewBuffer(jsonStr))
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(GetProductsHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
	products := []Product{}
	expected := GetProductsResponse {
		Products: products,
	}
	var response GetProductsResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);

	if reflect.DeepEqual(expected, response) {
		t.Errorf("handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}