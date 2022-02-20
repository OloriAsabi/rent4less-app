import { makeStyles } from '@material-ui/core/styles'



export default makeStyles((theme) => ({
    propertyHeader: {
        display: 'flex', justifyContent: 'space-bewteen', alignItems: 'center',
    },
    loading: {
     height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    },
  load:{
      color: "#6AB950", 
  },
  propertyCard: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: '1', flexDirection: 'row', 
    width: 'max-content', overflowX: 'scroll', scrollbarWidth: 'none', borderRadius: '30px', backgroundColor: "#fff",
  }
}));
