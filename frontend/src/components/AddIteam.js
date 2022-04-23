import React, {useState} from "react";
import axios from "axios";


export default function AddIteam() {

    const[iteamId, setiteamId] = useState("");
    const[iteamName, setiteamname] = useState("");
    const[price, setprice] = useState("");
    const[quantity, setquantity] = useState("");
    const[brandName, setbarndName] = useState("");


    function sendData(e){
        e.preventDefault();
       
        const newIteam ={

        iteamId,
        iteamName,
        price,
        quantity,
        brandName
    }
        
    axios.post("http://localhost:8070/inventory/add", newIteam).then(()=>{
        alert("Iteam Added")
        window.location.reload();

    }).catch((err)=> {
        alert(err)
    })

    }

    return (

     <div className="body">
      
    
    <div className = "container">
        <h1>Add Iteams</h1>

        
 <form onSubmit={sendData}>




<div class="from-group">

    <label for="IteamId" class="form-label">Iteam ID</label>
    <input type="iteamId" class="form-control" id="iteamId" placeholder="Enter iteam_id"
    onChange={(e)=>{

        setiteamId(e.target.value);

    }}
     />
</div>

  <div class="from-group">
    <label for="iteamName" class="form-label">Iteam Name</label>
    <input type="iteamName" class="form-control" id="iteamname" placeholder="Enter iteam_name"
    
    onChange={(e)=>{

        setiteamname(e.target.value);

    }} 
    />
  </div>

  <div class="from-group">
    <label for="price" class="form-label">Price</label>
    <input type="price" class="form-control" id="price" placeholder="Enter_price"
    
    onChange={(e)=>{

        setprice(e.target.value);

    }}  
    />
  </div>
  
  <div class="from-group">
    <label for=" quantity" class="form-label"> Quantity</label>
    <input type=" quantity" class="form-control" id=" quantity" placeholder="Enter_ quantity"
    
    onChange={(e)=>{

        setquantity(e.target.value);

    }}
    
    />
  </div>

  <div class="from-group">
    <label for=" brandName" class="form-label">  Brand Name</label>
    <input type=" brandName" class="form-control" id="  brandName" placeholder="Enter_ brandName"
    
    onChange={(e)=>{

        setbarndName(e.target.value);

    }}
    
    />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div> 

    )
}