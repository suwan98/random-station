import {LegacyRef} from "react";

interface IButton {
  text: string;
  onClick?: () => void;
  buttonRef?: LegacyRef<HTMLButtonElement>;
}

function Button({text, buttonRef, ...restProps}: IButton) {
  return (
    <>
      <button
        type="button"
        className="font-GongGothicMedium border rounded-lg bg-slate-400 p-4 mt-4 text-white hover:bg-slate-700"
        ref={buttonRef}
        {...restProps}>
        {text}
      </button>
    </>
  );
}

export default Button;
