package main

import (
	"fmt"
	"net/http"
)

type application struct {
	port int64
}

func main() {

	app := &application{
		port: 4000,
	}

	server := http.Server{
		Addr:    ":4000",
		Handler: app.controller(),
	}

	server.ListenAndServe()

	fmt.Println("Server is up!")
}
