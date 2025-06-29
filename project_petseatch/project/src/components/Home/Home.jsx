import RadioSex from "../Home/RadioSex.jsx";
import RadioType from "../Home/RadioType.jsx";
import ButtonLoad from "../Home/ButtonLoad.jsx";
import TextArea from "../Home/TextArea.jsx";
import './Home.css'
import ButtonClose from "./ButtonClose.jsx";
import AutocompleteBreed from "../Home/AutocompleteBreed.jsx";


const row = {
  width: '200px',
}

function Home() {
  
  return (
    <div className="lay">
      <div className="head" >
        Пропал питомец
      </div>
      <div className="bigContainer">
        <div className="container1">
          <div className="block1">
            <div style={row}>
              <span className="text-base leading-6 font-normal text-default-500">
                Вид
              </span>
            </div>
            <div>
              <RadioType />
            </div>
          </div>
          {/* <div className="floxy">
            
          </div> */}

          <div className="block2">
            <div style={row}>
              <span className="text-base leading-6 font-normal text-default-500">
                Пол
              </span>
            </div>
            <div>
              <RadioSex />
            </div>
          </div>

          <div className="block3">
            <div style={row}>
              <span className="text-base leading-6 font-normal text-default-500">
                Фотографии
              </span>
            </div>
            <div className="photoContainer">
                <div>
                  <ButtonLoad />
                </div>
              <div className="photoGroup"> 
                <div className="photoHolder">
                  <div className="buttonClose">
                    <ButtonClose />
                  </div>
                </div>
                <div className="photoHolder">
                  <div className="buttonClose">
                    <ButtonClose />
                  </div>
                </div>
                <div className="photoHolder">
                  <div className="buttonClose">
                    <ButtonClose />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="text-base leading-6 font-semibold" style={row}>
            Подробная информация
          </div>
          <div className="undercontainer2">
            <div className="text-base leading-6 font-normal text-default-500">
              Порода
            </div>
            <div>
              <AutocompleteBreed />
            </div>
            <div>
              <TextArea />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
