package utilities

import (
	"fmt"
	"log"
	"os"
	"server/constants"
	"time"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var dbIns *gorm.DB = nil

func GetDBConnectionString() string {
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	connStr := fmt.Sprintf("host=%s user=%s password=%s "+
		"dbname=%s port=%s sslmode=disable",
		os.Getenv(constants.DB_HOST), os.Getenv(constants.DB_USER), os.Getenv(constants.DB_PASS), os.Getenv(constants.DB_NAME), os.Getenv(constants.DB_PORT))
	return connStr
}

func GetDBInstance() *gorm.DB {
	if dbIns != nil {
		return dbIns
	}
	db, err := gorm.Open(postgres.Open(GetDBConnectionString()), &gorm.Config{})
	if err != nil {
		log.Fatal("Not able to open db connection")
		return nil
	}
	postgresDB, err := db.DB()
	if err != nil {
		log.Fatal("Not able to open db connection")
		return nil
	}
	postgresDB.SetMaxIdleConns(10)
	postgresDB.SetMaxOpenConns(100)
	postgresDB.SetConnMaxLifetime(time.Hour)
	dbIns = db
	return dbIns
}
