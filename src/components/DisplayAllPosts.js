import React, { useState, useRef } from "react";
import CreateNewPost from "./CreateNewPost";
import ModifyPost from "./ModifyPost";
import Post from "./Post";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//  import pic from './1.jpg';

 

const DisplayAllPosts = () => {
  // managing states below
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [content, setContent] = useState("");

  const [allPosts, setAllPosts] = useState([
    {
      id: 1,
      title: "Post Title - React",
      photo :  "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg",
      description: "Short Dsescription - Front End Tech",
      content:
        "React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. React was created by Jordan Walke, a software engineer at Facebook. "
    },
    {
      id: 2,
      title: "Post Title - Java",
      photo : "https://cdn.pixabay.com/photo/2015/05/31/15/14/woman-792162_960_720.jpg",
      description : "Short Description - Back End Tech",
      content:
        "Django is a free and open source, full-stack web application framework, written in Python. Django Python is a framework for perfectionists with deadlines. With it, you can build better Web apps in much less time, and in less code."
    }
  ]);
  // const [allPosts, setAllPosts] = useState([]) // can also be used
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  // Initialize useRef (to empty title and content once saved)
  const getTitle = useRef();
  const getContent = useRef();
  const getDescription = useRef();
  const getPhoto = useRef();
  

  // function 1 (accepting title in state by user input)
  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
  };


  const savePostDescriptionToState = (event) => {
    setDescription(event.target.value);
  };


  const savePostPhotoToState = (event) => {
    setPhoto(URL.createObjectURL(event.target.files[0]));
  };

  
  // function 2 (accepting content/description in state by user input)
  const savePostContentToState = (event) => {
    setContent(event.target.value);
  };

  // function 3 (to save title and content in allPosts state)
  const savePost = (event) => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, description,photo, content, id }]);
    getTitle.current.value = "";
    getDescription.current.value = "";
    getPhoto.current.value = "";
    getContent.current.value = "";
    toggleCreateNewPost();
  };

  // function 4 (toggle create new post visibility)
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  // function 5 (toggle post editing)
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost);
  };

  // function 6 (to edit posts)
  const editPost = (id) => {
    setEditPostId(id);
    toggleModifyPostComponent();
  };

  // function 7 (to update the posts)
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map((eachPost) => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          description: description || eachPost.description,
          photo: photo || eachPost.photo,
          content: content || eachPost.content
        };
      }

      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };

  // function 8 (to delete posts)
  const deletePost = (id) => {
    const modifiedPost = allPosts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };

  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}

          savePostDescriptionToState={savePostDescriptionToState}
          savePostPhotoToState={savePostPhotoToState}

          savePostContentToState={savePostContentToState}

          getTitle={getTitle}
          getDescription={getDescription}
          getPhoto={getPhoto}
          getContent={getContent}
          savePost={savePost}
        />
        {/* Cancel Button */}
        <button
          className="btn btn-danger cancel-button"
          onClick={toggleCreateNewPost}
        >
      Cancel
        </button>
      </>
    );
  } else if (isModifyPost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    });

    return (
      <>
        <ModifyPost
          title={post.title}

          description={post.description}
          photo={post.photo}
          content={post.content}
          updatePost={updatePost}
          savePostTitleToState={savePostTitleToState}
          savePostDescriptionToState={savePostDescriptionToState}

          savePostPhotoToState={savePostPhotoToState}

          savePostContentToState={savePostContentToState}
          toggleCreateNewPost={toggleCreateNewPost}
        />
        <button
          className="btn btn-danger cancel-update-button"
          onClick={toggleModifyPostComponent}
        >
          Cancel
        </button>
      </>
    );
  }

  return (
    <>


<Container>
      <Row>
        
        <Col> 
      {!allPosts.length ? (
        <div>
          <li>There are no posts yet.</li>
        </div>
      ) : (
        allPosts.map((eachPost) => (
          <Post
            id={eachPost.id}
            key={eachPost.id}
            title={eachPost.title}
            description={eachPost.description}
            photo={eachPost.photo}
            content={eachPost.content}
            editPost={editPost}
            deletePost={deletePost}
          />
        ))
      )}


<button
        className="btn btn-outline-info button-edits create-post"
        onClick={toggleCreateNewPost}
      >
        Create New
      </button>
   
</Col>
      </Row>
    </Container>
     
{/* <h1>image </h1>
<img src = {pic} />
<img src = {pic} /> */}


    </>
  );
};
export default DisplayAllPosts;
