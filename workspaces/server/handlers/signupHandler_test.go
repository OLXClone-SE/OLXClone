package handlers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"server/utilities"
	"testing"
)

func TestSignupHandler(t *testing.T) {
	utilities.SetTestingEnvironmentVariables(t);
	utilities.DeleteUser("abcd@gmail.com");

	var jsonStr = []byte(`{"mailid":"abcd@gmail.com","fname":"abcd","lname":"efgh","password":"abcd@1234","otp":"-1","phone":"+1234567890"}`)

	req, err := http.NewRequest("POST", "/signup", bytes.NewBuffer(jsonStr))
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(SignupHandler)
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