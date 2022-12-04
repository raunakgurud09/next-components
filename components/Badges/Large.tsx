export default function LargeBadge({ num = 999 }) {
  return (
    <>
      <div className=" text-xs px-2   bg-red-800 float-right rounded-full  dark:bg-pink-400">
        {num}+
      </div>
    </>
  );
}
