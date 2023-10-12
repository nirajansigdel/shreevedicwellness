"use client";
import React, { forwardRef, useState } from "react";

const Input = forwardRef(
  (
    {
      id,
      className,
      placeholder,
      type,
      rows,
      onChange,
      error,
      hint,
      showEye,
      ...otherProps
    },
    ref
  ) => {
    return (
      <>
        {type === "textarea" ? (
          <div className="flex flex-col gap-1 w-full">
            <textarea
              ref={ref}
              onChange={onChange}
              className={`border w-full px-2 rounded-md text-s focus:outline-none focus:border-blue-500 ${className}`}
              placeholder={placeholder}
              rows={rows ? rows : "10"}
              {...otherProps}
            ></textarea>
            {!error && hint && (
              <p className="text-sm px-1 text-gray-400">{hint}</p>
            )}
            <p className="text-sm px-1 text-red-400">{error}</p>
          </div>
        ) : (
          <div className="flex flex-col gap-1 w-full">
            <div className="relative flex items-center">
              <input
                ref={ref}
                onChange={onChange}
                className={`border w-full h-10 px-2 rounded-md text-s focus:outline-none focus:border-blue-500 ${className}`}
                type={type}
                placeholder={placeholder}
                {...otherProps}
              />
            </div>

            {!error && hint && (
              <p className="text-sm px-1 text-gray-400">{hint}</p>
            )}
            {error && <p className="text-sm px-1 text-red-400">{error}</p>}
          </div>
        )}
      </>
    );
  }
);

export default Input;
