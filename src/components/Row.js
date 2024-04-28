
function Row({transactions}){

    const data = transactions.map((transaction, index) => {
        return(
            <tbody key={index+1}>
    <tr className="table table-light">
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
    </tr>
    </tbody>
        )
    })
    return(
      <>
             {data}
      </>
    );
}export default Row;