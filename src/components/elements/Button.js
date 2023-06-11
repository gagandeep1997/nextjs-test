export function Button({ onClick, customClassName, content }) {
  return (
    <button className={customClassName} onClick={onClick}>
      {content}
    </button>
  );
}
