import React from 'react';

const GenderDropdown = ({ selectedGender, setSelectedGender }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
        Gender
      </label>
      <select
        id="gender"
        value={selectedGender}
        onChange={(e) => setSelectedGender(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="" disabled>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  );
};

export default GenderDropdown;
