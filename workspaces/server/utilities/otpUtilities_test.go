package utilities

import (
	"fmt"
	"server/constants"
	"server/models"
	"testing"
)

func TestGenerateOtp(t *testing.T) {
	got := GenerateOtp()
	if got == 0 {
		t.Errorf("not able to generate otp")
	}
}

func TestDeleteRecord(t *testing.T) {
    userInfo := models.VerifyUser{
        Mailid: "newmail@gmail.com",
        OTP:    -1,
    }
    db := GetDBInstance()
    DeleteRecord(userInfo.Mailid, userInfo)
    res := db.Table(userInfo.TableName()).Create(&userInfo)
    if res.RowsAffected == 0 {
        t.Errorf("failed to insert record")
    }
    DeleteRecord(userInfo.Mailid, userInfo)
    res = db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), userInfo.Mailid)
    if res.RowsAffected != 0 {
        t.Errorf("record not deleted")
    }
}

func TestSendOtp(t *testing.T) {
    got := SendOtp("newmail@gmail.com")
    if got == 0 {
        t.Errorf("not able to generate otp")
    }
}