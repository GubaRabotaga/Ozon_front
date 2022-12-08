import React,{useState,useEffect} from "react";
import axios from 'axios';
import './styles/title.scss';


<style>
</style>

function DataFetching(){
const [posts,setPosts] = useState([])
useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=> {
        
        setPosts(res.data)
    })
    .catch(err=> {
        console.log(err)
    })
},[])

    
    const newLocal = "220";
    return(
    <div>
  <ul>
  
    {
        
        posts.map(post=> 
        
        
        <li key={post.id}>


           <img src={post.image} className="hgh"/>
           <img className="heart" width={25} height={25} src="img/heart.svg"/>
               <span className="title">
               


                      <span className="price">
                         {post.price}$
                      </span>
                              <span className="oxontext"> с OZON картой
                                 </span>
                                     <br/>
                                         <span className="realprice"> 
                                                  {post.price+(post.price/5)}
                                         </span>
                                                   <span className="unrealprice"> 
                                                         {post.price+(post.price*3)}
                                                  </span>
                                                     <br/>
                                                      {post.title}
                                                     <br/>
                                             <img className="star" width={16} height={16} src="img/star.svg"/>
                                        <span className="rate"> 
                                            {post.rating.rate}
                                        </span>
                                  <img className="star" width={16} height={16} src="img/comment.svg"/>
                           <span className="rate"> 
                                {post.rating.count}
                           </span>
                </span>
        
        
        </li>)
        
    }
    
  </ul>
    </div>


    )
    
}

export default DataFetching