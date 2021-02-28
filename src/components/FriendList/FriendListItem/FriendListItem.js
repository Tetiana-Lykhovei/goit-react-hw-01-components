import React from "react";
import s from "../FriendList.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ el }) => {
  const { avatar, name, id } = el;
  return (
    <li className={s.FriendListItem} key={id}>
      <span className={el.isOnline ? s.status : s.statusOffline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="50" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  el: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default FriendListItem;
