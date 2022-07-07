interface StatDetail {
  id: number;
  avg_tries: string;
  win: number;
  anime_id: number;
  participant: number;
  anime: AnimeStat;
}
export default StatDetail;

interface AnimeStat {
  title: string;
  date: string;
  image: string;
}
