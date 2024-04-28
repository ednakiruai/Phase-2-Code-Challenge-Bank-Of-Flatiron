import Row from "./Row";
function Table(){

    const transactions = [
        {
            id:"1",
            date: "20-04-2024",
            description: "Movies",
            category: "Entertainment",
            amount: "4,500"
        },
        {
            id:  "2",
            date: "21-04-2024",
            description: "Groceries",
            category: "Food",
            amount: "6,500"
        },
        {
            id: "3",
            date: "22-04-2024",
            description: "Gas",
            category: "Travel",
            amount: "10,000"
        },
        {
            id: "4",
            date: "23-04-2024",
            description: "Headphones",
            category: "Electronics",
            amount: "1,350"
        },
        {
            id: "5",
            date: "24-04-2024",
            description: "Restaurant",
            category: "Food",
            amount: "4,500"
        },
        { 
            id: "6",
            date: "25-04-2024",
            description: "Ticket",
            category: "Transport",
            amount: "2,500"
        },
        {
            id: "7",
            date: "26-04-2024",
            description: "Novel",
            category: "Books",
            amount: "900"
        },
        {
            id: "8",
            date: "27-04-2024",
            description: "Medicine",
            category: "Health",
            amount: "1,500"
        }
    ];
    
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
        <tbody>
             <Row transactions={transactions}/>
        </tbody>
      </table>
    );
}

export default Table;