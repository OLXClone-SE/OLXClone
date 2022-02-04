package models

type User struct {
	Mailid   string `gorm:"primaryKey"`
	FName    string
	LName    string
	Password string
	OTP      int
	Phone    string
}

type VerifyUser struct {
	Mailid   string `gorm:"primaryKey"`
	OTP      int
}

func (user *User) TableName() string {
	return "Users"
}

func (user *VerifyUser) TableName() string {
	return "VerifyUsers"
}