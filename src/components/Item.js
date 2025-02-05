export default function Item({
  item,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onToggleItem(item.id)}
      />
      <span
        style={
          item.packed
            ? { textDecoration: "line-through" }
            : {}
        }
      >
        {item.description} {item.quantity}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
      >
        ❌
      </button>
    </li>
  );
}
