import { useEffect, useState } from "react";
import { PodcastCard } from "./PodcastCard";

type PodcastItem = {
  id: {
    attributes: {
      "im:id": string;
    };
  };
  "im:name": {
    label: string;
  };
  "im:artist": {
    label: string;
  };
  "im:image": {
    label: string;
  }[];
};

export function Home() {
  const [podcastList, setPodcastList] = useState<PodcastItem[]>([]);

  useEffect(() => {
    fetchPodcastList();
  }, []);

  return (
    <div
      style={{ margin: "50px" }}
      className="d-flex flex-wrap justify-content-around"
    >
      {podcastList.map((podcast) => (
        <PodcastCard
          id={podcast.id.attributes["im:id"]}
          title={podcast["im:name"].label}
          artist={podcast["im:artist"].label}
          imageUrl={podcast["im:image"][2].label}
        />
      ))}
    </div>
  );

  async function fetchPodcastList() {
    try {
      const response = await fetch(
        "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
      );
      const jsonData = await response.json();
      setPodcastList(jsonData.feed.entry);
    } catch (error) {
      console.error("Error fetching the podcasts list:", error);
    }
  }
}
