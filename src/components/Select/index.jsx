import React from "react";
import ReactSelect from "react-select";

function SelectComponent({ dropDownDataClass, onChange, secondOption }) {
  console.log({ dropDownDataClass });
  return (
    <div>
      <ReactSelect
        className="basic-single"
        classNamePrefix="select"
        defaultValue={secondOption}
        isSearchable={true}
        name="color"
        onChange={(e) => {
          onChange(e.id);
        }}
        options={dropDownDataClass.options}
      />
    </div>
  );
}

export default SelectComponent;
