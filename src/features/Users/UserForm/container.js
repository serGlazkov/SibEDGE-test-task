import { connect } from 'react-redux';
import { UserForm } from './UserForm';
import { addUser } from './../ducks';
import { userFormErrorSelector } from './../selectors';

const mapStateToProps = state => ({
  additionalError: userFormErrorSelector(state),
});

const mapDispatchToProps = {
  addUser,
};

export const UserFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserForm);
