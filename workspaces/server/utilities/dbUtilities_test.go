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

func TestGetDBInstance(t *testing.T) {
    got := GetDBInstance()
    if got == nil {
        t.Errorf("Cant create db instance")
    }
}