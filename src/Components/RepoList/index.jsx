import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchRepos } from "../../Redux/Repos/action";
import Repos from "../InputBox/Repos";
import InputBox from "../InputBox";

export default function RepoList() {
  const { username } = useParams();
  const { data, loading } = useSelector((state) => state.repo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos(username));
  }, [username, dispatch]);

  return (
    <div>
      <InputBox />
      {loading && <h1>Loading Data.....</h1>}

      {!loading && data && <Repos data={data} />}
    </div>
  );
}
