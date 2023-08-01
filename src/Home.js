import {useState,useEffect} from  'react';
import BlogList from './Bloglist';
const Home = () => {
  const[blogs,setBlogs] = useState(null);
  const[error,setError] = useState(null);
  const[isPending,setIsPending] = useState(true);
   
  const [name,setName] = useState('Mario');
  useEffect(()=>{
    setTimeout(()=>{
       fetch(' http://localhost:3001/blogs')
      .then(res=> {
        if(!res.ok){
          throw Error('Could not fetch the data for the resource');
        }
        console.log(res);
        return res.json();
      })
      .then(data=> {
        setBlogs(data);
        console.log(data);
        setIsPending(false);
        setError(null)
      })
      .catch(err=> {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      })
    },1000)
  },[]);

  return (
    <div className="home">
    {error && <div>{error}</div>}
    {isPending && <div>Loading....</div>}
    {blogs && <BlogList blogs={blogs} title ="All Blogs!"/>}
    <button onClick={()=>setName('kris')}>Change name</button>
    {blogs && <BlogList blogs={blogs.filter((blog)=> blog.author==="mario")} title ="Mario's Blogs!" />}
    <p>{name}</p>
    </div>
    
  );
};


export default Home;
