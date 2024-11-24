import Button from "./Button";

export default function PrepareTable() {
  return (
    <div>
      <div className="w-full text-center flex flex-col items-center">
        <p className="text-[1.5rem] font-[600]">Want to cook: 01</p>
        <hr className="max-w-[21.875rem] my-[1rem] bg-[#28282826] border-[1px]" />
      </div>
      <div className="w-full">
        <table className="table-auto">
          <thead className="text-[1rem] font-[500] text-[#282828B2]">
            <tr>
              <th className="px-[1.5rem] py-[1.25rem] text-start"></th>
              <th className="px-[1.5rem] py-[1.25rem] text-start">Name</th>
              <th className="px-[1.5rem] py-[1.25rem] text-start">Time</th>
              <th className="px-[1.5rem] py-[1.25rem] text-start">Calories</th>
              <th className="px-[1.5rem] py-[1.25rem] text-start">Action</th>
            </tr>
          </thead>
          <tbody className="bg-[#28282808] text-[1rem] font-[400] text-[#282828B2]">
            <tr className="">
              <td className="px-[1.5rem] py-[1.25rem] text-start">1</td>
              <td className="px-[1.5rem] py-[1.25rem] text-start">
                Chicken Caesar Salad
              </td>
              <td className="px-[1.5rem] py-[1.25rem] text-start">
                20 minutes
              </td>
              <td className="px-[1.5rem] py-[1.25rem] text-start">
                400 calories
              </td>
              <td className="">
                <Button title={"Preparing"} type={"primary-sm"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
