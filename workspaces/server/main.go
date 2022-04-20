package main

import (
	"fmt"
	"net/http"

	"github.com/rs/cors"
)

type application struct {
	port int64
}

func main() {

	app := &application{
		port: 4000,
	}

	co := cors.New(cors.Options{
		AllowOriginFunc: func(origin string) bool {
			return true
		},
		AllowedMethods:   []string{"GET", "POST", "OPTIONS", "DELETE", "PUT", "PATCH"},
		AllowedHeaders:   []string{"Keep-Alive", "User-Agent", "X-Requested-With", "If-Modified-Since", "Cache-Control", "Content-Type", "Authorization", "Access-Control-Allow-Origin"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           600,
	})

	server := http.Server{
		Addr:    ":4000",
		Handler: co.Handler(app.controller()),
	}

	server.ListenAndServe()

	fmt.Println("Server is up!")
}
