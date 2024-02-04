import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import cx from "@/utils/cx";
export default () => {
  const router = useRouter();
  const id = router.query.id;
  const { category } = router.query;
  const categoryArr = ["shree", "aastha", "isha", "mann"];
  const theme = categoryArr.includes(category) ? category : "shree";

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
        <div className="grid col-span-10 col-start-2">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};
