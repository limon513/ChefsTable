export default function Button({ type, title }) {
  const primary = `px-[1.88rem] py-[1.25rem] text-[1.25rem] font-[600] text-[#150B2B] bg-[#0BE58A] rounded-[3.125rem] content-center`;
  const secondary = `px-[1.88rem] py-[1.25rem] text-[1.25rem] font-[600] text-[#FFFFFF] bg-transparent rounded-[3.125rem] border-[2px] content-center`;
  const primarySm = `px-[1.13rem] py-[.56rem] text-[1rem] font-[500] text-[#150B2B] bg-[#0BE58A] rounded-[3.125rem] content-center w-full`;
  const primaryMd = `px-[1.5rem] py-[.81rem] text-[1.125rem] font-[500] text-[#150B2B] bg-[#0BE58A] rounded-[3.125rem] content-center`;
  return (
    <button
      className={
        (type == "primary" && primary) ||
        (type == "primary-sm" && primarySm) ||
        (type == "primary-md" && primaryMd) ||
        (type == "secondary" && secondary)
      }
    >
      {title}
    </button>
  );
}
