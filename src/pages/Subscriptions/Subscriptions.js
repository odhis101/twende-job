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
import { getSubscriptions } from '../../features/subscriptions/subscriptionSlice'
export default function Subscriptions() {
    const { user} = useSelector((state) => state.auth);
    const dispatch = useDispatch()
 
  
    const { Subscriptions, isLoading, isError, message } = useSelector(
        (state) => state.subscribers
      )
      
      useEffect(() => {

        if (isError) {
          console.log('there was an error while loading', message)
        }    
        dispatch(getSubscriptions())
    
       
      }, [user, isError, message, dispatch])
      console.log(Subscriptions);

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
      
      function createData(name, calories, fat, carbs, protein,ref) {
        return { name, calories, fat, carbs, protein,ref };
      }
      
      const rows = [
        createData('18/11/2022', 200, 7, "17/11/2022", "24/11/2022","HSA-RF2B"),
        createData('18/11/2022', 50, 2, "12/11/2022", "17/11/2022","HSA-RF2B"),
      
      ];

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
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.ref}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>

        </>
    )

}