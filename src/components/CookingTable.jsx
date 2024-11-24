export default function CookingTable() {
  return (
    <div>
      <div className="w-full text-center flex flex-col items-center">
        <p className="text-[1.5rem] font-[600]">Currently cooking: 02</p>
        <hr className="w-[21.875rem] my-[1rem] bg-[#28282826] border-[1px]" />
      </div>
      <table className="table-auto w-full">
        <thead className="text-[1rem] font-[500] text-[#282828B2]">
          <tr>
            <th></th>
            <th className="px-[1.5rem] py-[1.25rem] text-start">Name</th>
            <th className="px-[1.5rem] py-[1.25rem] text-start">Time</th>
            <th className="px-[1.5rem] py-[1.25rem] text-start">Calories</th>
          </tr>
        </thead>
        <tbody className="bg-[#28282808] text-[1rem] font-[400] text-[#282828B2]">
          <tr>
            <td className="px-[1.5rem] py-[1.25rem]">1</td>
            <td className="px-[1.5rem] py-[1.25rem] text-start">
              Chicken Caesar Salad
            </td>
            <td className="px-[1.5rem] py-[1.25rem] text-start">20 minutes</td>
            <td className="px-[1.5rem] py-[1.25rem] text-start">
              400 calories
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end gap-[1rem] p-[1rem] text-[1rem] font-[500] text-[#282828CC]">
        <div>
          <p>Total Time =</p>
          <p>45 minutes</p>
        </div>
        <div>
          <p>Total Calories =</p>
          <p>1050 calories</p>
        </div>
      </div>
    </div>
  );
}
