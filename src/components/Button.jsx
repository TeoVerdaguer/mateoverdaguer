const Button = ({ label, iconURL, action, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    // <button
    //   className={`flex justify-center items-center gap-2
    //   px-7 py-4 border font-montserrat text-lg leading-none
      
    //   ${
    //     backgroundColor
    //       ? `${backgroundColor} ${textColor} ${borderColor}`
    //       : "bg-coral-red text-white border-coral-red}"
    //   } rounded-lg ${fullWidth && 'w-full'}"}`}
    // >
      <button
        className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none
        bg-gradient-to-r from-[#ff5e69] via-[#ff8a56] to-[#ffa84b] text-white rounded-lg
        hover:shadow-lg hover:-translate-y-0.5"
        onClick={action}
      >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  )
}

export default Button;
