import Button from "./Button";

export default function Banner() {
  return (
    <div className="w-full h-[37.5rem] rounded-[1.5rem] relative bg-gray-900 ">
      <img
        src="../../public/BannerBg.jpeg"
        alt="Banner image"
        className="w-full h-full object-cover rounded-[1.5rem]"
      />
      <div className="absolute inset-0 bg-black/50 rounded-[1.5rem]"> </div>
      <div className="absolute inset-0 flex flex-col gap-[1.5rem] items-center justify-center text-white">
        <h1 className="text-[3.25rem] font-[700] text-[#FFFFFF] max-w-[56.0625rem] text-center">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-[1.125rem] font-[400] text-center max-w-[58.3125rem]">
          Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
          Database and solve 500+ coding problems to become an exceptionally
          well world-class Programmer.
        </p>
        <div className="flex gap-[1.5rem] justify-center items-center">
          <Button title={"Explore Now"} type={"primary"} />
          <Button title={"Our Feedback"} type={"secondary"} />
        </div>
      </div>
    </div>
  );
}
