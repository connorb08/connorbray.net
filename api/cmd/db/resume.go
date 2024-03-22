package db

import "context"

func InsertEmployment(e Employment) error {
	_, err := db.Collection("employment").InsertOne(context.Background(), e)
	return err
}

func InsertEducation(e Education) error {
	_, err := db.Collection("education").InsertOne(context.Background(), e)
	return err
}
