import React from 'react';
import moment from 'moment';
import { DATE_FORMAT, subscriptionTypes } from 'common/constants';

function getSubscriptionById(id) {
  return subscriptionTypes.find(
    ({ id: subscriptionId }) => subscriptionId === id,
  );
}

export function UserTable({ users, deleteUser }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Name</th>
          <th>Date</th>
          <th>Subscription</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(users).map(userKey => {
          const { id, email, name, date, subscription } = users[userKey];
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{email}</td>
              <td>{name}</td>
              <td>{moment(date).format(DATE_FORMAT)}</td>
              <td>{getSubscriptionById(subscription).name}</td>
              <td>
                <button type="button" onClick={() => deleteUser(id)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
