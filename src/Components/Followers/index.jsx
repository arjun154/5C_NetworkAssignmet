import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../utils/api";
import InputBox from "../InputBox";
import Styles from "./followers.module.css";

export default function Followers() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const { username } = useParams();
  const history = useHistory();

  useEffect(() => {
    api
      .get(`https://api.github.com/users/${username}/followers`)
      .then((res) => setData(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [username]);

  return (
    <div>
      <InputBox />
      <h1>Followers</h1>
      {loading && <h1>Loading.....</h1>}
      <div className={Styles.container}>
        {!loading &&
          data &&
          data.map((item) => (
            <div key={item.id} className={Styles.items}>
              <img
                src={item.avatar_url}
                alt="avatar"
                className={Styles.avatar}
              />
              <h1 onClick={() => history.push(`/repo/${item.login}`)}>
                {item.login}
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
}
