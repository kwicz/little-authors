import React, { Component } from 'react';
import axios from 'axios';

export default class AddPage extends Component {

  constructor(props) {
    super(props);

    this.onChangePageText = this.onChangePageText.bind(this);
    this.onChangePageImage = this.onChangePageImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        page_text: '',
        page_image: ''
    }
  }

  onChangePageText(e) {
    this.setState({
        page_text: e.target.value
    });
}

onChangePageImage(e) {
    this.setState({
        page_image: e.target.value
    });
}


onSubmit(e) {
  e.preventDefault();
  
  console.log(`Form submitted:`);
  console.log(`Page Text: ${this.state.page_text}`);
  console.log(`Page Image: ${this.state.page_image}`);

  const newPage = {
      page_text: this.state.page_text,
      page_image: this.state.page_image,
  };

  // axios.post('http://localhost:4000/books/add', newPage)
  //   .then(res => console.log(res.data));
  
  this.setState({
      page_text: '',
      page_image: ''
  })
}

  render() {
    return (
      <div>
        <h1>Add Page</h1>
        <form onSubmit={this.onSubmit}>
          <div class="row">
            <div class="col-md">
                    <div className="form-group"> 
                        <label>Upload Image</label>
                        <input  type="file"
                                className="form-control"
                                value={this.state.page_image}
                                onChange={this.onChangePageImage}
                                />
                    </div>
            </div>
            <div class="col-md">        
                    <div className="form-group">
                        <label>Write Your Story</label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.page_text}
                                onChange={this.onChangePageText}
                                />
                    </div>
            </div>
          </div>
          <div className="form-group">
              <input type="submit" value="Add Page" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }

}