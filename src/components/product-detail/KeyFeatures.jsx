export default function KeyFeatures({ features, styles }) {
  if (!features || features.length === 0) return null;

  return (
    <>
      <h2>Key Features</h2>
      <ul>
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
    </>
  );
}
