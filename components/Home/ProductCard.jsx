import img from "@/public/img.png";
import Image from "next/image";
import Link from "next/link";
export default ({ id }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link href={`/products/${id}`}>
        <Image
          src={img}
          className="h-[15rem] w-[12rem] object-cover rounded-md"
        />
        <div className="p-1">
          <h2 className="text-xl font-semibold">Heading</h2>
          <h3>₹5499</h3>
        </div>
      </Link>
    </div>
  );
};
