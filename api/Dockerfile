FROM golang:1.18.2-alpine3.16 AS builder
WORKDIR /app 
COPY . . 
RUN make build

//Run stage
FROM alpine:3.16
WORKDIR /app 
COPY --from=builder /app/out .
EXPOSE 8080
CMD ["/app/out"]
