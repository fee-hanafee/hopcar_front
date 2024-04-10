import React from "react";
import carImage from "../../public/image/img22.png";


function CardCar({ children, obj }) {
 
  return (
    <div  className="border rounded-md p-4 shadow-md">
      <p>{obj?.type}</p>
      <div className="h-[160px] bg-cover flex justify-center items-center">
        <img  src={obj?.image || carImage} />
      </div>
      <div className="flex gap-2">
        <div>
          <div className="">
            <p>
              {obj.licenseHead} {obj.licenseBody}
            </p>
            <p className="">{obj.city}</p>
          </div>
          <div>
            <p>รุ่น : {obj?.model}</p>
            <p>สี : {obj?.color}</p>
            <p>สถานะ : {obj?.role}</p>
            <p>ปี : {obj?.year}</p>
          </div>
        </div>
        <div>
          <p>ประกัน : {obj?.insurance}</p>
          <p>รายละเอียด : {obj?.descrition}</p>
          <p>หมายเหต : {obj?.note}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default CardCar;
