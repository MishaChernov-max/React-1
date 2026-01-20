const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export function List() {
  return (
    <>
      <h2>People list</h2>
      <ul style={{ listStyle: "none" }}>
        {people.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </>
  );
}
