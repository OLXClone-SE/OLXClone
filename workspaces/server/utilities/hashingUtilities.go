package utilities

import "golang.org/x/crypto/bcrypt"

func GetHashString(inputString string) string {
	hash, _ := bcrypt.GenerateFromPassword([]byte(inputString), bcrypt.DefaultCost)
	return string(hash)
}

func MatchHash(hash string, inputString string) bool {
	errf := bcrypt.CompareHashAndPassword([]byte(hash), []byte(inputString))
	if errf != nil && errf == bcrypt.ErrMismatchedHashAndPassword {
		return false
	}
	return true
}
