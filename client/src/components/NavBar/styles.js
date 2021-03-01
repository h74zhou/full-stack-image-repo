import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: '#17153C',
  },
  heading: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
    fontFamily: 'sans-serif',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '500px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '500px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: '#ffffff',
    width: '250px',
  },
  brandContainer: {
    display: 'flex-start',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
