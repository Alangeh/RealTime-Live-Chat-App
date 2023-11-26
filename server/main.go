package main

import (
	"fmt"
	"net/http"
	"server/pkg/websocket"
)

func serveWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request){
	
}

func setupRoutes (){
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request){
		serveWS(pool, w, r)
	})
}

func main(){
	fmt.Println("Full stack chat application")
	setupRoutes()
	http.ListenAndServe(":9000", nil)
}