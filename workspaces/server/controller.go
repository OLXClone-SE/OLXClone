package main

import (
	"net/http"
	"server/handlers"
	"server/paths"

	"github.com/julienschmidt/httprouter"
)

func (app *application) controller() *httprouter.Router {
	router := httprouter.New()
	router.HandlerFunc(http.MethodPost, paths.LOGIN, handlers.LoginHandler)
	router.HandlerFunc(http.MethodPost, paths.RESET_PASSWORD, handlers.ResetPasswordHandler)
	router.HandlerFunc(http.MethodPost, paths.SIGNUP, handlers.SignupHandler)
	router.HandlerFunc(http.MethodPost, paths.USER_VERIFICATION, handlers.UserVerificationHandler)
	return router
}
