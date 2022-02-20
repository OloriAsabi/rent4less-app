import React,{useState, useEffect, useRef} from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import { getProperties } from '../apiCalls/index';
import { CircularProgress} from "@material-ui/core";
import { Box, Typography, Card, CardMedia, CardContent } from '@material-ui/core'
import {MdOutlineBedroomParent, MdOutlineBathroom} from "react-icons/md"
import {FaToilet} from "react-icons/fa"
import useStyles from "../../styles"
import { propertydata }from "../Properties/data"
import "../Properties/Properties.css";

 function Property ()  {
  const [isLoading, setIsLoading] = useState(false);
  const [propertyData, setPropertyData] = useState([])
  const classes = useStyles();

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

useEffect(() => {
  if (!isLoading) {
  setIsLoading(true)

  setPropertyData(propertydata)
  setIsLoading(false)
  }
},[isLoading])
console.log("-->",propertyData)

  return (
    <div className="section__padding property">
      <div className="property-header">
            <h2>Latest Properties</h2>
        <div > 
        <BsArrowLeftCircle className="icon" onClick={() => scroll('left')}/>
        <BsArrowRightCircle className="icon" onClick={() => scroll('right')}/>
        </div>
        </div>

            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size='5rem' className='load'/>
                </div>
            ) : (
           <div> 
         { propertyData.map((data) => (
           <div className='property-card' >
          <Card key={data.id} ref={scrollRef} className='property-img'>
              <CardMedia
              style={{height: "350px" }}
             image={data.img}
               alt="images"
              />
            <CardContent className='property-card_sec'>
              <p>{data.date}</p>
              <p className='property_purpose'>{data.purpose}</p>
              <Typography gutterBottom variant="h5">{data.title}</Typography>
              <Typography gutterBottom variant="h6">{data.address}</Typography>
              <Box display="flex" justifyContent="space-between" my={2} className='property-box'>
                <Typography component="legend"><MdOutlineBedroomParent className='property-icon'/>{data.bedroom}</Typography>
                <Typography component="legend"><MdOutlineBathroom  className='property-icon'/>{data.bathroom}</Typography>
                <Typography component="legend"><FaToilet  className='property-icon'/>{data.toilet}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" >
                    <Typography className='property-price' variant="subtitle1">Price</Typography>
                    <Typography  className='property-price' gutterBottom variant="subtitle1">#{data.amount}</Typography>
               </Box>
            </CardContent>
        </Card>
        </div>
         ))}
           </div>
            )}
        </div>
    )
}

export default Property