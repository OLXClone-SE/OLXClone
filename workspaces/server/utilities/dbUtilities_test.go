package utilities

import (
	"testing"
)

func TestGetDBConnectionString(t *testing.T) {
	got := GetDBConnectionString()
	if got == "" {
		t.Errorf("cannot connect to db")
	}
}
