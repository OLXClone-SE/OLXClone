package models

type User struct {
	Mailid   string `gorm:"primaryKey"`
	FName    string
	LName    string
	Password string
	OTP      int
	Phone    string
}

func (user *User) TableName() string {
	return "Users"
}
