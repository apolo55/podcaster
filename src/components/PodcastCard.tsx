import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface IPodcastCardProps {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
}

export function PodcastCard(props: IPodcastCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        width: "200px",
        height: "fit-content",
        margin: "25px 10px",
        cursor: "pointer",
      }}
      className="text-center shadow p-3 mb-5 bg-white rounded"
      onClick={() => {
        navigate(`podcast/${props.id}`);
      }}
    >
      <div className="text-center">
        <Image
          style={{ width: "100px", marginTop: "-50px" }}
          src={props.imageUrl}
          roundedCircle
        />
      </div>

      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{props.artist}</Card.Subtitle>
    </Card>
  );
}
