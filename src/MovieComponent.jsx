
import { MyFunctionMovieComponent } from "./MyFunctionMovieComponent"
import { MyFunctionMovieRateComponent } from "./MyFunctionMovieRateComponent"
import {React} from "react"

export function MovieComponent() {
     
   const moviesListe= [
        {
          "id": 1,
          "titreFilm": "Le Seigneur des Anneaux",
          "description": "Un jeune hobbit entreprend un voyage épique pour détruire un anneau maléfique et sauver le monde.",
          "image": "https://fr.web.img3.acsta.net/medias/nmedia/18/85/36/32/20184118.jpg"
        },
        {
          "id": 2,
          "titreFilm": "Inception",
          "description": "Un voleur de rêves entre dans l'esprit des gens pour voler leurs secrets les plus profonds.",
          "image": "https://fr.web.img3.acsta.net/medias/nmedia/18/85/36/32/20184118.jpg"
        },
        {
          "id": 3,
          "titreFilm": "La La Land",
          "description": "Une histoire d'amour entre une actrice et un musicien dans la ville de Los Angeles.",
          "image": "https://fr.web.img3.acsta.net/medias/nmedia/18/85/36/32/20184118.jpg"
        },
        {
          "id": 4,
          "titreFilm": "Jurassic Park",
          "description": "Des dinosaures génétiquement recréés s'échappent et terrorisent un parc à thème.",
          "image": "https://fr.web.img3.acsta.net/medias/nmedia/18/85/36/32/20184118.jpg"
        },
        {
          "id": 5,
          "titreFilm": "Pulp Fiction",
          "description": "Une série d'histoires entrelacées mettant en scène des gangsters, des boxeurs et des tueurs à gages.",
          "image": "https://fr.web.img3.acsta.net/medias/nmedia/18/85/36/32/20184118.jpg"        }
      ];
      
    
    return (

<div className="container">

    <div>
        <p>Films Disponible</p>
        <hr />
       
        { moviesListe.map((movieEl) => (
            
            <MyFunctionMovieComponent movies={movieEl}  key={movieEl.id} />
        
        ))}
        
        
       
        
    </div>
</div>

    )}
 