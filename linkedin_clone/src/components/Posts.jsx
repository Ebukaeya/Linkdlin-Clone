import { Component } from "react";

class Posts extends Component {
 
  

  render() {
     

      let{data} = this.props
      console.log(data.profile.name)
    return (
      <>
        <div className="postWrapperDivnewsfeed">
          {/* title heading */}
         
              <div>
                <div>
                    <img src={data.profile.image}/>
                </div>
                <div>
                  <p>{data.profile.name}</p>
                  <p style={{color:"gray"}}>{data.profile.title}</p>
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
         
         {data.image && <div className="imgDivPostImage">
                <img src={data.image } />
            </div>}

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
