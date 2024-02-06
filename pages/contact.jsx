import cx from "@/utils/cx";
import { useTheme } from "@/Context/Theme";
export default () => {
  const { theme } = useTheme();
  return (
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
      <div className="col-span-6 col-start-2 bg-black">
        <img
          className="w-[5rem] object-cover h-[6rem]"
          src={`/logo${theme[0]}.png`}
          alt="logo"
        />
        <h2>Contact</h2>
        <input type="text" placeholder="Email" />
      </div>
      <div className="col-span-4 col-start-9 bg-black">product</div>
    </div>
  );
};
