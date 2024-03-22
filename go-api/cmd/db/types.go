package db

type Employment struct {
	Company     string
	Position    string
	Description string
	StartDate   string
	EndDate     string
	Location    string
	IconPath    string
}

type Education struct {
	School      string
	Degree      string
	Description string
	Location    string
	StartDate   string
	EndDate     string
	IconPath    string
}

type ProjectLinks struct {
	GitHub  string
	Website string
}
type Project struct {
	Name        string
	Description string
	Language    string
	Links       []ProjectLinks
}
