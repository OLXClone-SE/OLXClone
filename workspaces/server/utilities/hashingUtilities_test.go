package utilities

import (
	"testing"
)

func TestGetHashString(t *testing.T) {
	got := GetHashString("something")
	if len(got) == 0 {
		t.Errorf("length of the hash should not be zero")
	}
}
