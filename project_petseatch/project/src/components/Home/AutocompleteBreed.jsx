import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {animals} from "./data";


const row = {
    width: '200px',
}


export default function AutocompleteBreed() {
    
    const placements = [
        "outside-left",
    ];

    return (
        <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
            <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
            {placements.map((placement) => (
                <Autocomplete
                labelPlacement={placement}
                label="Порода"
                placeholder="Выберете породу"
                description="Если не знаете породу, оставьте поле пустым"
                className="max-w-xs"
                >
                {animals.map((animal) => (
                    <AutocompleteItem key={animal.value} value={animal.value}>
                    {animal.label}
                    </AutocompleteItem>
                ))}
                </Autocomplete>
            ))}
            </div>
        </div>  
        </div>  
    );
}
