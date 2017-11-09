import React from 'react';

class ImageUpload extends React.Component {
  constructor(props){
    super(props);
    this.state = {file: '', imagePreviewUrl: ''};
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('Upload Files Here -->', this.state.file);
  }

  handleImageChange(event){
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
  }
}