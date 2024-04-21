import {useState,useEffect} from "react" 
import Header from "../Header"
import ProductCard from "../ProductCard"
import FooterSection from "../FooterSection"
 
import "./index.css"

const sortByOptions = [
  {
  optionId:"recommended",
    displayText:"RECOMMENDED"
  },
  {
    optionId:"newest first",
    displayText:"NEWEST FIRST"
  },
  {
    optionId:"popular",
    displayText:"POPULAR"
  },
  {
    optionId:"high to low",
    displayText:"PRICE:HIGH TO LOW"
  },
  {
    optionId:"low to high",
    displayText:"PRICE:LOW TO HIGH"
  },
]

 const App = () => {
  const [products,setProducts] = useState([]);
  const [activeSortOptionId,setActiveSortOptions] = useState(sortByOptions[0].optionId);
  const [showFilters,setFiltersOption] = useState(true)
  const [showMoreIdealOptions,setMoreIdealOptions] = useState(false);
  const [showMoreOccasionOptions,setMoreOccasionOptions] = useState(false);
  const [showMorePatternOptions,setMorePatternOptions] = useState(false);
  const [showMoreWorkOptions,setMoreWorkOptions] = useState(false);
  const [showMoreFabricOptions,setMoreFabricOptions] = useState(false);
  const [showMoreSuitableForOptions,setMoreSuitableForOptions] = useState(false);
  const [showMoreRawMaterialsOptions,setMoreRawMaterialsOptions] = useState(false);
  const [showMoreSegmentOptions,setMoreSegmentOptions] = useState(false);
  const[showCustomizeFilters,setCustomizeFilters] = useState(false)

  useEffect(() => {
    const fetchProductDetails = async() => {
      try{
        const response = await fetch("http://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)  
      setProducts(data)
      }catch(error){
        console.log(`Failed to fetch results:${error.message}`)
      } 
    }
    fetchProductDetails();
  },[])


  const onChangeSortOptions = event => {
    setActiveSortOptions(event.target.value);

  }

  const onCLickShowHideFilters = () => {
    setFiltersOption(prevState => !prevState)
  }

  const showHideFiltersButton = showFilters ? "Hide Filters":"Show Filters";
  const clickToSeeMoreOptions = () => {
  setMoreIdealOptions(prevState =>!prevState)
}
const arrowImageAltText = showMoreIdealOptions ? "Up arrow":"Down arrow";
const arrowImageUrl = showMoreIdealOptions ? "https://res.cloudinary.com/dksgsqhdk/image/upload/v1712650747/arrow-up_edtxel.png":"https://res.cloudinary.com/dksgsqhdk/image/upload/v1712650755/arrow-down_dz4itt.jpg"
const clickToSeeOccasionOptions = () => {
  setMoreOccasionOptions(prevState =>!prevState)
}
const clickToSeeFabricOptions = () => {
  setMoreFabricOptions(prevState =>!prevState)
}
const clickToSeeWorkOptions = () => {
  setMoreWorkOptions(prevState =>!prevState)
}
const clickToSeeSegmentOptions = () => {
  setMoreSegmentOptions(prevState =>!prevState)
}
const clickToSeeRawMaterialsOptions = () => {
  setMoreRawMaterialsOptions(prevState =>!prevState)
}
const clickToSeeSuitableForOptions = () => {
  setMoreSuitableForOptions(prevState =>!prevState)
}
const clickToSeePatternOptions = () => {
  setMorePatternOptions(prevState =>!prevState)
}

const unSelectAllButton = () => {
  console.log("Un Select")
}

const clickOnCustomizable = () => {
  setCustomizeFilters(prevState =>!prevState)
}
return (
    <div>
      <Header/>
      <div className="discover-heading-and-description-container">
        <div className="hading-description-container">
        <h3 className="discover-products-heading">DISCOVER OUR PRODUCTS</h3>
        <p className="description">Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
          </div>
        </div>
      <div className="items-filters-sort-container">
      <button type="button" className="filters-button" onClick={onCLickShowHideFilters}>FILTERS</button> 
      <hr className="filters-hr-line"/>
      <div className="items-filters-container">
        <h3 className="no-of-items">{`${products.length} ITEMS`}</h3>
       <div className="hide-show-filters-button-container">
       <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1712556736/arrow-left-1_kxaetm.jpg" alt="left-arrow" className="left-arrow"/>
       <button type="button" className="hide-show-button" onClick={onCLickShowHideFilters}> {showHideFiltersButton}</button>
        </div>
        </div>
        <select className="sort-by-container" onChange={onChangeSortOptions} value={activeSortOptionId}>
          {sortByOptions.map(eachProduct => (
        <option key={eachProduct.optionId} className="sort-option"> {eachProduct.displayText}</option>
          ))}
        </select>
      </div>
      <div className="filter-and-product-container">
      <div >
        {showFilters && (
          <div className="filters-container">
            <div className="input-checkbox-label-container">
              <input type="checkbox" className="checkbox" id="checkbox" onClick={clickOnCustomizable}/>
              <label htmlFor="checkbox" className="label-element ">CUSTOMIZABLE</label>
            </div>
            {showCustomizeFilters && 
             <div className="filters-inside-section">
            <div className="filters-more-options-container">
            <div className="custom-name-arrow-container" onClick={clickToSeeMoreOptions}>
            <div>
            <h4 className="filters-side-heading">IDEAL FOR</h4>
            </div>
            <img src={arrowImageUrl} alt={arrowImageAltText} className="arrow-down"/>
            </div>
            <p className="all-name">All</p>
            {showMoreIdealOptions && 
                      <div>
                        <button type="button" className="un-select-all-button" onClick={unSelectAllButton}>Unselect All</button>
                        <br/>
                      <input type="checkbox" id="men"/>
                      <label htmlFor="men">Men</label>
                      <br/>
                      <input type="checkbox" id="women"/>
                      <label htmlFor="women">Women</label>
                      <br/>
                      <input type="checkbox" id="baby"/>
                      <label htmlFor="baby">Baby&Kids</label>
                      </div>
                      }
                <hr className="horizon-line"/>
                </div>
                <div className="filters-more-options-container">
            <div className="custom-name-arrow-container" onClick={clickToSeeOccasionOptions}>
            <div>
            <h4 className="filters-side-heading">OCCASION</h4>
            </div>
            <img src={arrowImageUrl} alt={arrowImageAltText} className="arrow-down"/>
            </div>
            <p className="all-name">All</p>
            {showMoreOccasionOptions && 
                      <div>
                        <button type="button" className="un-select-all-button" onClick={unSelectAllButton}>Unselect All</button>
                        <br/>
                      <input type="checkbox" id="men"/>
                      <label htmlFor="men">Men</label>
                      <br/>
                      <input type="checkbox" id="women"/>
                      <label htmlFor="women">Women</label>
                      <br/>
                      <input type="checkbox" id="baby"/>
                      <label htmlFor="baby">Baby&Kids</label>
                      </div>
                      }
                <hr className="horizon-line"/>
                </div>
                <div className="filters-more-options-container">
            <div className="custom-name-arrow-container" onClick={clickToSeeWorkOptions}>
            <div>
            <h4 className="filters-side-heading">WORK</h4>
            </div>
            <img src={arrowImageUrl} alt={arrowImageAltText} className="arrow-down"/>
            </div>
            <p className="all-name">All</p>
            {showMoreWorkOptions && 
                      <div>
                        <button type="button" className="un-select-all-button" onClick={unSelectAllButton}>Unselect All</button>
                        <br/>
                      <input type="checkbox" id="men"/>
                      <label htmlFor="men">Men</label>
                      <br/>
                      <input type="checkbox" id="women"/>
                      <label htmlFor="women">Women</label>
                      <br/>
                      <input type="checkbox" id="baby"/>
                      <label htmlFor="baby">Baby&Kids</label>
                      </div>
                      }
                <hr className="horizon-line"/>
                </div>
                <div className="filters-more-options-container">
            <div className="custom-name-arrow-container" onClick={clickToSeeFabricOptions}>
            <div>
            <h4 className="filters-side-heading">FABRIC</h4>
            </div>
            <img src={arrowImageUrl} alt={arrowImageAltText} className="arrow-down"/>
            </div>
            <p className="all-name">All</p>
            {showMoreFabricOptions && 
                      <div>
                        <button type="button" className="un-select-all-button" onClick={unSelectAllButton}>Unselect All</button>
                        <br/>
                      <input type="checkbox" id="men"/>
                      <label htmlFor="men">Men</label>
                      <br/>
                      <input type="checkbox" id="women"/>
                      <label htmlFor="women">Women</label>
                      <br/>
                      <input type="checkbox" id="baby"/>
                      <label htmlFor="baby">Baby&Kids</label>
                      </div>
                      }
                <hr className="horizon-line"/>
                </div>
                <div className="filters-more-options-container">
            <div className="custom-name-arrow-container" onClick={clickToSeeSegmentOptions}>
            <div>
            <h4 className="filters-side-heading">SEGMENT</h4>
            </div>
            <img src={arrowImageUrl} alt={arrowImageAltText} className="arrow-down"/>
            </div>
            <p className="all-name">All</p>
            {showMoreSegmentOptions && 
                      <div>
                        <button type="button" className="un-select-all-button" onClick={unSelectAllButton}>Unselect All</button>
                        <br/>
                      <input type="checkbox" id="men"/>
                      <label htmlFor="men">Men</label>
                      <br/>
                      <input type="checkbox" id="women"/>
                      <label htmlFor="women">Women</label>
                      <br/>
                      <input type="checkbox" id="baby"/>
                      <label htmlFor="baby">Baby&Kids</label>
                      </div>
                      }
                <hr className="horizon-line"/>
                </div>
                <div className="filters-more-options-container">
            <div className="custom-name-arrow-container" onClick={clickToSeeSuitableForOptions}>
            <div>
            <h4 className="filters-side-heading">SUITABLE FOR</h4>
            </div>
            <img src={arrowImageUrl} alt={arrowImageAltText} className="arrow-down"/>
            </div>
            <p className="all-name">All</p>
            {showMoreSuitableForOptions && 
                      <div>
                        <button type="button" className="un-select-all-button" onClick={unSelectAllButton}>Unselect All</button>
                        <br/>
                      <input type="checkbox" id="men"/>
                      <label htmlFor="men">Men</label>
                      <br/>
                      <input type="checkbox" id="women"/>
                      <label htmlFor="women">Women</label>
                      <br/>
                      <input type="checkbox" id="baby"/>
                      <label htmlFor="baby">Baby&Kids</label>
                      </div>
                      }
                <hr className="horizon-line"/>
                </div>
                <div className="filters-more-options-container">
            <div className="custom-name-arrow-container" onClick={clickToSeeRawMaterialsOptions}>
            <div>
            <h4 className="filters-side-heading">RAW MATERIALS</h4>
            </div>
            <img src={arrowImageUrl} alt={arrowImageAltText} className="arrow-down"/>
            </div>
            <p className="all-name">All</p>
            {showMoreRawMaterialsOptions && 
                      <div>
                        <button type="button" className="un-select-all-button" onClick={unSelectAllButton}>Unselect All</button>
                        <br/>
                      <input type="checkbox" id="men"/>
                      <label htmlFor="men">Men</label>
                      <br/>
                      <input type="checkbox" id="women"/>
                      <label htmlFor="women">Women</label>
                      <br/>
                      <input type="checkbox" id="baby"/>
                      <label htmlFor="baby">Baby&Kids</label>
                      </div>
                      }
                <hr className="horizon-line"/>
                </div>
                <div className="filters-more-options-container">
            <div className="custom-name-arrow-container" onClick={clickToSeePatternOptions}>
            <div>
            <h4 className="filters-side-heading">PATTERN</h4>
            </div>
            <img src={arrowImageUrl} alt={arrowImageAltText} className="arrow-down"/>
            </div>
            <p className="all-name">All</p>
            {showMorePatternOptions && 
                      <div>
                        <button type="button" className="un-select-all-button" onClick={unSelectAllButton}>Unselect All</button>
                        <br/>
                      <input type="checkbox" id="men"/>
                      <label htmlFor="men">Men</label>
                      <br/>
                      <input type="checkbox" id="women"/>
                      <label htmlFor="women">Women</label>
                      <br/>
                      <input type="checkbox" id="baby"/>
                      <label htmlFor="baby">Baby&Kids</label>
                      </div>
                      }
                </div>
                </div>}
           
            </div>
        )}
      </div>

      <ul className="un-ordered-products-container">
      {products.map(eachProduct => (
        <ProductCard productDetails={eachProduct} key={eachProduct.optionId} />
      ))}
      </ul>
      </div>
      <FooterSection/>
      </div>
  )
 }

 export default App