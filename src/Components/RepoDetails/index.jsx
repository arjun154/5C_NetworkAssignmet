import React from "react";
import InputBox from "../InputBox";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

export default function RepoDetails() {
  const { data } = useSelector((state) => state.repo);
  const { repo } = useParams();
  const history = useHistory();

  const repodata = data.filter((item) => item.name === repo);
  console.log(repodata);
  return (
    <div>
      <InputBox />
      <button onClick={() => history.push(`/repo/${repodata[0].owner.login}`)}>
        Back
      </button>
      <h1>{repodata[0].name}</h1>
      <p>{repodata[0].description}</p>
    </div>
  );
}
