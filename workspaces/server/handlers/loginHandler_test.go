package handlers

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestLoginHandler(t *testing.T) {
	var jsonStr = []byte(`{"mailid":"maneesh.konkala@gmail.com","password":"Efg@1997"}`)

	req, err := http.NewRequest("GET", "/login", bytes.NewBuffer(jsonStr))
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(LoginHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Check the response body is what we expect.
	expected := true;
	var response loginResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);
	fmt.Println(rr.Body.String())
	if response.Approved != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			response.Approved, expected)
	}
}