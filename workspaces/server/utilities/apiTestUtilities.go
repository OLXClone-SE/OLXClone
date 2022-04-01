package utilities

import (
	"fmt"
	"server/constants"
	"server/models"
	"testing"
)

func SetTestingEnvironmentVariables(t *testing.T) {
	// Set necessary environment variables
	t.Setenv("dbhost", "localhost");
	t.Setenv("dbuname", "postgres");
	t.Setenv("dbpass", "Kvmr@1106");
	t.Setenv("dbname", "postgres");
	t.Setenv("dbport", "5432");
}

func DeleteUser(mailid string) bool {
	user := models.User {
		Mailid: mailid,
	}
	db := GetDBInstance()
	res := db.Delete(&user);
	return res.RowsAffected != 0
}

func AddTestUser() bool {
	user := models.User {
		Mailid: "abcd@gmail.com",
		Fname:  "abcd",
		Lname:  "efgh",
		Password: "Abcd@1234",
		OTP: -1,
		Phone:  "+123456789",
	}
	db := GetDBInstance()
	checkUser := db.Table(user.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), user.Mailid).Select(constants.MAIL_ID)
	if(checkUser.RowsAffected != 0) {
		DeleteUser(user.Mailid)
	}
	user.Password = GetHashString(user.Password)
	res := db.Table(user.TableName()).Create(&user)
	return res.RowsAffected != 0
}

func AddTestUserOTP() bool {
	user := models.VerifyUser {
		Mailid: "abcd@gmail.com",
		OTP: 1234,
	}
	db := GetDBInstance()
	checkUser := db.Table(user.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), user.Mailid).Select(constants.MAIL_ID)
	if(checkUser.RowsAffected != 0) {
		DeleteTestUserOTP(user.Mailid)
	}
	res := db.Table(user.TableName()).Create(&user)
	return res.RowsAffected != 0
}

func DeleteTestUserOTP(mailid string) bool {
	verifyUser := models.VerifyUser {
		Mailid: mailid,
	}
	db := GetDBInstance()
	res := db.Delete(&verifyUser);
	return res.RowsAffected != 0
}