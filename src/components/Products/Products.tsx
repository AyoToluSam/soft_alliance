import { BsFilterSquare } from 'react-icons/bs'

const Products = () => {
  return (
    <section>
      <div>
        <p>Filter</p>
        <BsFilterSquare/>
      </div>
      <div>
        <select name="sort" id="">
          <option value="">Sort By</option>
        </select>
      </div>
    </section>
  )
}

export default Products