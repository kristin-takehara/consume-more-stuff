import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/items.actions.js';
import { addFile } from '../../actions/items.actions.js';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '', imagePreviewUrl: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  } 

   handleSubmit(event) {
    event.preventDefault();

    console.log('handle upload--->', this.state.file);

    // let formData = new FormData();
   
    // console.log(formData);
    // formData.append('file', this.state.file);

  }


   handleImageChange(event) {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;

    if (imagePreviewUrl) {
       $imagePreview = (<img src={imagePreviewUrl} />);
    } 
    else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (

      <div className="upload-form">
        <form onSubmit={ this.handleSubmit }>
          <input className="file-input" 
            type="file" 
            accept="image/x-png,image/gif,image/jpeg"
            encType="multipart/form-data"
            action="addFile"
            method="POST"
            onChange={(event)=>this.handleImageChange(event)} />
          <button
            className="submitButton" 
            type="submit"
          >
          Upload Image</button>
        </form>

        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    file: state.file
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFile: (file) => {
      dispatch(addFile(file))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUpload);





