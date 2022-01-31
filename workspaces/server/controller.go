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
	router.HandlerFunc(http.MethodPost, paths.FORGOT_PASSWORD, handlers.ForgotPasswordHandler)
	return router
}
