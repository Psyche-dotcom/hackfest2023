import React from "react";

const InputFeid = ({ title, type, id, setstate }) => {
  return (
    <fieldset class="row-input">
      <legend className="text-blackt font-bold">{title}</legend>
      <input
        name={id}
        type={type}
        id={id}
        className="inputf"
        onChange={(e) => setstate(e.target.value)}
      />
    </fieldset>
  );
};

export default InputFeid;
