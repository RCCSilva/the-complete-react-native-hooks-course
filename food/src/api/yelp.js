import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 3V5YEy8DFH1OASUj465cIV_AkVZGyEMFE1hx812mdEsthF-_hNEYGubOPuh0LSbQjbbGVFTUcXmkdIZRO_oOBJDcVYLruaO5hk1zXw53lwZwcV4Qz4aueAUpC2Z0YXYx'
  }
})
