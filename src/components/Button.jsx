import "../styles/button.scss";

function Button({ children, onClick, imgSrc, altText }) {
  return (
    <button onClick={onClick}>
      {imgSrc && <img src={imgSrc} alt={altText} />}
      {children}
    </button>
  );
}

export default Button;
