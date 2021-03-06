import React,{useState, useEffect, useRef} from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import { getProperties } from '../apiCalls/index';
import { CircularProgress} from "@material-ui/core";
import { Box, Typography, Card, CardMedia, CardContent } from '@material-ui/core'
import {MdOutlineBedroomParent, MdOutlineBathroom} from "react-icons/md"
import {FaToilet} from "react-icons/fa"
import useStyles from "../../styles"
import { propertydata }from "./data"
import "./Properties.css";

 function Properties ()  {
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
  setIsLoading(false)

  getProperties()
  .then((data) => {
    setPropertyData(data) 
     setIsLoading(false)
  })
  }
},[isLoading])
console.log("-->",propertyData)

  return (
    <div className="section__padding">
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
           <>
         { propertyData?.featured_properties?.map((data, i) => (
          <Card key={i} ref={scrollRef} className="property-card">
            {data?.images?.map(img => (
              img.primary ? ( 
                <CardMedia
                id={data.id}
                style={{ height: 350 }}
               image={img.file}
                 alt="images"
                 className='property-img'
                />) : (<img src="" alt=""/>)
            ))
            }
            <CardContent className='property-card_sec'>
              <p>{data.created_on ? data.created_on : "1 Jan 2021"}</p>
              <p className='property_purpose'>{data.purpose ? data.purpose : "FOR SALE"}</p>
              <Typography gutterBottom variant="h5">{data.title ? data.title : "5 Bedroom Apartment"}</Typography>
              <Typography gutterBottom variant="h6">{data.address ? data.address : "Lagos"}</Typography>
              <Box display="flex" justifyContent="space-between" my={2} className='property-box'>
                <Typography component="legend"><MdOutlineBedroomParent  className='property-icon'/>{data.details.bedroom ? data.details.badroom :"1"}</Typography>
                <Typography component="legend"><MdOutlineBathroom  className='property-icon'/>{data.details.bathroom ? data.details.bathroom : "1"}</Typography>
                <Typography component="legend"><FaToilet  className='property-icon'/>{data.details.toilet ? data.details.toilet : "1"}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography className='property-price' variant="subtitle1">Price</Typography>
                    <Typography className='property-price' gutterBottom variant="subtitle1">#{data.amount ? data.amount : "50000"}</Typography>
               </Box>
            </CardContent>
        </Card>
         ))}
           </>
            )}
        </div>
    )
}

export default Properties