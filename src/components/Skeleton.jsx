const CardSkeleton = () => {
  return (
    <div className="mb-4 animate-pulse w-[100%] xl:w-[450px] rounded-md p-2 bg-gradient-to-br from-blue-900 to-[#121286] w-full flex flex-row items-start gap-4">
      <div className="rounded-md bg-slate-800 h-[60px] w-[90px]"></div>
      <div className="flex flex-col gap-2 w-full">
        <div className="bg-slate-800 w-[50%] h-[24px] rounded-md"></div>
        <div className="bg-slate-800 w-full h-[18px] rounded-md"></div>
      </div>
    </div>
  );
};
const RoundedSkeleton = () => {
  return (
    <div className="animate-pulse h-[120px] w-[120px] rounded-full  bg-gradient-to-br from-blue-900 to-[#121286] "></div>
  );
};

const Skeleton = ({ rounded }) => {
  if (rounded) {
    return (
      <div className="flex items-center gap-4">
        <RoundedSkeleton />
        <RoundedSkeleton />
        <RoundedSkeleton />
        <RoundedSkeleton />
      </div>
    );
  }
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
};

export default Skeleton;
