//app /(main) /cs /page.tsx
'use client';

import Form from '@/app/components/cs/Form';
import { useState } from 'react';

export default function page() {
  const [selected, setSelected] = useState('');

  const [files, setFiles] = useState<File[]>([]);
  const [totalSize, setTotalSize] = useState(0);

  // 폼 제출 핸들러 추가
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 제출 동작 방지
    alert('메일 전송이 완료되었습니다.'); // 알림 표시

    // 폼 리셋 - 모든 입력 필드 초기화
    event.currentTarget.reset();
    setSelected('');
    setFiles([]);
    setTotalSize(0);
  };

  //파일 선택하여 ul로 나타내기
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files || []);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);

    // 파일 크기 합산
    const newTotalSize = uploadedFiles.reduce(
      (sum, file) => sum + file.size,
      totalSize
    );
    setTotalSize(newTotalSize);
  };

  // x버튼 누르면 파일 삭제
  const handleRemoveFile = (index: number) => {
    setFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      const newTotalSize = updatedFiles.reduce(
        (sum, file) => sum + file.size,
        0
      );
      setTotalSize(newTotalSize);
      return updatedFiles;
    });
  };

  return (
    <main className="h-auto mt-[20px] pt-[148px] pb-[150px] max-sm:pt-[90px] max-sm:pb-[90px]">
      <div className="max-w-[1770px] mx-auto px-[60px] max-sm:px-[28px]">
        <div className="flex flex-col items-baseline justify-between flex-wrap">
          <h2 className="text-[56px] font-bold tracking-tight leading-[88px] max-sm:text-[32px] max-sm:leading-[46px] max-sm:break-keep">
            문의
          </h2>
        </div>
        <div className="max-w-[948px] w-full">
          <div className="mt-[60px]">
            <form onSubmit={handleSubmit}>
              <Form
                selected={selected}
                setSelected={setSelected}
                files={files}
                handleRemoveFile={handleRemoveFile}
                totalSize={totalSize}
                handleFileUpload={handleFileUpload}
              />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
