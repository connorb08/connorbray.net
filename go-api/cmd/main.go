package main

import (
	"log"
	db "main/cmd/db"
	"net/http"
	"os"

	"github.com/go-chi/chi"
)

var (
	Router *chi.Mux = chi.NewRouter()
)

func main() {

	dbClient, err := db.Connect()
	if err != nil {
		log.Fatal(err)
	}
	_ = dbClient

	if os.Getenv("SEED_DATABASE") == "true" {
		err = db.SeedEmployment()
		if err != nil {
			log.Fatal(err)
		}
		err = db.SeedEducation()
		if err != nil {
			log.Fatal(err)
		}
	}

	Router.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("hello world"))
	})
	err = http.ListenAndServe(":8080", Router)
	log.Fatal(err)
}
