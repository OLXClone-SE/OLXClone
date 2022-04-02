package handlers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"server/utilities"
	"testing"
)

func TestUpdateUserDetailsHandler(t *testing.T) {
	utilities.SetTestingEnvironmentVariables(t);
	utilities.AddTestUser();

	var jsonStr = []byte(`{"mailid":"abcd@gmail.com","fname":"abcd","lname":"abcd","phone":"+1234567890"}`)

	req, err := http.NewRequest("POST", "/updateUserDetails", bytes.NewBuffer(jsonStr))
	if err != nil {
		utilities.DeleteUser("abcd@gmail.com")
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(UpdateUserDetailsHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		utilities.DeleteUser("abcd@gmail.com")
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Check the response body is what we expect.
	expected := true;
	var response updateUserDetailsResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);
	if response.Updated != expected {
		utilities.DeleteUser("abcd@gmail.com")
		t.Errorf("handler returned unexpected body: got %v want %v",
			response.Updated, expected)
	}
	utilities.DeleteUser("abcd@gmail.com")
}