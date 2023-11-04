import {ReactNode} from "react";

interface IContainer {
  children: ReactNode;
}

function Container({children}: IContainer) {
  return (
    <>
      <div className="flex my-12  w-full h-fit items-center justify-center flex-col">
        {children}
      </div>
    </>
  );
}

export default Container;
