import { CHIPS } from "../home/constant";

function Chips() {
  return (
    <div className="w-full flex flex-row gap-3 mt-[15px] mb-[30px] flex-wrap">
      {CHIPS.map((chip) => (
        <div
          key={chip}
          className="text-[#FFFFFF] rounded-[6px] cursor-pointer min-w-[12px] bg-[#FFFFFF1A] flex justify-center align-middle px-[12px] py-[4px]"
        >
          <p className="text-[14px] font-bold whitespace-nowrap">{chip}</p>
        </div>
      ))}
    </div>
  );
}

export default Chips;
