import React, { useState, useRef } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../styles.css";
import cn from "classnames";
import useDynamicHeightField from "./useDynamicHeightField";

const INITIAL_HEIGHT = 46;

const Post = ({ id, title, description,photo, content, editPost, deletePost }) => {

  const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);

  // const containerRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [commentValue, setCommentValue] = useState("");

  const outerHeight = useRef(INITIAL_HEIGHT);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useDynamicHeightField(textRef, commentValue);

  
  const onExpand = () => {
		if (!isExpanded) {
      outerHeight.current = containerRef.current.scrollHeight;
      setIsExpanded(true);
    }
	}


  const onChange = (e) => {
    setCommentValue(e.target.value);
	}

  const onClose = () => {
    setCommentValue("");
    setIsExpanded(false);
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('send the form data somewhere',commentValue )
    onClose();
    
  }


  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };


  return (
    <>


  
  


    
      <div className="card card-width bg-light">
        <section key={id}>
       
         
          {/* <hr className="new1"></hr> */}
          <img style= {{width:"70%", height:"20%"}} src = {photo} />
          <h3 style={{padding:"10px 0 0 0"}}>{title}</h3>
          <p style ={{color:"#0d0b0b"}}>{description}</p>

          <p style ={{color:"#0d0b0b"}} >{content}</p>


          <Row>
        <Col style ={{color:"#0d0b0b"}}><button className={ `like-button ${isClicked && 'liked'}` } onClick={ handleClick }>  <i class="fa fa-thumbs-up"></i>
      <span className="likes-counter">{ ` | ${likes}` }</span>
    </button></Col>
        <Col md="auto"></Col>
        <Col xs lg="2" style ={{color:"#0d0b0b"}}>
   {commentValue}
        </Col>

        <hr className="new1"></hr> 
      </Row>



      <div class="row">
    <div class="col">
  <form
    onSubmit={onSubmit}
    ref={containerRef}
    className={cn("comment-box", {
      expanded: isExpanded,
      collapsed: !isExpanded,
			modified: commentValue.length > 0,
    })}
    style={{
      minHeight: isExpanded ? outerHeight.current : INITIAL_HEIGHT
    }}
  >
    <div className="header">
      <div className="user">
        {/* <img
          src="avatar/path"
          alt="User avatar"
        /> */}
        <span style= {{color:"#000000"}}>User Name</span>
      </div>
    </div>
		<label htmlFor="comment" style= {{color:"#000000"}}>What are your thoughts?</label>
    <textarea
      ref={textRef}
      onClick={onExpand}
      onFocus={onExpand}
      onChange={onChange}
      className="comment-field"
      placeholder="What are your thoughts?"
      value={commentValue}
      name="comment"
      id="comment"
    />
<textarea />
<div className="actions">
  <button type="button" className="cancel" onClick={onClose}>
    Cancel
  </button>
  <button type="submit" disabled={commentValue.length < 1}>
    Respond
  </button>
</div>
	</form>
    </div>
    <div class="col">
      
    </div>

     <div class="col">
      
    </div>
  </div>
     

          <span title="edit post" onClick={() => editPost(id)}>

       
            <i className="edit-button fa fa-edit fa-2x button-css" />
          </span>
          <span title="delete post" onClick={() => deletePost(id)}>
            <i className="delete-button fa fa-trash fa-2x ml-2 button-css" />
          </span>
        </section>
      </div>
    </>
  );
};

export default Post;
