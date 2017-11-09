import React from 'react';


class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {file: '', imagePreviewUrl: ''};
  } 

   handleSubmit(event) {
    event.preventDefault();
    console.log('handle uploading--->', this.state.file);
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
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <input className="file-input" 
            type="file" 
            accept="image/x-png,image/gif,image/jpeg"
            onChange={(event)=>this.handleImageChange(event)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(event)=>this.handleSubmit(event)}>Upload Image</button>
        </form>

        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;
  
