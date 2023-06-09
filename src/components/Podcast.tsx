import { useParams } from "react-router-dom";

export function Podcast() {
  const { podcastId } = useParams();

  return <h1>Podcast component in progress PodcastId: {podcastId}</h1>;
}
