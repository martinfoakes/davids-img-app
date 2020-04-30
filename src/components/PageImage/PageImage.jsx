import React, { useState } from "react";
import styled from "styled-components";

const FormCont = styled.form`
  margin: 4rem auto;
`;

const PageImage = () => {
  const [url, setUrl] = useState(
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  );
  const [name, setName] = useState("Rick");

  const apiCall = (e) => {
    // Stop Page reloads
    e.preventDefault();
    e.stopPropagation();
    fetch(`https://rickandmortyapi.com/api/character/${e.target[0].value}`)
      .then((res) => res.json())
      .then((result) => {
        setUrl(result.image);
        setName(result.name);
        console.log(result);
      });
  };
  return (
    <>
      <FormCont onSubmit={apiCall}>
        <label for="image-name">{"Image ID Number (1-493): "}</label>
        <input type="text" id="image-name" />
      </FormCont>
      <img src={url} alt="Rick and Morty Character" />
      <p>{name}</p>
    </>
  );
};

export default PageImage;
