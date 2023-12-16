import { StaffPreviewEdge } from "@/types/types";

export const Staffs = ({ staffs }: { staffs: StaffPreviewEdge[] }) => {
  return (
    <div className="w-full h-full relative">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
        {staffs?.map((staff) => (
          <div
            className="bg-[#ffffff10] rounded-md overflow-hidden  shadow-[#ffffff10]"
            key={staff?.id}
          >
            <div className="flex justify-center items-center">
              <div className="w-[80px] max-w-[80px] min-w-[80px] h-[80px] ">
                <img
                  src={staff?.node?.image?.large}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex  w-full  flex-col h-full min-h-full px-3  justify-between  gap-y-3">
                <p>{staff.node.name.userPreferred}</p>
                <p className="text-sm line-clamp-1">{staff.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
