interface IButton {
  text: string;
  [key: string]: any;
}

function Button({text, ...restProps}: IButton) {
  return (
    <>
      <button
        type="button"
        className="font-GongGothicMedium border rounded-lg bg-slate-400 p-4 mt-12 text-white"
        {...restProps}>
        {text}
      </button>
    </>
  );
}

export default Button;
