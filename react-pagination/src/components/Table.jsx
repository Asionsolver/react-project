/* eslint-disable react/prop-types */

export const Table = ({ users }) => {
  return (
    <table className="table text-center border rounded">
      <thead className="">
        <tr className="">
          <th className="p-3 border text-primary">Id</th>
          <th className="p-3 border text-primary">Name</th>
          <th className="p-3 border text-primary">Phone</th>
          <th className="p-3 border text-primary">Email</th>
          <th className="p-3 border text-primary">Signup Date</th>
        </tr>
      </thead>
      <tbody className="">
        {users.map((user) => (
          <tr key={user.id}>
            <td className="border">{user.id}</td>
            <td className="border">{user.fullName}</td>
            <td className="border">{user.FullMobileNo}</td>
            <td className="border">{user.email}</td>
            <td className="border">{user.signupDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
