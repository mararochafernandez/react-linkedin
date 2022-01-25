import User from './User';

const UserList = (props) => {
  const renderUsers = () =>
    props.users.map((user) => (
      <li key={user.id} className="card">
        <User user={user} />
      </li>
    ));

  return (
    <section>
      <ul className="cards">{renderUsers()}</ul>
    </section>
  );
};

export default UserList;
