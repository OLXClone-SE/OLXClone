package utilities

import (
	"fmt"
	"log"
	"os"
	"server/constants"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func GetDBConnectionString() string {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	connStr := fmt.Sprintf("host=%s port=%s user=%s "+
		"password=%s dbname=%s sslmode=disable",
		os.Getenv(constants.DB_HOST), os.Getenv(constants.DB_PORT), os.Getenv(constants.DB_USER), os.Getenv(constants.DB_PASS), os.Getenv(constants.DB_NAME))
	return connStr
}
