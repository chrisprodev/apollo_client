import React from "react";
import "./App.css";
import { CHARACTERS } from "./gql/characters/query";
import { useQuery } from "@apollo/client";

interface Character {
  id: number;
  name: string;
}

interface CharactersResults {
  results: Character[];
}

interface CharactersData {
  characters: CharactersResults;
}

const App: React.FC = () => {
  const { loading, error, data } = useQuery<CharactersData, Character>(
    CHARACTERS
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data &&
        data.characters.results.map((character) => (
          <div key={character.id}>{character.name}</div>
        ))}
    </>
  );
};

export default App;
