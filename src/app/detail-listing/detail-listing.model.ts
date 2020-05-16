export class DetailListing {
  public Actors: string;
  public Awards: string;
  public Country: string;
  public DVD: string;
  public Director: string;
  public Genre: string;
  public Language: string;
  public Metascore: string;
  public Plot: string;
  public Poster: string;
  public Production: string;
  public Rated: string;
  public Ratings: Ratings[];
  public Released: string;
  public Response: string;
  public Runtime: string;
  public Title: string;
  public Type: string;
  public Website: string;
  public Writer: string;
  public Year: string;
  public imdbID: string;
  public imdbRating: string;
  public imdbVotes: string;
}

export interface Ratings {
  Source: string;
  Value: string;
}
