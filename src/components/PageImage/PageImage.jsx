import React, { useState } from "react";
import styled from "styled-components";

const FormCont = styled.form`
  margin: 4rem auto;
`;

const PageImage = () => {
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  );
  const [name, setName] = useState("Rick Sanchez");
  const [species, setSpecies] = useState("Human");
  const [error, setError] = useState("");

  const apiCall = (e) => {
    // Stop Page reloads
    e.preventDefault();
    e.stopPropagation();
    if (e.target[0].value === "") {
      return;
    }
    fetch(`https://rickandmortyapi.com/api/character/${e.target[0].value}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          setError(result.error);
        } else {
          setError("");
          setUrl(result.image);
          setName(result.name);
          setSpecies(result.species);
          console.log(result);
        }
      });
  };
  return (
    <>
      <FormCont onSubmit={apiCall}>
        <label for="image-name">{"Image ID Number (1-493): "}</label>
        <input type="text" id="image-name" />
      </FormCont>
      {!error && (
        <>
          <img src={url} alt="Rick and Morty Character" />
          <p>{`Name: ${name}`}</p>
          <p>{`Species: ${species}`}</p>
        </>
      )}
      {error && <p>{`${error}: Try Again`}</p>}
    </>
  );
};

export default PageImage;
