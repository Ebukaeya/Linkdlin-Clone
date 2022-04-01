import { Component } from "react";

class Posts extends Component {
 
  

  render() {
     

      let{data} = this.props
      console.log(data.user.name)
    return (
      <>
        <div className="postWrapperDivnewsfeed">
          {/* title heading */}
         
              <div>
                <div>
                    <img src={data.user.image}/>
                </div>
                <div>
                  <p>{data.user.name}</p>
                  <p style={{color:"gray"}}>{data.user.title}</p>
                  <p>
                    <span>{data.createdAt.slice(0,10)}</span>
                    <span style={{color:"blue"}}>edited</span>
                  </p>
                </div>
                <div>...</div>
              </div>
              <div className="postText">
                <p> {data.text} </p>
                
              </div>
         
          <div className="imgDivPostImage">
                <img src={data.image } />
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
