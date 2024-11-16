package main

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

var users = []User{
	{ID: 1, Username: "user1", Email: "test@gmail.com", Password: "password"},
	{ID: 2, Username: "user2", Email: "test2@gmail.com", Password: "password2"},
}

func main() {
	router := gin.Default()
	router.GET("/user/:id", getUser)
	router.POST("/user", createUser)

	router.Run(":8080")
}

func getUser(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.Atoi(idParam)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"message": "Invalid ID"})
		return
	}

	for _, user := range users {
		if user.ID == id {
			c.JSON(http.StatusOK, user)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "User not found"})
}

func createUser(c *gin.Context) {
	var user User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"message": "Invalid request"})
		return
	}

	users = append(users, user)
	c.IndentedJSON(http.StatusCreated, user)
}
