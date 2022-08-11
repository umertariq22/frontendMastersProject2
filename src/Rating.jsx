

const Rating = () =>{

    return (
      <div class="card">
        <img src="/icon-star.svg" className="star" alt="" />
        <h1 className="heading">How did we do?</h1>
        <p className="text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <form action="/submit">
          <div className="rating">
            <input
              type="radio"
              name="value"
              id="1"
              className="none"
              value="1"
            />
            <label htmlFor="1" className="rating-button">
              1
            </label>
            <input
              type="radio"
              name="value"
              id="2"
              className="none"
              value="2"
            />
            <label htmlFor="2" className="rating-button">
              2
            </label>
            <input
              type="radio"
              name="value"
              id="3"
              className="none"
              value="3"
            />
            <label htmlFor="3" className="rating-button">
              3
            </label>
            <input
              type="radio"
              name="value"
              id="4"
              className="none"
              value="4"
            />
            <label htmlFor="4" className="rating-button">
              4
            </label>
            <input
              type="radio"
              name="value"
              id="5"
              className="none"
              value="5"
            />
            <label htmlFor="5" className="rating-button">
              5
            </label>
          </div>
          <button className="submit">SUBMIT</button>
        </form>
      </div>
    );
}
export default Rating;