import React, { useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import validateInput from "../validator/validate-create";
import * as manageApi from "../../api/manage";
import useMange from "../context/manageProvider";
import Spinner from "../../component/Spinner";

const inittial = {
  image: "",
  licenseHead: "",
  licenseBody: "",
  city: "",
  model: "",
  color: "",
  note: "",
  insurance: "",
  descrition: "",
  year: 2000,
  type: "SEDAN",
  role:""
};

function Create() {
  const { fetchCars, newObj, cancelEdit, isEdit } = useMange();
  const [error, setError] = useState({});
  const [input, setInput] = useState({ ...newObj } || inittial);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fileInputEl = useRef(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      const valid = {
        licenseHead: input.licenseHead,
        licenseBody: input.licenseBody,
        city: input.city,
        model: input.model,
        year: input?.year,
      };
      const validateError = validateInput(valid);
      if (validateError) return setError(validateError);

      formData.append("licenseHead", input.licenseHead);
      formData.append("licenseBody", input.licenseBody);
      formData.append("model", input.model);
      formData.append("city", input.city);
      formData.append("color", input?.color);
      formData.append("note", input?.note);
      formData.append("insurance", input?.insurance);
      formData.append("descrition", input?.descrition);
      formData.append("year", input?.year);
      formData.append("type", input?.type);
      formData.append("role",input?.role)
      if (image) {
        formData.append("image", image);
      }

      if (!isEdit) {
        await manageApi.createCar(formData);
      } else {
        formData.append("id", newObj.id);
        await manageApi.editCar(formData);
      }

      setInput(inittial);
      setImage(null);
      await fetchCars();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" h-full flex justify-center items-center">
      {loading && <Spinner />}

      <div className="border p-6 w-[400px] ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <select name="type" value={input.type} onChange={handleChange}>
            <option value="0" disabled>
              ประเภทรถ
            </option>
            <option value="SEDAN">Sedan</option>
            <option value="MPV">Mpv</option>
            <option value="SUV">Suv</option>
            <option value="VAN">Van</option>
            <option value="PICKUP">Pickup</option>
          </select>

          <input
            type="file"
            className="hidden"
            ref={fileInputEl}
            onChange={(e) => {
              if (e.target.files[0]) setImage(e.target.files[0]);
            }}
          />
          <Button
            onClick={(e) => fileInputEl.current.click()}
            className="w-20"
            variant="outlined"
          >
            Upload
          </Button>
          <div className="flex gap-2">
            <div>
              {error?.licenseHead && (
                <small className="text-red-500 absolute translate-x-1 -translate-y-4">
                  {error?.licenseHead}
                </small>
              )}
              <TextField
                className="w-20 h-4"
                label="xx *"
                name="licenseHead"
                value={input.licenseHead}
                onChange={handleChange}
              />
            </div>
            <div>
              {error?.licenseBody && (
                <small className="text-red-500 absolute translate-x-1 -translate-y-4">
                  {error?.licenseBody}
                </small>
              )}
              <TextField
                className="w-32"
                label="xx *"
                name="licenseBody"
                value={input.licenseBody}
                onChange={handleChange}
              />
            </div>
            <div>
              {error?.city && (
                <small className="text-red-500 absolute translate-x-1 translate-y-14">
                  {error?.city}
                </small>
              )}
              <TextField
                label="เมือง *"
                name="city"
                value={input.city}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            {error?.model && (
              <small className="text-red-500 absolute translate-x-1 -translate-y-4">
                {error?.model}
              </small>
            )}
            <TextField
              label="รุ่นรถ *"
              name="model"
              value={input.model}
              onChange={handleChange}
            />
          </div>
          <TextField
            label="สี"
            name="color"
            value={input.color}
            onChange={handleChange}
          />
          <TextField
            label="ประกันภัย"
            name="insurance"
            value={input.insurance}
            onChange={handleChange}
          />
          <TextField
            label="รายละเอียด"
            name="descrition"
            value={input.descrition}
            onChange={handleChange}
          />
          <TextField
            label="หมายเหต"
            name="note"
            value={input.note}
            onChange={handleChange}
          />

          <TextField
            type="number"
            min="1900"
            max="2099"
            name="year"
            label="ปีรถ"
            onChange={handleChange}
            value={input.year}
          />
          {isEdit && (
            <select name="role" value={input.role} onChange={handleChange}>
              <option value="Ready">Ready</option>
              <option value="Maintenace">Maintenace</option>
              <option value="Defect">Defect</option>
              <option value="Busy">Busy</option>
            </select>
          )}
          <p>* จำเป็นต้องกรอก</p>

          <div className="flex justify-center gap-8">
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Button
              variant="outlined"
              type="button"
              color="error"
              onClick={cancelEdit}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
