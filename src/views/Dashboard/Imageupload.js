import React, { Component , useState } from 'react';
import {storage} from "../../Config/firebase";
import {app} from "../../Config/firebase";

export default function UploadImage(props) {
  const onFileChange =async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log('Selected Image=>>>',e.target.files);
    props.getUrl(file);
   
      
  }

  return (
    <div>
    <input  type="file"name="doc" onChange={onFileChange} />
</div>
     
  );
}