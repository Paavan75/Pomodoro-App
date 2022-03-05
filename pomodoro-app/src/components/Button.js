const Button = ({title , activeClass , callback}) => {
    return (
        <button className={activeClass} onClick={callback}>{title}</button>
    );
}

export default Button;