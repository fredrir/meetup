FROM golang:1.23.3-alpine AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build -o /main .

FROM alpine:latest
ENV PORT=8080
WORKDIR /app
COPY --from=builder /main .
EXPOSE 8080
CMD ["./main"]
