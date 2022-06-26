interface AnimeJSON {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  rank: number;
  mean_score: number | null;
  life: number;
  status: string;
  genres: string;
  media_type: string;
  release_year: number;
  date: string;
}
export default AnimeJSON;
