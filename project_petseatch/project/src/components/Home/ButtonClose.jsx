import {Button} from "@nextui-org/react";
import Closesquare from "../../assets/closesquare.svg";
import './RadioType.css'

const but = {
    width: '24px',
    height: '24px'
}

export default function ButtonClose() {
    return (
        <div style={but}>
        <div className="flex gap-4 items-center size-2" size="sm" style={but}>
            <Button isIconOnly color="default-500" aria-label="Close" size="sm" className="vuesax bold close-square size-2">
                <img src={Closesquare} />
            </Button>    
        </div>
        </div>
    );
}