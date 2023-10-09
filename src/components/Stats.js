const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items! 🧺</em>
      </p>
    );
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / items.length) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? `You have got everything ready! ✈️`
        : `You have ${items.length} items on your list, and you have already packed ${numPacked} (${percentage}%)🎒`}
    </footer>
  );
};

export default Stats;