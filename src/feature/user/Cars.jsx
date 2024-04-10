import React, { useEffect } from "react";
import useMange from "../context/manageProvider";
import CardCar from "../../component/CardCar";
import Button from "@mui/material/Button";

import { nanoid } from "nanoid";
import useRender from "../context/renderProvider";

function Cars() {
  const { fetchCars, cars, manage, editCar, deleteCar } = useMange();
  const { handleIsAbout } = useRender();

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="h-[100vh] overflow-auto">
      <div className="flex flex-wrap gap-4 justify-evenly">
        {cars?.map((el) => (
          <div key={nanoid()} className="w-[340px] text-sm p-2">
            <CardCar obj={el}>
              {manage && (
                <div className="flex gap-4 py-1 bg-gray-100 rounded-md justify-center border">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      editCar(el);
                      handleIsAbout({ create: true });
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => deleteCar(el.id)}
                  >
                    Delete
                  </Button>
                </div>
              )}
            </CardCar>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
