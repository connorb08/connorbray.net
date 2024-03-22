package db

import "context"

func SeedEmployment() error {

	err := db.Collection("employment").Drop(context.Background())
	if err != nil {
		return err
	}

	e := Employment{
		Company:     "Tyler Technologies",
		Position:    "Software Engineer",
		Description: "Software Deployment Automation",
		StartDate:   "07/2023",
		EndDate:     "09/2023",
		Location:    "Yarmouth, ME",
		IconPath:    "tyler.png",
	}

	err = InsertEmployment(e)
	return err
}

func SeedEducation() error {

	err := db.Collection("education").Drop(context.Background())
	if err != nil {
		return err
	}

	e := Education{
		School:      "University of Maine",
		Degree:      "B.S. Computer Science",
		Description: "Student Body President",
		StartDate:   "8/2019",
		EndDate:     "5/2023",
		Location:    "Orono, ME",
		IconPath:    "umaine.png",
	}

	err = InsertEducation(e)
	return err
}
