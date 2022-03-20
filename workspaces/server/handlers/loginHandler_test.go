package handlers

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestLoginHandlerApproved(t *testing.T) {
	// Set necessary environment variables
	t.Setenv("dbhost", "localhost");
	t.Setenv("dbuname", "postgres");
	t.Setenv("dbpass", "Kvmr@1106");
	t.Setenv("dbname", "postgres");
	t.Setenv("dbport", "5432");

	var jsonStr = []byte(`{"mailid":"maneesh.konkala@gmail.com","password":"Kvmr@1106"}`)

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
	if response.Approved != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			response.Approved, expected)
	}
}

func TestLoginHandlerNotApproved(t *testing.T) {
	// Set necessary environment variables
	t.Setenv("dbhost", "localhost");
	t.Setenv("dbuname", "postgres");
	t.Setenv("dbpass", "Kvmr@1106");
	t.Setenv("dbname", "postgres");
	t.Setenv("dbport", "5432");

	var jsonStr = []byte(`{"mailid":"maneesh.konkala@gmail.com","password":"12345678"}`)

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
	expected := false;
	var response loginResponse;
	json.Unmarshal(rr.Body.Bytes(), &response);
	if response.Approved != expected {
		t.Errorf("handler returned unexpected body: got %v want %v",
			response.Approved, expected)
	}
}