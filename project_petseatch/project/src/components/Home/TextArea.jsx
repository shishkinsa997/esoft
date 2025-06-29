import {Textarea} from "@nextui-org/react";

export default function TextArea() {
    const variants = ["flat"];

    return (
        <div className="w-full grid grid-cols-12 gap-4">
        {variants.map((variant) => (
            <Textarea
            key={variant}
            variant={variant}
            label="Описание"
            labelPlacement="outside"
            placeholder="y"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />
        ))}
        </div>
    );
}
