interface InputProps {
    type: string;
    placeholder: string;
    onChange: (value: string) => void;
}

function Input({ type = "text", placeholder, onChange }: InputProps) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
    );
}

export default Input;
