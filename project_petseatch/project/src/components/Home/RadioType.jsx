import {RadioGroup, Radio} from "@nextui-org/react";
import Dog from "../../assets/dog.svg";
import Cat from "../../assets/cat.svg";
import './RadioType.css'


// const row = {
//     width: '182px',
//     height: '182px',
//     padding: '16px 0px 16px 0px',
//     gap: '12px',
//     border-radius: '16px 0px 0px 0px',
//     opacity: '0px',
//   }



export default function RadioType() {
    return (
        <RadioGroup
            color="primary"
            defaultValue="dog"
            orientation="horizontal"
            >
            <div className="item1">
                <div>
                    <img src={Dog} />
                </div>
                <div className="item2">
                    <Radio value="dog" className="text-base leading-6 font-normal">
                        Собака
                    </Radio>
                </div>
            </div>
            <div className="item1">
                <div>
                    <img src={Cat}/>
                </div>
                <div className="item2">
                    <Radio value="cat" className="text-base leading-6 font-normal">
                        Кошка
                    </Radio>
                </div>
            </div>
        </RadioGroup>
    );
}
