import React from 'react';
import './css/addProduct.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

const AddProudect = () => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const[color, setColor] = useState("");
  const[image, setImage] = useState({ preview: '', data: '' });
  const[cat_id, setcat_id] = useState(0);

  useEffect(() => {
   
  }, []);


  const handleFileChange = async (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default behavior of the event

    const formData = new FormData();
    formData.append('image', image.data)
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('size', size);
    formData.append('color', color);
    formData.append('cat_id', cat_id);
    const token = localStorage.getItem("token") || "";;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // const data = {
      
    //   name: name,
    //   description: description,
    //   price: price,
    //   color:color,
    //   size: size,
    //   cat_id: cat_id,
    //   image: image.data,
    // };
    try {
      const response = await axios.post("http://localhost:8000/addProduct", formData,config);
  
      // Display success message
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Product has been submitted successfully.',
      });
  
      console.log(response.data);
    } catch (error) {
      // Display error message
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to submit the product.',
      });
  
      console.error(error.message);
    }
  };
    return (

<div className="container mt-2">
  <div className="row flex-lg-nowrap">
  <form className="form" noValidate="" onSubmit={handleSubmit}  enctype="multipart/form-data">
    <div className="col">
      <div className="row">
        <div className="col mb-3">
          <div className="card">
            <div className="card-body">
              <div className="e-profile">
                <div className="row">
                  <div className="col-12 col-sm-auto mb-3">
                    <div className="mx-auto" style={{ width: 140 }}>
                      <div
                        className="d-flex justify-content-center align-items-center rounded"
                        style={{
                          height: 140,
                          backgroundColor: "rgb(233, 236, 239)"
                        }}
                      >
                        <span
                          style={{
                            color: "rgb(166, 168, 170)",
                            fontWeight: "bold",
                            fontSize: "8pt"
                          }}
                        >
                             {image.preview?'':'140x140'}   {image.preview && <img src={image.preview} width='140' height='140' />}
                        </span>
                      </div>
                    </div>
                  </div>
                 
                  <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                    <div className="text-center text-sm-start mb-2 mb-sm-0">
                      <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                      {name}
                      </h4>
                      <p className="mb-0">{description}</p>
                      
                      <div className="mt-2">
                      <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      Style="display: none;"
                      aria-describedby="inputGroupFileAddon01"
                      name="image"
                      onChange={handleFileChange}
                    />
                    <label
                      className="custom-file-label btn btn-primary"
                      htmlFor="inputGroupFile01"
                    >
                          <i className="fa fa-fw fa-camera me-1"   />
                          <span >Choose Photo</span>
                        </label>
                      </div>
                    </div>
           
                  </div>
                </div>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      Add Dress
                    </a>
                  </li>
                </ul>
                <div className="tab-content pt-3">
                  <div className="tab-pane active">
                      <div className="row">
                        <div className="col-8">
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="name"> Title</label>
                                <input
                                  className="form-control"
                                  type="text"
                                  id="name"
                                  name="name"
                                  placeholder="Title"
                                  onChange={(e) => setName(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col mb-3">
                              <div className="form-group">
                                <label htmlFor="describetion">Describetion</label>
                                <textarea
                                  className="form-control"
                                  id="describetion"
                                  name="describetion"
                                  rows={5}
                                  placeholder="Describetion"
                                  defaultValue={""}
                                  onChange={(e) => setDescription(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="category"> Category</label>
                            
                                <select
  name="cat_id"
  onChange={(e) => setcat_id(e.target.value)}
  className="form-control form-select"
  aria-label=".form-select-sm example"
>
  <option selected="">Select Category</option>
  <option value={1}>wedding dress</option>
  <option value={2}>Islamic dress</option>
  <option value={3}>Evening dress</option>
  <option value={4}>Other</option>
</select>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="price"> Price</label>
                                <input
                                  className="form-control"
                                  type="number"
                                  id="price"
                                  name="price"
                                  placeholder="Price"
                                  onChange={(e) => setPrice(e.target.value)}
                                />
                              </div>
                            </div>
                          </div>


                          <div className="row">
                            <div className="col">
                            <div className="form-group">
                                <label htmlFor="color"> Color</label>
                            
                                <select
  className="form-control form-select"
  aria-label=".form-select-sm example"
  onChange={(e) => setColor(e.target.value)}
>
  <option selected="" >Select Color</option>
  <option value="red">Red</option>
  <option value="Black">Black</option>
  <option value="White">White</option>
  <option value="Purple">Purple</option>
  <option value="Blue">Blue</option>

</select>
                              </div>

                            </div>
                            <div className="col">
                              <div className="form-group">
                                <label htmlFor="size"> Size</label>
                            
                                <select
  className="form-control form-select"
  aria-label=".form-select-sm example"
  onChange={(e) => setSize(e.target.value)}
>
  <option selected="">Select Size</option>
  <option value='small'>Small</option>
  <option value='medium'>Medium</option>
  <option value='lagre'>Large</option>
  <option value='x-lagre'>X-Large</option>
</select>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
    
                      <div className="row">
                        <div className="col d-flex justify-content-end">
                          <button className="btn "  type="submit" style={{ backgroundColor: '#F45757', color:"black"}} >
                            Add Dress
                          </button>
                        </div>
                      </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
    </form>
  </div>
  
</div>




    );
}

export default AddProudect;
