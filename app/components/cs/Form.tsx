//app /components /cs /Form.tsx

type FormProps = {
  selected: string;
  setSelected: (value: string) => void;
  files: any[];
  handleRemoveFile: (index: number) => void;
  totalSize: number;
  handleFileUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Form({
  selected,
  setSelected,
  files,
  handleRemoveFile,
  totalSize,
  handleFileUpload,
}: FormProps) {
  return (
    <div className="flex flex-wrap justify-between gap-y-[42px]">
      <div className="w-[calc(50%-16px)] max-sm:w-[calc(50%-10px)]">
        <label className="block h-[20px] leading-[20px] text-[14px]">
          분류
        </label>
        <select
          required
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className={`block h-[42px] leading-[42px] border-b border-b-[#707070] bg-[url(/images/selectarrow.svg)] tracking-tight bg-no-repeat bg-[right_10px] w-full text-ellipsis whitespace-nowrap pr-[20px] max-sm:text-[14px] ${
            selected === '' ? 'text-[#cecece]' : 'text-[#333]'
          }`}
        >
          <option value="" disabled>
            분류를 선택하세요.
          </option>
          <option value="0">홍보·제휴</option>
          <option value="1">도서구매·파본·서점거래</option>
          <option value="2">창작과비평ㆍ창비어린이 정기구독</option>
          <option value="3">
            [저작권] 2차저작권 허락(재수록, 낭독, 공연, 영상 등)
          </option>
          <option value="4">
            [책씨앗] 도서관 및 학교 행사 작가 섭외, 원화 전시
          </option>
          <option value="5">[문학] 저자 섭외, 원고 공모, 도서 문의</option>
          <option value="6">
            [인문, 교양] 저자 섭외, 원고 공모, 도서 문의
          </option>
          <option value="7">
            [어린이문학] 저자 섭외, 원고 공모, 도서 문의
          </option>
          <option value="8">
            [어린이교양] 저자 섭외, 원고 공모, 도서 문의
          </option>
          <option value="9">[그림책] 저자 섭외, 원고 공모, 도서 문의</option>
          <option value="10">[청소년] 저자 섭외, 원고 공모, 도서 문의</option>
          <option value="11">
            [창작과비평] 저자 섭외, 원고 공모, 도서 문의
          </option>
          <option value="12">
            [창비어린이] 저자 섭외, 원고 공모, 도서 문의
          </option>
          <option value="13">기타</option>
        </select>
      </div>
      <div className="w-[calc(50%-16px)] max-sm:w-[calc(50%-10px)]">
        <label className="block h-[20px] leading-[20px] text-[14px]">
          이름
        </label>
        <input
          type="text"
          placeholder="이름을 입력하세요."
          required
          className="block h-[42px] border-0 border-b border-b-[#707070] w-full p-0 tracking-tight max-sm:text-[14px]"
        />
      </div>
      <div className="w-[calc(50%-16px)] max-sm:w-[calc(50%-10px)]">
        <label className="block h-[20px] leading-[20px] text-[14px]">
          이메일
        </label>
        <input
          type="email"
          placeholder="example@mail.com"
          required
          className="block h-[42px] border-0 border-b border-b-[#707070] w-full tracking-tight max-sm:text-[14px]"
        />
      </div>
      <div className="w-[calc(50%-16px)] max-sm:w-[calc(50%-10px)]">
        <label className="block h-[20px] leading-[20px] text-[14px]">
          연락처
        </label>
        <input
          type="tel"
          placeholder="01012341234"
          required
          className="block h-[42px] border-0 border-b border-b-[#707070] w-full tracking-tight max-sm:text-[14px]"
        />
      </div>
      <div className="w-full">
        <label className="block h-[20px] leading-[20px] text-[14px]">
          제목
        </label>
        <input
          type="text"
          placeholder="제목을 입력하세요."
          required
          className="block h-[42px] border-0 border-b border-b-[#707070] w-full p-0 tracking-tight max-sm:text-[14px]"
        />
      </div>
      <div className="w-full">
        <label className="block h-[20px] leading-[20px] text-[14px]">
          내용
        </label>
        <textarea
          placeholder="문의하실 내용을 입력해주세요."
          required
          className="resize block min-h-[236px] border-0 border-b border-b-[#707070] max-w-full w-full mt-[5px] p-0 tracking-tight max-sm:text-[14px]"
        />
      </div>
      <ul className="w-full text-[14px] leading-[28px]">
        {files.map((file, index) => (
          <li
            key={index}
            className="flex w-full h-[40px] px-[16px] bg-point1 rounded-[10px] mb-[10px] relative items-center justify-between"
          >
            <span className="overflow-hidden whitespace-nowrap ">
              {file.name}
            </span>
            <div className="shrink-0">
              <span className="text-[#999] pr-[15px] pl-[10px]">
                {(file.size / 1024).toFixed(1)}KB
              </span>
              <button
                type="button"
                className="pr-[8px] h-[40px]"
                onClick={() => handleRemoveFile(index)}
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
      <label
        htmlFor="fUpload"
        className="h-[42px] block pr-[40px] text-[14px] font-medium cursor-pointer hover:underline"
      >
        + 파일 첨부하기 -{totalSize ? (totalSize / 1024).toFixed(1) : ' 0.0'}KB/
        15MB
      </label>
      <input
        id="fUpload"
        type="file"
        multiple
        className="absolute w-0 h-0 p-0 block"
        onChange={handleFileUpload}
      />
      <p className="w-full text-[14px] leading-[28px]">
        수집하는 개인정보 항목: 이메일 주소, 연락처, 이름
        <br />
        개인정보는 문의 접수, 고객 불편 사항 확인 및 처리 결과 회신에 이용되며
        전자상거래법 등 관련 법령에 따라 1년간 보관됩니다.
        <br />
        이용자는 본 동의를 거부할 수 있으나, 미동의 시 문의 접수가 불가능합니다.
      </p>
      <div className="text-[14px] leading-[28px]">
        <label className="checkbox  hover:underline">
          <input type="checkbox" required className="sr-only" />
          개인정보 수집동의
        </label>
      </div>
      <button
        type="submit"
        className="bg-[#2c3338] pr-[28px] pl-[30px] inline-block h-[42px] text-white rounded-[10px] self-end group hover:bg-[#4e5a62] max-sm:mx-auto"
      >
        메일 발송하기
        <img
          src="/images/whiterightarrow.svg"
          alt="발송하기"
          className="ml-[6px] transition-transform group-hover:translate-x-1.5 group-hover:duration-300 group-hover:cursor-pointer mt-[6px]"
        />
      </button>
    </div>
  );
}
