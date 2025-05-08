//app /components /home /Submenu.tsx
'use client';

export default function Submenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose?: () => void;
}) {
  return (
    <nav
      className={`hidden max-sm:block w-[260px] h-screen fixed -right-[260px] top-0 pt-[12px] px-[20px] border-l border-l-[#e6e6e6] bg-white z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-[260px]'
      }`}
    >
      <div></div>
    </nav>
  );
}
