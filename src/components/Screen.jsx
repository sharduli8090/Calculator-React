import Buttons from "./Buttons";

const Screen = () => {
    
  return (
    <div className="h-screen flex justify-center items-center bg-gray-900">
      <div className="w-1/5 h-4/5 rounded-lg bg-gray-200 flex items-end ">
        <Buttons/>
      </div>
    </div>
  );
};
export default Screen;
