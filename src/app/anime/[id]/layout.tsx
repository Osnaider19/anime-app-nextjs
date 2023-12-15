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
        <div className="w-[85%] mx-auto  relative pt-3">
          <div className="w-full h-full relative">{children}</div>
        </div>
      </section>
    </>
  );
}
