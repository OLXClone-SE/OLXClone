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
	router.HandlerFunc(http.MethodPost, paths.UPDATE_USER_DETAILS, handlers.UpdateUserDetailsHandler)
	router.HandlerFunc(http.MethodPost, paths.GET_USER_DETAILS, handlers.GetUserDetailsHandler)
	router.HandlerFunc(http.MethodPost, paths.GET_PRODUCTS, handlers.GetProductsHandler)
	router.HandlerFunc(http.MethodPost, paths.SAVE_PRODUCTS, handlers.SaveProductHandler)
	return router
}
