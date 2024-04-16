package main

import (
	"log"
	db "main/cmd/db"
	"net/http"

	"github.com/go-chi/chi"
)

var (
	Router *chi.Mux = chi.NewRouter()
)

func main() {

	db, err := db.Connect()
	if err != nil {
		log.Fatal(err)
	}
	_ = db

	Router.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("hello world"))
	})
	err = http.ListenAndServe(":8080", Router)
	log.Fatal(err)
}
