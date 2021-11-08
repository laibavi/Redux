import PropTypes from "prop-types";
import React from "react";
import Select from "react-select";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import { Formik, Form, FastField } from "formik";
import InputField from "components/custom-fields/InputField";
import SelectField from "components/custom-fields/SelectField";
import RandomPhotoField from "components/custom-fields/RandomPhotoField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  // npm i --save react-select
  const initialValues = {
    title: "",
    name: "",
    categoryId: null,
  };


  return (
    <Formik initialValues={initialValues} onSubmit={props.onSubmit} >
      {(formikProps) => {
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ... "
            />

            <FastField
              name="name"
              component={InputField}
              label="name"
              placeholder="Eg: Wow nature ... "
            />

            <FastField
              id="categoryId"
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
