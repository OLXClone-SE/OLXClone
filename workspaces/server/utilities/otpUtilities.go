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

func SendOtp(mailid string) int {
	var otp int
	db := GetDBInstance()
	userInfo := models.VerifyUser{}
	db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), mailid).Select("otp").Scan(&userInfo)
	if userInfo.OTP != constants.OTP_DEFAULT {
		if userInfo.OTP == 0 {
			return -1
		}
		otp = userInfo.OTP
	} else {
		otp = GenerateOtp()
		db.Table(userInfo.TableName()).Create(userInfo)
	}
	SendMail(mailid, "OTP for olxclone", fmt.Sprintf("Your OTP is %d", +otp))
	return otp
}

func VerifyOTP(otp int, mailid string) bool{
	db := GetDBInstance()
	userInfo := models.VerifyUser{}
	db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), mailid).Select("otp").Scan(&userInfo)
	if userInfo.OTP == otp {
		db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), mailid).UpdateColumn("otp", -1)
		db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), mailid).Delete(&userInfo)
		return true
	}
	return false
}

