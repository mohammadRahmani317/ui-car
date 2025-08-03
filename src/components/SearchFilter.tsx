'use client';

import { useState, useEffect, useRef } from 'react';

interface SearchFilterProps {
    options: string[];
    selected: string;
    onChange: (value: string) => void;
}

export default function SearchFilter({ options, selected, onChange }: SearchFilterProps) {
    const [query, setQuery] = useState('');
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredOptions = options.filter(opt =>
        opt.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function handleSelect(option: string) {
        onChange(option);
        setQuery('');
        setOpen(false);
    }

    return (
        <div className="relative w-48 mx-auto" ref={containerRef}>
            <input
                type="text"
                placeholder="جستجوی برند..."
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                value={query || (selected === 'all' ? '' : selected)}
                onChange={(e) => {
                    setQuery(e.target.value);
                    setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                readOnly={false}
            />

            {open && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto shadow-lg">
                    <li
                        key="all"
                        onClick={() => handleSelect('all')}
                        className={`cursor-pointer px-3 py-2 hover:bg-red-100 ${
                            selected === 'all' ? 'bg-red-200 font-bold' : ''
                        }`}
                    >
                        همه
                    </li>
                    {filteredOptions.map((opt) => (
                        <li
                            key={opt}
                            onClick={() => handleSelect(opt)}
                            className={`cursor-pointer px-3 py-2 hover:bg-red-100 ${
                                selected === opt ? 'bg-red-200 font-bold' : ''
                            }`}
                        >
                            {opt === 'kia' ? 'کیا' : opt === 'hyundai' ? 'هیوندای' : opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
