import React from 'react';

interface SelectInputFieldProps {
    label: string;
    error?: string; // Making error optional as it might not always be present
    optionData: string;
    setOption: (value: string) => void;
}

const SelectInputField: React.FC<SelectInputFieldProps> = ({ label, error, optionData, setOption }) => {
    return (
        <div className="form-control w-full max-w-[265px]">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <select
                className={error ? `select select-bordered ` : `select select-bordered border-red-500 `}
                value={optionData}
                onChange={(e) => setOption(e.target.value)}
            >
                <option disabled selected>Pick one</option>
                <option>Star Wars</option>
                <option>Harry Potter</option>
                <option>Lord of the Rings</option>
                <option>Planet of the Apes</option>
                <option>Star Trek</option>
            </select>
            {error && <span className="text-red-500">{error}</span>}
        </div>
    );
};

export default SelectInputField;
