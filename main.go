package main

import (
	"log"
	"net/http"
	"gopkg.in/macaron.v1"
)

func main() {
	m := macaron.Classic()

	renderer := macaron.Renderer()
	m.Use(renderer)

	m.Get("/*", func(ctx *macaron.Context) {
		ctx.HTML(200, "homepage", nil)
	})

	m.Use(macaron.Static("dist"))

	http.Handle("/", m)

	err := http.ListenAndServe(":8000", nil)
	if err != nil {
		log.Fatal(err)
	}
}
