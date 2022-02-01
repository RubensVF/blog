import Highlight from 'react-highlight'
import Typography from '@mui/material/Typography'

export default function PostElements(props){
    const data = props.data;
    switch(data.type){
      case 'subtitle':
        return <Typography variant="h5" key={data.data}>{data.data}</Typography>
      case 'text':
        return <Typography variant="body1" gutterBottom key={data.data}>{data.data}</Typography>
      case 'code':
        return <Highlight key={data.data}>{data.data}</Highlight>
      case 'img':
        return <img src={data.data} 
          key={data.data}  
        style={{maxWidth: '100%',
          maxHeight: '100%',
          display: 'block'}}></img>
    }
    return(<></>);
  }
  