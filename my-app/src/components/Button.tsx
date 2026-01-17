interface ButtonProps {
    text: string;
    type?: "submit";
    onClick: () => void;
}

function Button({ text, type = "submit", onClick }: ButtonProps) {
    return (
        <button type={type} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
