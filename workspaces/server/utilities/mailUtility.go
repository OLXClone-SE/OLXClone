package utilities

import (
	"crypto/tls"
	"fmt"
	"log"
	"os"
	"server/constants"
	"strconv"

	"github.com/joho/godotenv"
	gomail "gopkg.in/gomail.v2"
)

func SendMail(to string, subject string, body string) bool {
	err := godotenv.Load("../.env")
	if err != nil {
		fmt.Println("failed parsing environment variables")
		return false
	}
	m := gomail.NewMessage()
	m.SetHeader("From", os.Getenv(constants.FROM_MAIL))
	m.SetHeader("To", to)
	m.SetHeader("Subject", subject)
	m.SetBody("text/plain", body)
	socket, _ := strconv.Atoi(os.Getenv(constants.SMTP_SOCKET))
	d := gomail.NewDialer(os.Getenv(constants.SMTP_SERVER), socket, os.Getenv(constants.MAIL_ID), os.Getenv(constants.MAIL_PASS))
	d.TLSConfig = &tls.Config{InsecureSkipVerify: true}
	if err := d.DialAndSend(m); err != nil {
		return false
	}
	log.Println("Mail Sent!")
	return true
}
