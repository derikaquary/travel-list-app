export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>
          You have not packed anything yet, let's
          pack up 🐱‍🏍
        </em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter(
    (item) => item.packed,
  ).length;
  const percentage = Math.round(
    (numPackedItems / numItems) * 100,
  );

  return (
    <footer className="stats">
      <em>
        {" "}
        {percentage === 100
          ? `You have packed everything, let's go ✈`
          : `💼 You have ${numItems} item on your List,
        and you already packed ${
          numPackedItems === 0
            ? "none"
            : numPackedItems
        } (
        ${percentage}%)`}
      </em>{" "}
    </footer>
  );
}
