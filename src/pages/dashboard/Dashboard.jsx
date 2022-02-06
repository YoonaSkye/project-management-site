// styles
import "./Dashboard.css";

// components
import ProjectList from "../../components/ProjectList";

import { useCollection } from "../../hooks/useCollection";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");

  return (
    <div>
      <div className="page-title">Dashboard</div>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectList projects={documents} />}
    </div>
  );
}
