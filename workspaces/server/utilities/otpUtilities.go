package utilities

import (
	"fmt"
	"math/rand"
	"server/constants"
	"server/models"
	"time"
)

func GenerateOtp() int {
	max := 9999
	min := 1000
	rand.Seed(time.Now().UTC().UnixNano())
	otp := rand.Intn(max-min) + min
	return otp
}

func DeleteRecord(mailid string, userInfo models.VerifyUser) {
	db := GetDBInstance()
	db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), mailid).Delete(&userInfo)
}

func SendOtp(mailid string) int {
	var otp int
	db := GetDBInstance()
	userInfo := models.VerifyUser{}
	db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), mailid).Select("otp").Scan(&userInfo)
	otp = GenerateOtp()
	SendMail(mailid, "OTP for olxclone", fmt.Sprintf("Your OTP is %d", +otp))
	return otp
}

func VerifyOTP(otp int, mailid string) bool {
	db := GetDBInstance()
	userInfo := models.VerifyUser{}
	db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), mailid).Select("otp").Scan(&userInfo)
	success := false
	if userInfo.OTP == otp {
		success = true
	}
	DeleteRecord(mailid, userInfo)
	return success
}
