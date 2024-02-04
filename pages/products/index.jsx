import Navbar from "@/components/Navbar";
import { ProductCard as Card } from "@/components/Home";

export default () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 gap-6 p-10 sm:p-16 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {[...Array(10).keys()].map((e, i) => (
          <Card key={e} id={i} />
        ))}
      </div>
    </>
  );
};
