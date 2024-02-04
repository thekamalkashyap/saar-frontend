import Image from "next/image";
import searchSvg from "@/public/search.svg";
import cartSvg from "@/public/cart.svg";
import profileSvg from "@/public/profile.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "@/utils/cx";
export default () => {
  const router = useRouter();
  const { category } = router.query;
  const categoryArr = ["shree", "aastha", "isha", "mann"];
  const theme = categoryArr.includes(category) ? category : "shree";
  return (
    <>
      <h3
        className={cx("h-12 leading-10 text-center rounded-t-xl shree", theme)}
      >
        FREE SHIPPING ON ALL ORDERS
      </h3>
      <div
        className={cx(
          "flex items-start justify-between px-16 py-8 bg-cover border-b-2",
          "border-" + theme
        )}
      >
        <div className={"text-" + theme}>
          <Link href="/">
            <img
              className="w-[5rem] object-cover h-[6rem]"
              src={`/logo${theme[0]}.png`}
            />
          </Link>
          <nav className="mt-6">
            <ul className="flex gap-5 text-lg">
              {categoryArr.map((category) => (
                <li
                  className={cx(
                    "cursor-pointer capitalize",
                    theme == category && "font-bold"
                  )}
                  onClick={() => {
                    router.query.category = category;
                    router.push(router);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <ul className={cx("flex gap-5 text-lg", "text-" + theme)}>
              <li>New</li>
              <li>Kurtas</li>
              <li>Suits</li>
              <li>Saarees </li>
              <li> Dresses</li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-4">
          <div className={cx("flex p-2 border-b ", "border-" + theme)}>
            <Image src={searchSvg} />
            <input
              className={cx(
                "w-[15rem]  text-lg px-2 bg-transparent focus:outline-none",
                "placeholder:text-" + theme,
                "text-" + theme
              )}
              type="text"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-4 text-shree">
            <Image src={cartSvg} />
            <Image src={profileSvg} />
          </div>
        </div>
      </div>
    </>
  );
};
