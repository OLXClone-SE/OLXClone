package utilities

import (
	"math/rand"
	"time"
)

func GenerateOtp() int {
	max := 9999
	min := 1000
	rand.Seed(time.Now().UTC().UnixNano())
	otp := rand.Intn(max-min) + min
	return otp
}
