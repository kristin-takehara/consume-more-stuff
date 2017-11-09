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
  }
}