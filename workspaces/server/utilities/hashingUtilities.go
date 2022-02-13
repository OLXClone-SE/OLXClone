package utilities

import "golang.org/x/crypto/bcrypt"

func GetHashString(inputString string) string {
	hash, _ := bcrypt.GenerateFromPassword([]byte(inputString), bcrypt.DefaultCost)
	return string(hash)
}
