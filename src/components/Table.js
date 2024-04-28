import Row from "./Row";
import TransactionForm from "./TransactionForm";
function Table({transactions}){

    return(
        <table className="table table-secondary table-striped table-bordered">
        <thead>
          <tr> 
            <th><h3 className="ui center aligned header">Date</h3></th>
            <th><h3 className="ui center aligned header">Description</h3></th>
            <th><h3 className="ui center aligned header">Category</h3></th>
            <th><h3 className="ui center aligned header">Amount</h3></th>
          </tr>
        </thead>
       
             <Row transactions={transactions}/>
             <TransactionForm/>
       
      </table>
    );
}

export default Table;