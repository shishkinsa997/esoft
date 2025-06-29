import {Button} from "@nextui-org/react";
import './RadioType.css'

export default function ButtonLoad() {
    return (
        <div className="flex flex-wrap gap-4 items-center">
            <Button color="primary" variant="flat" size="md" className="text-base leading-6 font-medium">
                Загрузить
            </Button>  
        </div>
        );
    }