import { useLocation } from "react-router-dom";

type TSideBarProps = {
  open: boolean;
};

function SideBar({ open }: TSideBarProps) {
  const { pathname } = useLocation();

  type TMenuItemProps = {
    pathname: string;
    label: string;
  };
  const MenuItem = ({ pathname, label }: TMenuItemProps) => {
    return (
      <div className="py-[12px] flex items-center gap-[24px]">
        <div className="w-[24px] h-[24px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="block w-full h-full"
          >
            <g>
              <path fill="#FFF" d={pathname}></path>
            </g>
          </svg>
        </div>
        <span className="text-[14px]">{label}</span>
      </div>
    );
  };

  return (
    <>
      {open && (
        <div className="min-w-[256px] h-full sticky left-0 top-[56px]">
          <div className="flex flex-col justify-center p-[12px] divide-y divide-white">
            <div className="flex flex-col justify-center">
              <MenuItem
                pathname={
                  pathname === "/"
                    ? "M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"
                    : "m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"
                }
                label="홈"
              />
              <MenuItem pathname={""} label="Shorts"/>
              <MenuItem pathname={""} label="구독"/>
            </div>
            <div className="flex flex-col justify-center">
          
              <MenuItem pathname={""} label="시청 기록"/>
              <MenuItem pathname={""} label="나중에 볼 동영상"/>
              <MenuItem pathname={""} label="좋아요 표시한 동영상"/>
            </div>
          </div>
        </div>
      )}
      {!open && (
        <div className="min-w-[72px] h-full sticky left-0 top-[56px] flex flex-col items-center">
          <a
            href="/"
            className="flex flex-col px-[16px] py-[14px] rounded-lg items-center gap-2"
          >
            <div className="w-[24px] h-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block w-full h-full"
              >
                <g>
                  <path
                    fill="#FFF"
                    d={
                      pathname === "/"
                        ? "M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"
                        : "m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"
                    }
                  ></path>
                </g>
              </svg>
            </div>
            <span className="text-[10px]">홈</span>
          </a>
          <a className="flex flex-col px-[16px] py-[14px] rounded-lg items-center gap-2">
            <div className="w-[24px] h-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block w-full h-full"
              >
                <g>
                  <path
                    fill="#FFF"
                    // d="m17.77 10.32-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"
                    d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                  ></path>
                </g>
              </svg>
            </div>
            <span className="text-[10px]">Shorts</span>
          </a>
          <a className="flex flex-col px-[16px] py-[14px] rounded-lg items-center gap-2">
            <div className="w-[24px] h-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block w-full h-full"
              >
                <g>
                  <path
                    fill="#FFF"
                    d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"
                  ></path>
                </g>
              </svg>
            </div>
            <span className="text-[10px]">구독</span>
          </a>
          <a className="flex flex-col px-[16px] py-[14px] rounded-lg items-center gap-2">
            <div className="w-[24px] h-[24px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="block w-full h-full"
              >
                <g>
                  <path
                    fill="#FFF"
                    // d="M4 20h14v1H3V6h1v14zM21 3v15H6V3h15zm-4 7.5L11 7v7l6-3.5z"
                    d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"
                  ></path>
                </g>
              </svg>
            </div>
            <span className="text-[10px]">나</span>
          </a>
        </div>
      )}
    </>
  );
}

export default SideBar;
