import React from 'react'
import NavBar from './NavBar'

const AddPhotos = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label for="" class="form-label">Photo Name</label>
                            <input type="text" name="" id="" className="form-control" />
                        </div>
                        <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label for="" class="form-label">category</label>
                            <select name="" id="" className="form-control">
                                <option value="friends">Friends</option>
                                <option value="travel">travel</option>
                                <option value="family">family</option>
                                
                            </select></div>
                        </div>
                        
                            <br></br>
                        <div className="col- col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-warning">Add photo</button>
                        </div>
                       
                </div>
            </div>
         </div>
    </div>
  )
}

export default AddPhotos