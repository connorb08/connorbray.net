FROM golang:1.22.1-alpine3.19 AS builder
WORKDIR /app
COPY . .
RUN go build -o out ./cmd/main.go

# Run stage
FROM alpine:3.16
WORKDIR /app
COPY --from=builder /app/out .
EXPOSE 8080
CMD ["/app/out"]
