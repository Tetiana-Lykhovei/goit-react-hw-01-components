import React from "react";
import s from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";
import PropTypes from "prop-types";

const FriendList = ({ people }) => {
  return (
    <ul className={s.friendList}>
      {people.map((el) => (
        <FriendListItem el={el} />
      ))}
    </ul>
  );
};
export default FriendList;

FriendList.propTypes = {
  people: PropTypes.arrayOf(PropTypes.object).isRequired,
};
