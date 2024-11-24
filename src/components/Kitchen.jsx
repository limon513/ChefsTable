import CookingTable from "./CookingTable";
import PrepareTable from "./PrepareTable";

export default function Kitchen() {
  return (
    <div className="border-[2px] rounded-[1rem] py-[2rem] flex flex-col gap-[2rem] col-span-2">
      <PrepareTable />
      <CookingTable />
    </div>
  );
}
