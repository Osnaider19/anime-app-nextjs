"use client";

type Props = {
  children: React.ReactNode;
  back: () => void;
};
export const ModalPage = ({ children, back }: Props) => {
  return (
    <div
      className="w-full h-full fixed top-0 left-0 flex justify-center items-center bg-black/40 backdrop-blur-sm"
      onClick={back}
    >
      {children}
    </div>
  );
};
