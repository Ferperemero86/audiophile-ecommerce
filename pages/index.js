import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";

const USERS_QUERY = gql`
  query customers {
    getUser(id: 4) {
      id
      name
      age
      active
    }
  }
`;

export default function Home() {
  const {data, loading} = useQuery(USERS_QUERY);

  if (!loading) {
    console.log("DATA", data);
  }
  return <h1>Home</h1>
}
