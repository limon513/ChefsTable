export default function SearchBar() {
  return (
    <div className="flex gap-[1rem]">
      <div className="rounded-[3.13rem] bg-[#150B2B0D] pl-[1.5rem] flex gap-[0.5rem]">
        <img src="../../public/search.svg" alt="search icon" />
        <input
          type="text"
          placeholder="Search"
          className="bg-inherit text-[#150B2BB2] text-[1rem] px-[1.5rem] py-[.75rem] rounded-[3.13rem]"
        />
      </div>
      <div className="content-center bg-[#0BE58A] p-[.5rem] rounded-[3.125rem]">
        <img src="../../public/Frame.svg" alt="profile photo" />
      </div>
    </div>
  );
}
