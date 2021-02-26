import React from "react";
import s from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ people }) => {
  return (
    <>
      <ul className={s.friendList}>
        {people.map((el) => {
          const { avatar, name, isOnline, id } = el;
          return (
            <li className={s.FriendListItem} key={id}>
              <span className={el.isOnline ? s.status : s.statusOffline}>
                {/* {el.isOnline} */}
              </span>
              <img className={avatar} src={avatar} alt={name} width="50" />
              <p className={s.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FriendList;

FriendList.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
