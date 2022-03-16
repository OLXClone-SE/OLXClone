package utilities

import (
	"fmt"
	"testing"
)

func TestSendMail(t *testing.T) {
	t.Setenv("frommail", "seolxclone@gmail.com")
	t.Setenv("smtpsocket", "587")
	t.Setenv("smtpserver", "smtp.gmail.com")
	t.Setenv("mailid", "seolxclone@gmail.com")
	t.Setenv("mailpassword", "Qwerty@123")
	got := SendMail("some@gmail.com", "", "")
	fmt.Println(got)
	if !got {
		t.Errorf("not able to send mail")
	}
}
