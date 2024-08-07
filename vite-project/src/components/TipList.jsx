import TipItem from "./TipItem";

function TipList({ tips }) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th className="text-xl">Date</th>
            <th className="text-xl">Tip Amount</th>
          </tr>
        </thead>
        {/* add [TipItem] to body */}
        <tbody>
          {tips.map((tip, index) => (
            <TipItem key={index} tip={tip} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TipList;
