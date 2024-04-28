
function Row({transactions}){

    const data = transactions.map((transactions) => {
        return(
    <tr className="table table-light" key={transactions.id}>
        <td>{transactions.date}</td>
        <td>{transactions.description}</td>
        <td>{transactions.category}</td>
        <td>{transactions.amount}</td>
    </tr>
        )
    })
    return(
      <>
             {data}
      </>
    );
}export default Row