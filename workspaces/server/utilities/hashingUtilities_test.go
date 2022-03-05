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

func TestMatchHash(t *testing.T) {
	hash := GetHashString("something")
	got := MatchHash(hash, "something")
	if !got {
		t.Errorf("hash should match with password")
	}
	got = MatchHash(hash, "some")
	if got {
		t.Errorf("hash should not match with password")
	}
}