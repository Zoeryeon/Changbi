//app /components /mailing-apply /Mail.tsx

export default function Mail() {
  return (
    <div className="mt-[42px] flex flex-col justify-between gap-y-[42px] max-w-[620px] ">
      <div>
        <label className="block h-[20px] leading-[20px] text-[14px]">
          이름
        </label>
        <input
          type="text"
          placeholder="이름을 입력하세요."
          required
          className="block h-[42px] leading-[42px] border-0 border-b border-b-[#707070] w-full p-0"
        />
      </div>
      <div>
        <label className="block h-[20px] leading-[20px] text-[14px]">
          이메일
        </label>
        <input
          type="email"
          placeholder="example@mail.com"
          required
          className="block h-[42px] leading-[42px] border-0 border-b border-b-[#707070] w-full p-0"
        />
      </div>
      <div>
        <p className="text-[14px] leading-[28px]">
          개인정보 수집·이용 목적 : 창비 주간논평 발송을 위해 수집 이용됩니다.
          <br />
          수집 항목 : 이메일
          <br />
          보유 기간 : 수신 거부 시까지
          <br />- 본 동의를 거부할 수 있으나. 미동의 시 접수가 불가능합니다.
          <br />- 수집된 개인정보는 위 목적 이외의 용도로는 이용되지 않으며,
          제3자에게 제공하지 않습니다.
        </p>
      </div>
      <div className="flex justify-start items-center gap-[7px] text-[14px] leading-[28px] font-medium">
        <label className="checkbox group hover:underline hover:cursor-pointer">
          <input type="checkbox" required className="sr-only" />
          만 14세 이상 개인정도 수집 동의
          <img
            src="/images/rightarrow.svg"
            alt="더보기"
            className="ml-[4px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300 group-hover:cursor-pointer"
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-[#2c3338] pr-[28px] pl-[30px] inline-block h-[42px] text-white rounded-[10px] self-end group hover:bg-[#4e5a62]"
      >
        메일링 신청하기
        <img
          src="/images/whiterightarrow.svg"
          alt="더보기"
          className="ml-[6px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300 group-hover:cursor-pointer mt-[6px]"
        />
      </button>
    </div>
  );
}
