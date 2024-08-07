function TipSummary({ tips }) {
  // Calculate 'total' & 'average' variables
  const total = tips.reduce((acc, tip) => acc + tip.amount, 0);
  const average = tips.length > 0 ? total / tips.length : 0;

  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
        <div className="stat place-items-center">
          <div className="stat-title">Total Tips</div>
          <div className="stat-value">${total.toFixed(2)}</div>
        </div>
      </div>

      <div className="divider lg:divider-horizontal"></div>

      <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
        <div className="stat place-items-center">
          <div className="stat-title">Avg Daily Tip</div>
          <div className="stat-value">${average.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default TipSummary;
