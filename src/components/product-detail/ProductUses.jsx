export default function ProductUses({ uses, styles }) {
  if (!uses || uses.length === 0) return null;

  return (
    <>
      <h2>Uses</h2>
      <ul>
        {uses.map((u, i) => (
          <li key={i}>{u}</li>
        ))}
      </ul>
    </>
  );
}
