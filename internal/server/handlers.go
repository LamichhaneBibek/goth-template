package server

import (
	"net/http"

	"github.com/LamichhaneBibek/goth-template/internal/views"
)

func root(w http.ResponseWriter, r *http.Request) error {
	return Render(w, r, views.Home("home"))
}

func about(w http.ResponseWriter, r *http.Request) error {
	return Render(w, r, views.About("about"))
}

func contact(w http.ResponseWriter, r *http.Request) error {
	return Render(w, r, views.Contact("contact"))
}

func blog(w http.ResponseWriter, r *http.Request) error {
	return Render(w, r, views.Blog("blogs"))
}

func blog_details(w http.ResponseWriter, r *http.Request) error {
	return Render(w, r, views.BlogDetails("blog_details"))
}

func gallery(w http.ResponseWriter, r *http.Request) error {
	return Render(w, r, views.Gallery("gallery"))
}
