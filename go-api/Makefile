# Go parameters
GOCMD = go
GOBUILD = $(GOCMD) build
GOCLEAN = $(GOCMD) clean
GOTEST = $(GOCMD) test
GOGET = $(GOCMD) get

# Tell Go to use vendoring for dependencies (optional)
GO111MODULE=on

# Main package name
MAIN_PACKAGE = ./cmd/main.go

# Output binary name
BINARY_NAME = out

# Build targets
all: clean build
build:
	$(GOBUILD) -o $(BINARY_NAME) $(MAIN_PACKAGE)
clean:
	$(GOCLEAN)
	rm -f $(BINARY_NAME)
test:
	$(GOTEST) -v ./...
run:
	$(GOBUILD) -o $(BINARY_NAME) $(MAIN_PACKAGE)
	./$(BINARY_NAME)

build_docker:
	docker build -t go-api .
