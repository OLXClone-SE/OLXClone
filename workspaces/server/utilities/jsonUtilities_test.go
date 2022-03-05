package utilities

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

type testStruct struct {
	TestVal bool
}


func TestParseRequestBody(t *testing.T) {
	req := httptest.NewRequest(http.MethodPost, "/something", strings.NewReader(`{"TestVal": true}`))
	var ref testStruct
	ParseRequestBody(req, &ref)
	if ref.TestVal != true {
		t.Errorf("parsed improperly")
	}
}

func TestToJson(t *testing.T) {

	testStructObj := testStruct{
		TestVal: false,
	}
	got := ToJson(testStructObj)
	if got == nil {
		t.Errorf("not able to convert to json")
	}
}
