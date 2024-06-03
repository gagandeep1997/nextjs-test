export function Button({ onClick, customClassName, content, type }) {
  return (
    <button type={type} className={customClassName} onClick={onClick}>
      {content}
    </button>
  );
}
