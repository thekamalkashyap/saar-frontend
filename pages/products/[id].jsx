import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import cx from "@/utils/cx";
import Image from "next/image";
import Rating from "@/components/Rating";
import { useTheme } from "@/Context/Theme";
export default () => {
  const router = useRouter();
  const { category } = router.query;
  const id = router.query?.id;
  const { theme } = useTheme();
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12">
        <button
          className="flex justify-center my-16"
          onClick={() => router.back()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cx("w-6 h-6", "stroke-" + theme)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <div className="grid grid-cols-5 col-span-10 col-start-2">
          <div className="flex flex-wrap col-span-3 px-8 py-12">
            <img
              className="w-1/2 h-[450px] object-cover object-top rounded-md"
              src="/img.png"
            />
            <img
              className="w-1/2 h-[450px] object-cover object-top rounded-md"
              src="/img.png"
            />
            <img
              className="w-1/2 h-[450px] object-cover object-top rounded-md"
              src="/img.png"
            />
            <img
              className="w-1/2 h-[450px] object-cover object-top rounded-md"
              src="/img.png"
            />
          </div>
          <div className="flex flex-col col-span-2 col-start-4 gap-4 px-8 py-12">
            <h4 className="text-xl ">
              <span>{category}</span>
              <span> / </span>
              <span className="font-bold">{id}</span>
            </h4>
            <h1 className="text-5xl font-bold tracking-wider text-shree">
              The Winter Collection
            </h1>
            <div className="flex items-center gap-2">
              <span>
                <Rating rating={4} />
              </span>
              <span>(100 Reviews)</span>
            </div>
            <div className="flex items-center gap-3 text-xl">
              <span className="line-through">₹3647</span>
              <span className="font-bold ">₹2583</span>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ut duis vel praesent
              tristique dolor tellus cras rutrum. Arcu ut suspendisse lectus sit
              ut. Lectus pellentesque velit pretium pulvinar lacus nullam
              mauris. Quisque sagittis fringilla nec dignissim libero molestie
              mauris egestas tincidunt. Pharetra cursus eleifend lectus nascetur
              nisl. Enim massa lectus commodo placerat leo ac at sed. Consequat
              ornare eget sed elementum.
            </p>
            <div className="flex flex-col gap-4">
              <button className="w-full py-2 text-white transition-colors border-2 rounded-md hover:text-shree hover:bg-white bg-shree border-shree">
                Buy Now
              </button>
              <button className="w-full py-2 transition-colors border-2 rounded-md hover:text-white hover:bg-shree text-shree border-shree">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
