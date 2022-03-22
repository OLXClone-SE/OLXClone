package handlers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestGetUserDetailsHandlerApproved(t *testing.T) {
	// Set necessary environment variables
	t.Setenv("dbhost", "localhost");
	t.Setenv("dbuname", "postgres");
	t.Setenv("dbpass", "Kvmr@1106");
	t.Setenv("dbname", "postgres");
	t.Setenv("dbport", "5432");

	var jsonStr = []byte(`{"mailid":"maneesh.konkala@gmail.com"}`)

	req, err := http.NewRequest("GET", "/getUserDetails", bytes.NewBuffer(jsonStr))
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(GetUserDetailsHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
	expected := GetUserDetailsResponse {
		Mailid: "maneesh.konkala@gmail.com",
		Fname:  "maneesh",
		Lname:  "reddy",
		Phone:  "+13528702019",
	}
	var response GetUserDetailsResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);
	if response != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
}