import { useParams } from "react-router-dom";

export const Profile = () => {
  const { name } = useParams();

  return (
    <section>
      <h2>Work in progress...</h2>
      <h3>{name}</h3>
    </section>
  );
};
