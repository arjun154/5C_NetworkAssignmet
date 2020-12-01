import React from "react";
import Styles from "./homepage.module.css";
import { useHistory } from "react-router-dom";

export default function Repos({ data }) {
  const history = useHistory();
  const user = data[0].owner.login;
  const avatar = data[0].owner.avatar_url;

  return (
    <div>
      <div className={Styles.userDetails}>
        <img src={avatar} alt="avatar" className={Styles.avatar} />
        <div>
          <h1>{user}</h1>
          <button
            className={Styles.FollowerButton}
            onClick={() => history.push(`/followers/${user}`)}
          >
            Followers
          </button>
        </div>
      </div>

      <div className={Styles.container}>
        {data.map((item) => (
          <div key={item.id} className={Styles.repoDetails}>
            <img src={avatar} alt="avatar" className={Styles.image} />
            <div className={Styles.text}>
              <h3 onClick={() => history.push(`/repoDetails/${item.name}`)}>
                {item.name}
              </h3>
              <div>{item.language}</div>
              <div>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
