import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  return <h2>Single Post Page #{id}</h2>;
}
