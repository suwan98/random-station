interface IButton {
  text: string;
  onClick: () => void;
}

function Button({text, ...restProps}: IButton) {
  return (
    <>
      <button
        type="button"
        className="font-GongGothicMedium border rounded-lg bg-slate-400 p-4 mt-4 text-white hover:bg-slate-700"
        {...restProps}>
        {text}
      </button>
    </>
  );
}

export default Button;
