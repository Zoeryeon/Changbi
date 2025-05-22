//app /components /library /LibraryTag.tsx

type TagProps = {
  buttonLabels: string[];
  tag: string;
  handleTag: (index: number) => void;
};

export default function LibraryTag({ buttonLabels, tag, handleTag }: TagProps) {
  return (
    <div className="mt-[60px] mr-[150px] max-md:mr-0 max-md:flex max-md:gap-[12px] max-md:w-full max-md:mt-[24px] max-md:absolute max-md:top-0 max-md:-left-[80px] max-md:pl-[80px] max-md:pr-[80px] max-sm:-left-[28px] max-sm:pl-[28px] max-sm:pr-[28px] max-sm:flex-wrap">
      {buttonLabels.map((label, index) => (
        <button
          key={index}
          type="button"
          className={`block h-[42px] w-[204px] pl-[25px] ml-[1px] leading-[42px] tracking-tight rounded-[10px] mb-[20px] text-left max-md:w-auto max-md:pl-[22px] max-md:pr-[22px] max-md:mb-0 max-md:shrink-0 max-sm:h-[34px] max-sm:text-[14px] max-sm:leading-[34px] max-sm:px-[18px] ${
            index + 1 === Number(tag)
              ? 'bg-[#2c3338] text-white'
              : 'bg-point1 hover:bg-[#e7e7e8]'
          }`}
          onClick={() => handleTag(index)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
