const people = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
  },
  {
    id: 4,
    name: "Alice Williams",
    email: "alicewilliams@example.com",
  },
  {
    id: 5,
    name: "Chris Davis",
    email: "chrisdavis@example.com",
  },
];

const Participants = () => {
  return (
    <main>
      <h1>"Event" participants</h1>
      <ul>
        {people.map(({ id, name, email }) => (
          <li key={id}>
            <h2>{name}</h2>
            <p>{email}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Participants;
