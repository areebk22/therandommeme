import { useState, useEffect, useRef} from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { data } from './data';

const Home=()=>{

  const APIurl = "https://meme-api.com/gimme"; 
  const [currAPIurl,setCurrAPIurl] = useState("https://meme-api.com/gimme") ;

  const [tagArray,setTagArray] = useState(['funny']);

  const handleTagSelect = (category) => {

    if (tagArray[0] == 'funny'){
      setTagArray([category]);
    }
    else{
      setTagArray((previousState) => [...previousState,category]);
    }
    console.log(tagArray);  
  };

  

  // if (tagArray[0] == 'funny'){
  //   setTagArray([category]);
  // }
  // else{
  //   setTagArray((previousState) => [...previousState,category]);
  // }
  // console.log(tagArray);

  const handleTagDeselect = (category) =>{
    if ([...tagArray].size == 1){
      setTagArray(['funny']);
    }
    else{
      setTagArray((previousState) => previousState.filter(item => item !== category)); 
    }
    console.log(tagArray);
  }

  var AllCats = [{title:"dank", state:false},{title:"wholesome", state:false},{title:"text-memes", state:false},
  {title:"animal", state:false},{title:"anime", state:false}];

  const allCategories = ["dank","wholesome","text-memes","animal","anime"];
  const allSubReddits = ["funny","terriblefacebookmemes","dankmemes","AdviceAnimal","MemeEconomy","wholsomememes","textmemes","animememes"];

  const categorySubReddits = { "funny":"funny",
                               "wholesome":"wholesomememes",
                               "animal":"AdviceAnimal", 
                               "text-memes":"textmemes",
                               "dank":"dankmemes",
                               "anime" :"animememes" };

                               
  const [imgURL,setImgURL] = useState("");

  function random_item(items){ 
    return items[Math.floor(Math.random()*items.length)]; 
  }

  async function getMeme(){
    const randomCategory = categorySubReddits[random_item(tagArray)];
    console.log(randomCategory);
    setCurrAPIurl(APIurl+"/"+`${randomCategory}`);
    
    const data = await fetch(currAPIurl);
    let response = await data.json() ;
    setImgURL(response.url);
  }
  
  // If not for the following block of code and by just calling getMeme() func, 
  // we were getting 2 api calls for some reason and 2 images were popping one after another. The following code fixes it.
  const renderAfterCalled = useRef(false);
  useEffect(() => {
      if (!renderAfterCalled.current) {
        getMeme();
      }
      renderAfterCalled.current = true;
  }, []);

  // ADD FUNCTIONALITY -> TO CHANGE IMAGE ON PRESS OF SPACEBAR.
  // function handleKeyPress(event){
  //   console.log(event.key);
  //   if (event.keyCode === 49){
  //     getMeme();
  //   }
  // }

  const [btnState,setBtnState] = useState(false);
  let toggleClassCheck = btnState ? 'active' : '';

  // function handleClick(category){
  //   setCurrAPIurl(APIurl+"/"+data[category]);
  //   setBtnState(btnState => !btnState);
  // }

  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Select Meme Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <div className="categories">
        {/* make them switches => if on then append in list, if off then remove */}
          {
            allCategories.map((category) => (
              <div id={category} className={`category-link ${toggleClassCheck}`}
              onClick={!tagArray.includes(category) ? (() => handleTagSelect(category)) : (() =>handleTagDeselect(category)) }> 
                {category}     
              </div>
            ))
          }
        </div>

        </Modal.Body> 
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );

  }

  return( 
    <div className="home">

      <div className='category-div'>
        <button class="category-btn" onClick={() => setModalShow(true)}>Select Category</button>
      </div>
      <div className="category">
        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>

      
      <div className="img-div">
        <img src={imgURL} class="meme" alt="" onClick={getMeme} />
        <button onClick={getMeme}>clickme</button>
      </div>
    </div>
  );
}

export default Home;

  //https://github.com/D3vd/Meme_Api
  // https://meme-api.com/gimme/{subreddit-name}
  //https://meme-api.com/gimme/{subreddit-name}?nsfw:false   - To not get nsfw memes
  // Good subreddits : /terriblefacebookmemes , /AdviceAnimals (for animalmemes) , /MemeEconomy, /funny . /textmemes