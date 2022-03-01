package utilities

import (
	"testing"
)

func TestSendMail(t *testing.T) {
	got := SendMail("some@gmail.com", "", "")
	if !got {
		t.Errorf("not able to send mail")
	}
}
