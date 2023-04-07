"use client";
import { useRouter } from "next/navigation";

function Users({ users }) {
  const router = useRouter();

  return (
    <div>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
          >
            <div>
              <h5>
                {user.id}. {user.first_name} {user.last_name}
              </h5>
              <p>Email: {user.email}</p>
            </div>
            <img src={user.avatar} style={{ borderRadius: "50%" }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
