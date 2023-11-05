import {ReactNode} from "react";

interface IContainer {
  children: ReactNode;
}

function Container({children}: IContainer) {
  return (
    <>
      <div className="flex my-12  w-full h-fit items-center justify-center flex-col p-12 mobile:p-6">
        {children}
      </div>
    </>
  );
}

export default Container;
