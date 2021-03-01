import React from 'react'
import Avatar from 'react-avatar-edit'

class ImageCropper extends React.Component {

  constructor(props) {
    super(props)
    const src = '../../images/willy.jpg'
    this.state = {
      preview: null,
      defaultPreview: null,
      src
    }
    this.onCrop = this.onCrop.bind(this)
   
    this.onClose = this.onClose.bind(this)
    
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }

  onClose() {
    console.log("SASDASA", this.state.src)
    this.setState({ preview: null })
  }

  onCrop(preview) {
    this.setState({ preview })
  }

  onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    };
  }

  render() {
    return (
      <div>
        <div>
          <Avatar
            width={390}
            height={295}
            cropRadius={50}
            onCrop={this.onCrop}
            onClose={this.onClose}
            onBeforeFileLoad={this.onBeforeFileLoad}
            src={this.state.src}
          />
        </div>
        <div>
          <img alt="" style={{ width: '150px', height: '150px' }} src={this.state.preview} alt="Preview" />
        </div>
      </div>
    )
  }
}
export default ImageCropper;
