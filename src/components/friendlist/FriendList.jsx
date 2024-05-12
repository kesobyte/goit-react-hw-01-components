import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import clsx from 'clsx';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span
            className={clsx(css.status, {
              [css.online]: friend.isOnline,
              [css.offline]: !friend.isOnline,
            })}
          >
            {friend.isOnline}
          </span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

//Type Checking using propTypes
FriendList.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
