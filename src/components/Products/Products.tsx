import { BsFilterSquare } from 'react-icons/bs'

const Products = () => {
  return (
    <section className='products'>
      <div className='filters'>
        <div className='filterDrop'>
          <p>Filters</p>
          <BsFilterSquare/>
        </div>
        <select name="sort" id="">
          <option value="">Sort By</option>
        </select>
      </div>
      <h3>Products For You!</h3>
      <div className='productList'>
        
      </div>
    </section>
  )
}

export default Products