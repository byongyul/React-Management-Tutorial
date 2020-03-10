import React, {Component} from 'react';
import Customer from './components/Customer';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles}from '@material-ui/core/styles';

const styles= theme=>({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit*3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})
const customers = [{
  'id':1,
  'name':'최예지',
  'image':'https://www.placeimg.com/64/64/1',
  'birthday':'030717',
  'gender': 'female',
  'job':'high school student'
},
{
  'id':2,
  'name':'최윤서',
  'image':'https://www.placeimg.com/64/64/2',
  'birthday':'011218',
  'gender': 'male',
  'job':'high school student'
},
{
  'id':3,
  'name':'홍길동',
  'image':'https://www.placeimg.com/64/64/10',
  'birthday':'960717',
  'gender': 'female',
  'job':'high school student'
},
]
class App extends Component{
  render() {
    const {classes}=this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>ID</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
      {customers.map(c=>{
         return <Customer key={c.id}id={c.id}name={c.name}image={c.image}birthday={c.birthday}gender={c.gender}job={c.job}/> 
      })}
          </TableBody>
        </Table>
      </Paper>
      
    );
  }
}

export default withStyles(styles)(App);
