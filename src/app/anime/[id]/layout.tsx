import "../styles.css";
import { LayoutC } from "./LayoutC";
type Params = {
  params: {
    id: number;
  };
  children: React.ReactNode;
};

export default function Layout({ children, params }: Params) {
  return (
    <>
      <section className="relative w-full h-full">
        <LayoutC id={params.id} />
        <div className=" px-3 lg:px-0 w-full mx-auto lg:w-[85%]  relative pt-3">
          <div className="w-full h-full relative">{children}</div>
        </div>
      </section>
    </>
  );
}
