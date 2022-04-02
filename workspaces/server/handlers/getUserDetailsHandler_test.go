package handlers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"server/utilities"
	"testing"
)

func TestGetUserDetailsHandlerApproved(t *testing.T) {
	utilities.SetTestingEnvironmentVariables(t);
	utilities.AddTestUser()

	var jsonStr = []byte(`{"mailid":"abcd@gmail.com"}`)

	req, err := http.NewRequest("POST", "/getUserDetails", bytes.NewBuffer(jsonStr))
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(GetUserDetailsHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		utilities.DeleteUser("abcd@gmail.com");
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}
	expected := GetUserDetailsResponse {
		Mailid: "abcd@gmail.com",
		Fname:  "abcd",
		Lname:  "efgh",
		Phone:  "+123456789",
	}
	var response GetUserDetailsResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);
	if response != expected {
		utilities.DeleteUser("abcd@gmail.com");
		t.Errorf("handler returned unexpected body: got %v want %v",
			rr.Body.String(), expected)
	}
	utilities.DeleteUser("abcd@gmail.com");
}