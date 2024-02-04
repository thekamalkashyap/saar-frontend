import img from "@/public/img.png";
import Image from "next/image";
export default () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={img}
        className="h-[15rem] w-[12rem] object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold">Heading</h2>
      <h3>₹5499</h3>
    </div>
  );
};
