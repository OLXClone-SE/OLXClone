package utilities

import (
	"testing"
)

func TestGenerateOtp(t *testing.T) {
	got := GenerateOtp()
	if got == 0 {
		t.Errorf("not able to generate otp")
	}
}
