import { connect } from 'react-redux';
import { UserTable } from './UserTable';
import { usersDataSelector } from './../selectors';
import { deleteUser } from './../ducks';

const mapStateToProps = state => ({
  users: usersDataSelector(state),
});

const mapDispatchToProps = {
  deleteUser,
};

export const UserTableContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTable);
