import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ModifyPost = (props) => {
  return (
    <>


<Container>
      <Row>
        <Col> <form>
        <h2>Modify Post</h2>
        <label className="col-sm-12 col-form-label">
          <b>Title</b>
          <input
            className="form-control form-control-sm"
            defaultValue={props.title}
            autoFocus={true}
            onChange={props.savePostTitleToState}
            placeholder="title"
            size="39"
          />
        </label>
        <br />

        {/* shortdescription */}
        <label className="col-sm-12 col-form-label">
          <b>Short Description</b>
          <input
            className="form-control form-control-sm"
         
            defaultValue={props.description}
            autoFocus={true}
        
            onChange={props.savePostDescriptionToState}
            placeholder="Short Description"
            size="39"
          />
        </label>
        <br />


               {/* photo */}
               <label className="col-sm-12 col-form-label">
          <b>Featured Image</b>
          <input
            className="form-control form-control-sm"
         
            defaultValue={props.photo}
            autoFocus={true}
            // type="file"
            onChange={props.savePostPhotoToState}
            placeholder="photo"
            size="39"
          />
        </label>
        <br />
        


        <label className="col-sm-12 col-form-label">
          <b>Description</b>
          <textarea
            className="form-control form-control-sm"
            defaultValue={props.content}
            onChange={props.savePostContentToState}
            placeholder="contents"
            rows="18"
            cols="41"
          />
        </label>
        <button
          title="update changes"
          className="btn btn-success ml-3"
          onClick={props.updatePost}
        >
          Update Post
        </button>
      </form></Col>
      </Row>
    </Container>


     
    </>
  );
};
export default ModifyPost;
