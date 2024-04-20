package main

import (
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
)


func main() {
    router := httprouter.New()
    router.Handler("GET", "/", http.FileServer(http.Dir("hshacks-app-frontend/build")))

    log.Fatal(http.ListenAndServe(":8000", router))
}
