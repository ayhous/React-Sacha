import { MovieComponent } from "./MovieComponent"

export function MyFunctionMovieComponent({movies}) {
    return (
                        console.log("dans le function"),
        
            <div >
                <hr />
                        <div >
                        <img src={movies.image} width="auto"  height="200px"  alt="Nom du film"/>
                        </div> 
                 
                        <div >
                        {movies.titrefilm}
                        </div>
                        
                        
                <div >
                    
                    
                            <h1>Film Description...</h1>

                                <p> 
                                    {movies.description}

                                    NPNONONONONONONOkuhkuhjkhjhbjhb
                                   
                                </p>


                </div>
                            
                            

                        
                <hr />
            </div>
                
            
            
    )
}
