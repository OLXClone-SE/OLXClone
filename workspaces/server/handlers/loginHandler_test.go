package handlers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"server/utilities"
	"testing"
)

func TestLoginHandlerApproved(t *testing.T) {
	utilities.SetTestingEnvironmentVariables(t);
	utilities.AddTestUser()

	var jsonStr = []byte(`{"mailid":"abcd@gmail.com","password":"Abcd@1234"}`)

	req, err := http.NewRequest("POST", "/login", bytes.NewBuffer(jsonStr))
	if err != nil {
		utilities.DeleteUser("abcd@gmail.com");
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(LoginHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		utilities.DeleteUser("abcd@gmail.com");
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Check the response body is what we expect.
	expected := true;
	var response loginResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);
	if response.Approved != expected {
		utilities.DeleteUser("abcd@gmail.com");
		t.Errorf("handler returned unexpected body: got %v want %v",
			response.Approved, expected)
	}
	utilities.DeleteUser("abcd@gmail.com");
}

func TestLoginHandlerNotApproved(t *testing.T) {
	utilities.SetTestingEnvironmentVariables(t);
	utilities.AddTestUser()
	
	var jsonStr = []byte(`{"mailid":"abcd@gmail.com","password":"Abcd@1235"}`)

	req, err := http.NewRequest("POST", "/login", bytes.NewBuffer(jsonStr))
	if err != nil {
		utilities.DeleteUser("abcd@gmail.com");
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(LoginHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		utilities.DeleteUser("abcd@gmail.com");
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Check the response body is what we expect.
	expected := false;
	var response loginResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);
	if response.Approved != expected {
		utilities.DeleteUser("abcd@gmail.com");
		t.Errorf("handler returned unexpected body: got %v want %v",
			response.Approved, expected)
	}
	utilities.DeleteUser("abcd@gmail.com");
}