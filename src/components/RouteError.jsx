import { Link } from "react-router-dom";

export default function RouteError() {
  return (
    <div>
      <h2>You seem a little lost.</h2>
      <Link to="/">Home</Link>
    </div>
  );
}
