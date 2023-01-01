import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CreateNewPost = (props) => {
  return (
    <>





<Container>
      <Row>
        <Col> <form onSubmit={props.savePost}>
        <h2>Create New Post</h2>
        <label className="col-sm-12 col-form-label">
          <b>Title</b>
          <input
            className="form-control form-control-sm"
            autoFocus={true}
            type="text"
            placeholder="post title"
            onChange={props.savePostTitleToState}
            required
            ref={props.getTitle}
          />
        </label>
        <br />


            {/* description  */}

            <label className="col-sm-12 col-form-label">
          <b>Short Description </b>
          <input
            className="form-control form-control-sm"
            autoFocus={true}
            type="text"
            placeholder="Short Description"
            onChange={props.savePostDescriptionToState}
            required
            ref={props.getDescription}
          />
        </label>
        <br />



        <label className="col-sm-12 col-form-label">
          <b>Featured Image </b>
          <input
            className="form-control form-control-sm"
            autoFocus={true}
            type="file"
            placeholder="Short Description"
            onChange={props.savePostPhotoToState}
            required
            ref={props.getPhoto}
          />
        </label>
        <br />

    


        
        <label className="col-sm-12 col-form-label">
          <b>Description </b>
          <textarea
            className="form-control form-control-sm"
            placeholder="Description"
            onChange={props.savePostContentToState}
            rows="18"
            cols="41"
            required
            ref={props.getContent}
          />
        </label>
        <br />
        <button title="save post" className="btn btn-success ml-3">
          save..
        </button>
      </form></Col>
      </Row>
    </Container>



     
    </>
  );
};

export default CreateNewPost;
