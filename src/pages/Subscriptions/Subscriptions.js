import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Subscriptions.scss';
import { getSubscribers } from '../../features/subscriptions/subscriptionSlice'
import { useNavigate } from 'react-router-dom'
import BottomNav from '../../components/BottomNav/BottomNav';
import TopNav from '../../components/TopNav/TopNav';
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Subscriptions() {
  const navigate = useNavigate()


    const { user} = useSelector((state) => state.auth);
    if(user=== null){
      alert('Please login to continue')
      window.location.href = '/login'
  }
    const dispatch = useDispatch()

    const { goals, isLoading, isError, message } = useSelector(
      (state) => state.subscriber
    )
   
    useEffect(() => {

      if (isError) {
        console.log('there was an error while loading', message)
      }    
      dispatch(getSubscribers({phoneNumber:user.phoneNumber}))

  
     
    }, [user, navigate, isError, message, dispatch])  
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: '#FFB246',
          color: theme.palette.common.black,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));
      
    

    return (
        <>
        <TopNav />
        <div className = 'containerTable'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>DATE</StyledTableCell>
            <StyledTableCell align="right">AMOUNT</StyledTableCell>
            <StyledTableCell align="right">PERIOD</StyledTableCell>
            <StyledTableCell align="right">START DATE</StyledTableCell>
            <StyledTableCell align="right">EXPIRY DATE</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
        
        {
        goals == undefined ? <div class = " spinner " role="status ">
<svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
<span class="sr-only spinner">Loading...</span>
</div> : 
goals.subscribers.length > 0 ? (
          //goals is greater than 0
          goals.subscribers.map((goal) => (
          <TableRow
          key={1}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
        <TableCell align="right">{goal.createdAt.slice(0, 10)}</TableCell>
        <TableCell align="right">{goal.amount}</TableCell>
        <TableCell align="right">{goal.lengthOfSubscription}</TableCell>
        <TableCell align="right">{goal.createdAt.slice(0, 10)}</TableCell>
        <TableCell align="right">{goal.expiry}</TableCell>
   
     
        </TableRow>
          ))
          ) : (
          <h3 className='align-center'>You have not yet subscribed </h3>
        )}
  
         
        </TableBody>
      </Table>
    </TableContainer>

    </div>
<BottomNav />
        </>
    )

}