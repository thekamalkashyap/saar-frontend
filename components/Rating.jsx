import cx from "@/utils/cx";
export default ({ rating }) => {
  return (
    <div>
      {[...Array(5).keys()].map((star) => {
        return (
          <span
            className={cx("text-2xl", star + 1 <= rating && "text-yellow-500")}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};
