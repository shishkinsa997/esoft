import {RadioGroup, Radio} from "@nextui-org/react";


export default function RadioSex() {
    return (
        <RadioGroup
            color="primary"
            defaultValue="boy"
            >
            <Radio value="boy">Мальчик</Radio>
            <Radio value="girl">Девочка</Radio>
            <Radio value="unknown">Не знаю</Radio>
        </RadioGroup>
        
    );
}
