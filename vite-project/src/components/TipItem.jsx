function TipItem({ tip }) {
  return (
    // display item date & amount in a table row
    <tr>
      <th></th>
      <td>{tip.date}</td>
      <td>
        <div className="font-bold">${tip.amount.toFixed(2)}</div>
      </td>
    </tr>
  );
}

export default TipItem;
