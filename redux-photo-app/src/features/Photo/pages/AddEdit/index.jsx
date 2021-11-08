import React from "react";
import Banner from "../../../../components/Banner";
import PhotoForm from "../../components/PhotoForm";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import { addPhoto } from "features/Photo/photoSlice";
import { useHistory } from "react-router";

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch()
  const photos = useSelector(state => state.photos)
  console.log(photos);
  const history = useHistory()

  const handleSubmit = values => {
    dispatch(addPhoto(values));
    history.push('/photos')
    
  }
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;
