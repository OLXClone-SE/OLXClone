package utilities

import (
	"testing"
)

func TestGetDBConnectionString(t *testing.T) {
	got := GetDBConnectionString()
	if got == "" {
		t.Errorf("cannot connect to db")
	}
}

func TestGetDBInstance(t *testing.T) {
	t.Setenv("dbhost", "localhost");
	t.Setenv("dbuname", "postgres");
	t.Setenv("dbpass", "Kvmr@1106");
	t.Setenv("dbname", "postgres");
	t.Setenv("dbport", "5432");
    got := GetDBInstance()
    if got == nil {
        t.Errorf("Cant create db instance")
    }
}