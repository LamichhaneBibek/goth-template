package server

import (
	"log"
	"net/http"

	"github.com/LamichhaneBibek/goth-template/internal"
	"github.com/LamichhaneBibek/goth-template/internal/api_errors"

	"github.com/a-h/templ"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func (api *Api) RegisterRoutes() *chi.Mux {
	r := chi.NewRouter()

	r.Use(middleware.Heartbeat("/ping"))
	r.Use(middleware.Logger)

	r.Handle("/static/*", http.FileServer(http.FS(internal.StaticFiles)))

	r.HandleFunc("/", NewHandler(root))
	r.HandleFunc("/about", NewHandler(about))
	r.HandleFunc("/contact", NewHandler(contact))
	r.HandleFunc("/blogs", NewHandler(blog))
	r.HandleFunc("/blogs/{id}", NewHandler(blog_details))
	r.HandleFunc("/gallery", NewHandler(gallery))

	return r
}

type CustomHandler func(w http.ResponseWriter, request *http.Request) error

func NewHandler(customHandler CustomHandler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		err := customHandler(w, r)
		if err != nil {
			log.Printf("Error: %s", err.Error())
			if clientErr, ok := err.(*api_errors.ClientErr); ok {
				respondWithJSON(w, clientErr.HttpCode, clientErr)
			} else {
				respondWithJSON(w, http.StatusInternalServerError,
					api_errors.InternalErr{
						HttpCode: http.StatusInternalServerError,
						Message:  "internal server error",
					},
				)
			}
		}
	}
}

func Render(w http.ResponseWriter, r *http.Request, comp templ.Component) error {
	return comp.Render(r.Context(), w)
}
