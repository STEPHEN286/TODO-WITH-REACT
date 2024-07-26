import React, { forwardRef } from "react";

const Input =forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "p-2  bg-gray-200 border-b-2 border-gray-200   outline-none  focus:border-blue-900 ";

  return (
    <div className="flex flex-col space-y-2 mb-2">
      <label className="text-sm uppercase font-bold">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </div>
  );
});
export default Input;
