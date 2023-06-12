export function Button({ onClick, customClassName, content, type }) {   //Global button which accepts value as props and changes based on the value of props
  return (
    <button type={type} className={customClassName} onClick={onClick}>
      {content}
    </button>
  );
}
