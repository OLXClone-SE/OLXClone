package handlers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"server/utilities"
	"testing"
)

func TestResetPasswordHandler(t *testing.T) {
	utilities.SetTestingEnvironmentVariables(t);
	utilities.AddTestUser();
	utilities.AddTestUserOTP();

	var jsonStr = []byte(`{"mailid":"abcd@gmail.com","password":"Efgh@1234","otp":"1234"}`)

	req, err := http.NewRequest("POST", "/resetpassword", bytes.NewBuffer(jsonStr))
	if err != nil {
		utilities.DeleteUser("abcd@gmail.com")
		utilities.DeleteTestUserOTP("abcd@gmail.com")
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(ResetPasswordHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		utilities.DeleteUser("abcd@gmail.com")
		utilities.DeleteTestUserOTP("abcd@gmail.com")
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Check the response body is what we expect.
	expected := false;
	var response resetPasswordResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);
	if response.Approved != expected {
		utilities.DeleteUser("abcd@gmail.com")
		utilities.DeleteTestUserOTP("abcd@gmail.com")
		t.Errorf("handler returned unexpected body: got %v want %v",
			response.Approved, expected)
	}
	utilities.DeleteUser("abcd@gmail.com")
	utilities.DeleteTestUserOTP("abcd@gmail.com")
}