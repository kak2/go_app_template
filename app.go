package main

import (
	"fmt"
	"go/cfg"
	"go/logger"
	"os"
)

func main() {
	config, err := cfg.LoadAbstract("/home/vagrant/code/etc/cfg.json", "")
	if err != nil {
		fmt.Println("Could not read cfg file:", err)
		os.Exit(1)
	}

	logpath := config["logpath"].Str
	fmt.Println("logpath:", logpath)
	err = logger.Init(logpath, // specify the directory to save the logfiles
		400,   // maximum logfiles allowed under the specified log directory
		20,    // number of logfiles to delete when number of logfiles exceeds the configured limit
		100,   // maximum size of a logfile in MB
		false) // whether logs with Trace level are written down
	if err != nil {
		fmt.Println("Could not init logger with error:", err)
		os.Exit(1)
	}
	logger.Info("abc")
	logger.Info("abc")
	logger.Info("abc")
	logger.Info("abc")
	os.Exit(0)
}
