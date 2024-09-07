import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [title , setTitle] = useState('');
   const [input, setInput] = useState({
     name: "",
     mobile: "",
   });
  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://designs3.cloudzappy.com/new-test-image.php"
      );
      setData(response.data.data.image_url);
      setTitle(response.data.data.title);
      console.log(title);

    } catch (err) {
      console.error(err);
    }
  };

  const handleData = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const save = () => {
    const data = JSON.stringify(input)
    sessionStorage.setItem('data', data);
    const rec =JSON.parse( sessionStorage.getItem('data'));
    console.log(rec.name);
    console.log(rec.mobile);

  }
  const remove = () => {
    sessionStorage.removeItem('data');
  }
  const deletall = () => {
    sessionStorage.clear();
  }
  // const apiCheck = async() => {
  //   try{
  //     const response =await axios.post("http://designs3.cloudzappy.com/test-api/update-acc-balance.php",{id:1})
  //     console.log('success' + response);
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }


  // chat gpt

//   const apiCheck = async() => {
//      try{
//   const response = await axios({
//     method: 'post',
//     url: "http://designs3.cloudzappy.com/test-api/update-acc-balance.php",
//     data: {
//       id: 1
//     },
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     timeout: 5000 // Timeout after 5 seconds
//   })
// }
//   catch(err){
//          console.log(err);
//        }
//      }
  


const apiCheck = async () => {
  try {
    const response = await axios.post("https://designs3.cloudzappy.com/test-api/update-acc-balance.php", {
      id: 1
    });
    alert('Success:', response.data)
    console.log('Success:', response.data);
  } catch (err) {
    if (err.response) {
      // Server responded with a status other than 2xx
      alert('Error Response:', err.response.data)
      console.error('Error Response:', err.response.data);
      alert('Status Code:', err.response.status)
      console.error('Status Code:', err.response.status);
    } else if (err.request) {
      // Request was made but no response received
      alert('Error Request:', err.request)
      console.error('Error Request:', err.request);
    } else {
      // Something else caused the error
      alert('Error Message:', err.message)
      console.error('Error Message:', err.message);
    }
  }
};


  return (
    <div>
      {/* <div className="container justify-content-evenly d-flex my-5">
        {data &&
          data.map((item, index) => (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                alt="loading"
                width={200}
                height={200}
                src={item.image_url}
                className=" mx-auto border rounded my-5"
              />
              <label className="text-center pb-5">title - {item.title}</label>
            </div>
          ))}
      </div> */}
      <div className="container  my-5">
        <div className="card " style={{ width: "18rem" }}>
          <img className="" src={`${data}`} alt="" width={500} height={500}/>
          <p>title  - {title}</p>
        </div>
      </div>
      <div className="text-center my-5">
        <button onClick={fetchImages} className="btn btn-success ">
          Check
        </button>

      </div>

  <div>
    <input type="text" name="name"   onChange={handleData} />
    <input type="text" name="mobile" onChange={handleData} />
    <button onClick={save}>save</button>
    <button onClick={remove}>remove</button>
    <button onClick={deletall}>delet all</button>
    <button onClick={apiCheck}>check</button>


  </div>
    </div>
  );
}

export default App;
