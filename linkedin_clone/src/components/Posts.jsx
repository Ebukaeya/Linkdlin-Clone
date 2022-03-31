import { Component } from "react";

class Posts extends Component {
 

  

  render() {
     /*  let post = this.props.data
      let name = this.props.name
      let title = this.props.title */
     
      let{data} = this.props
      console.log(data.user)
    return (
      <>
        <div className="postWrapperDivnewsfeed">
          {/* title heading */}
         
              <div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfZRhbGQtq2BapB2MXJfWIO2QriO5Wx3qQ&usqp=CAU"/>
                </div>
                <div>
                  <p>{data.username}</p>
                  <p>{data._id}</p>
                  <p>
                    <span>{data.createdAt}</span>
                    <span>edited</span>
                  </p>
                </div>
                <div>...</div>
              </div>
              <div className="postText">
                <p> {data.text} </p>
                
              </div>
         
          <div className="imgDivPostImage">
                <img src={data.image} />
            </div>

            <div className="deleteEditPost">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
      </>
    );
  }
}

export default Posts;
