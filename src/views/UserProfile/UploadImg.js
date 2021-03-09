import React, { Component , useState } from 'react';
import {app} from "../../Config/firebase";

export default function UploadDoc(props) {

  const onFileChange =async (e) => {


    const file = e.target.files[0];
    props.getUrl(file);
   
  }

  return (
    <div>
        <input  type="file"name="doc" onChange={onFileChange} />
    </div>
  );
}