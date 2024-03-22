package db

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	dns string
	db  *mongo.Database
)

func init() {
	// err := godotenv.Load()
	// if err != nil {
	// 	// log.Fatal("Error loading .env file")
	// 	log.Println("Error loading .env file")
	// }

	dns = os.Getenv("DB_CONNECTION_STRING")
}

func Connect() (*mongo.Client, error) {
	clientOptions := options.Client().ApplyURI(dns)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal(err)
		return nil, err
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
		return nil, err
	}

	fmt.Println("Connected to MongoDB!")
	db = client.Database("prod")
	return client, nil
}
