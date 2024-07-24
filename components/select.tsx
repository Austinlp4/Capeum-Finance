'use client';

import { useMemo } from 'react';
import { SingleValue } from 'react-select';
import CreatableSelect from 'react-select/creatable';

type Props = {
    onChange: (value?: string) => void;
    onCreate?: (value: string) => void;
    options?: { label: string; value: string; }[];
    value?: string | null | undefined;
    disabled?: boolean;
    placeholder?: string;
};

export const Select = ({
    value,
    onChange,
    disabled,
    onCreate,
    options = [],
    placeholder,
}: Props) => {
    const onSelect = (
        option: SingleValue<{ label: string; value: string; }>
    ) => {
        onChange(option?.value);
    };

    const formattedValue = useMemo(() => {
        return options.find((option) => option.value === value);
    }, [options, value]);

    return (
        <CreatableSelect 
            placeholder={placeholder}
            className="text-sm h-10"
            styles={{
                control: (base) => ({
                    ...base,
                    boxShadow: "none",
                    borderColor: "#f0e2db",
                    ":hover": {
                        borderColor: "#f0e2db",
                    },
                }),
                option: (base, { 
                    isFocused,
                    isSelected
                }) => ({
                    ...base,
                    backgroundColor: isFocused ? 'rgba(217, 119, 6, .5)' : 'transparent',
                    color: isFocused ? 'white' : 'black',
                }),
            }}
            value={formattedValue}
            onChange={onSelect}
            options={options}
            onCreateOption={onCreate}
            isDisabled={disabled}
        />
    )
}