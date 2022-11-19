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
            <StyledTableCell align="right">REF CODE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {goals === undefined ? <div>loading</div> : map(goals.subscribers, (goal) => (
            console.log(goal)
          ))
}
         
        </TableBody>
      </Table>
    </TableContainer>
    </div>

        </>
    )

}