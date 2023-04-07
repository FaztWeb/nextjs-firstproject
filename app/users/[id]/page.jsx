async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img
              src={user.avatar}
              alt={user.first_name + " " + user.last_name}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="card-body text-center">
            User
            <h3>
              {user.id}. {user.first_name} {user.last_name}
            </h3>
            <p>Email: {user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
