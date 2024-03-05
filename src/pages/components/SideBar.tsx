type TSideBarProps = {
  open: boolean;
};

function SideBar({ open }: TSideBarProps) {
  return (
    <>
      {open && (
        <div className="min-w-[256px] h-full sticky left-0 top-[56px]">
          열린,,,사이드바
        </div>
      )}
      {!open && (
        <div className="min-w-[72px] h-full sticky left-0 top-[56px]">
          사이드바
        </div>
      )}
    </>
  );
}

export default SideBar;
