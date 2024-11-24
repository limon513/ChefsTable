import Button from "./Button";

export default function MenuItem({ item }) {
  return (
    <div className="border-[2px] rounded-[1rem] p-[1.5rem] flex flex-col gap-[1.5rem]">
      <div className="h-[12.5rem] w-full relative">
        <img
          src={item.recipe_image}
          alt="item.recipe_name"
          className="h-full object-cover w-full rounded-[1rem]"
        />
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h2 className="text-[1.25rem] font-[600]">{item.recipe_name}</h2>
        <p className="text-[1rem] font-[400] text-[#878787]">
          {item.short_description}
        </p>
        <hr />
      </div>
      <div className="flex flex-col gap-[1rem]">
        <h3 className="text-[1.25rem] font-[500] text-[#282828]">
          Ingredients: {item.ingredients.length}
        </h3>

        <ul className="list-disc text-[1.125rem] font-[400] text-[#878787] ml-[2rem]">
          {item.ingredients.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>

        <hr />
      </div>

      <div className="flex justify-start gap-[1rem] text-[1rem] font-[400] text-[#282828]">
        <div className="flex gap-[.5rem]">
          <img src="../../public/clock.svg" alt="making time needed" />
          <p>{item.preparing_time} minutes</p>
        </div>
        <div className="flex gap-[.5rem]">
          <img src="../../public/flame.svg" alt="food calories" />
          <p>{item.calories} calories</p>
        </div>
      </div>

      <div>
        <Button title={"Want to Cook"} type={"primary-md"} />
      </div>
    </div>
  );
}
