package handlers

import (
	"fmt"
	"net/http"
	"server/constants"
	"server/models"
	"server/utilities"
	"time"

	"github.com/dgrijalva/jwt-go"
)

var jwtKey = []byte("abcd123")

type Token struct {
	Mailid string `json:"mailid"`
	*jwt.StandardClaims
}

type loginResponse struct {
	Approved bool `json:"approved"`
}

type loginRequestBody struct {
	Mailid   string `json:"mailid"`
	Password string `json:"password"`
}

func createLoginResponse(approved bool) []byte {
	response := loginResponse{
		Approved: approved,
	}
	loginResponse := utilities.ToJson(response)
	return loginResponse
}

func verifyUser(reqBodyObject loginRequestBody) bool {
	db := utilities.GetDBInstance()
	userInfo := models.User{}
	res := db.Table(userInfo.TableName()).Where(fmt.Sprintf("%s = ?", constants.MAIL_ID), reqBodyObject.Mailid).Select(constants.Password).Scan(&userInfo)
	return res.RowsAffected != 0 && utilities.MatchHash(userInfo.Password, reqBodyObject.Password)
}

func LoginHandler(writer http.ResponseWriter, request *http.Request) {
	var reqBodyObject loginRequestBody
	utilities.ParseRequestBody(request, &reqBodyObject)
	success := verifyUser(reqBodyObject)
	loginResponse := createLoginResponse(success)
	if success {
		expirationTime := time.Now().Add(1 * time.Minute)
		tk := Token{
			Mailid: reqBodyObject.Mailid,
			StandardClaims: &jwt.StandardClaims{
				ExpiresAt: expirationTime.Unix(),
			},
		}
		token := jwt.NewWithClaims(jwt.GetSigningMethod("HS256"), tk)
		tokenString, error := token.SignedString(jwtKey)
		if error != nil {
			fmt.Println(error)
		}
		fmt.Println("setting cookie")
		http.SetCookie(writer, &http.Cookie{
			Name:    "token",
			Value:   tokenString,
			Expires: expirationTime,
		})
	}
	if loginResponse != nil {
		utilities.WriteJsonResponse(writer, http.StatusOK, loginResponse)
	}
}
