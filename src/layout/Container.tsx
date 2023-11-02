import {ReactNode} from "react";

interface IContainer {
  children: ReactNode;
}

function Container({children}: IContainer) {
  return (
    <>
      <div className="flex  w-full h-screen items-center justify-center flex-col">
        {children}
      </div>
    </>
  );
}

export default Container;
