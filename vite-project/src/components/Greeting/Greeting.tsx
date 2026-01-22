export function Greeting() {
  const hour = new Date().getHours();
  return (
    <div style={{ textAlign: "center" }}>
      {hour < 12 ? (
        <h4>Доброе утро!</h4>
      ) : hour < 18 ? (
        <h4>Доброе день!</h4>
      ) : (
        <h4>Доброе вечер!</h4>
      )}
    </div>
  );
}
