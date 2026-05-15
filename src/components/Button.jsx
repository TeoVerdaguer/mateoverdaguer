const Button = ({ label, iconURL, action }) => {
  return (
    <button
      className="inline-flex items-center gap-2 px-8 py-4 bg-[#B8FF3C] text-[#09090A] font-display font-bold text-sm rounded-full hover:bg-[#F0EEE8] transition-all duration-300 hover:scale-105"
      onClick={action}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="" className="ml-1 w-5 h-5 rounded-full" />
      )}
    </button>
  );
};

export default Button;
