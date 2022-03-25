package handlers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestUserVerificationHandlerResetPassword(t *testing.T) {
	// Set necessary environment variables
	t.Setenv("dbhost", "localhost");
	t.Setenv("dbuname", "postgres");
	t.Setenv("dbpass", "Kvmr@1106");
	t.Setenv("dbname", "postgres");
	t.Setenv("dbport", "5432");

	var jsonStr = []byte(`{"mailid":"abcd@gmail.com","password":"efgh@4567","action":"resetPassword"}`)

	req, err := http.NewRequest("POST", "/verifyuser", bytes.NewBuffer(jsonStr))
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(UserVerificationHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Check the response body is what we expect.
	expected := true;
	var response mailVerificationResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);
	if response.OtpSent != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			response.OtpSent, expected)
	}
}

func TestUserVerificationHandlerSignup(t *testing.T) {
	// Set necessary environment variables
	t.Setenv("dbhost", "localhost");
	t.Setenv("dbuname", "postgres");
	t.Setenv("dbpass", "Kvmr@1106");
	t.Setenv("dbname", "postgres");
	t.Setenv("dbport", "5432");

	var jsonStr = []byte(`{"mailid":"abc@gmail.com","password":"efgh@4567","action":"signup"}`)

	req, err := http.NewRequest("POST", "/verifyuser", bytes.NewBuffer(jsonStr))
	if err != nil {
		t.Fatal(err)
	}
	rr := httptest.NewRecorder()
	handler := http.HandlerFunc(UserVerificationHandler)
	handler.ServeHTTP(rr, req)
	if status := rr.Code; status != http.StatusOK {
		t.Errorf("handler returned wrong status code: got %v want %v",
			status, http.StatusOK)
	}

	// Check the response body is what we expect.
	expected := true;
	var response mailVerificationResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);
	if response.OtpSent != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			response.OtpSent, expected)
	}
}