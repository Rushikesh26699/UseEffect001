import React from 'react'
import '../CSS_files/Result.css'
import { useContext } from 'react'
import{Data} from '../App'
const Result = ({apiresult,SetApiresult}) => {
    // const {ApiResult,SetApiresult}=useContext(Data)
    
    return (
        
    <div className='Result'>

        {console.log(apiresult)}
       
            {  apiresult.map((ele)=>{
                // console.log(ele.recipe);
                console.log(ele.recipe)
                return <div className='cards'>
                    <div className="cardheading">
                    <h1>{ele.recipe.label}</h1>
                    <p>{ele.recipe.mealType}</p>

                    </div>
                    <div className="orderlist">
                    <ol>
                            {ele.recipe.ingredientLines.map((ingredient,index )=> {
                                if(index<=4){
                                    return <li>{ingredient}</li>
                                }
                                
                            })}
                        </ol>

                    </div>
                   

                        <p>Calories :{ele.recipe.calories.toFixed(2)}</p>
                        
                        <img src={ele.recipe.image} alt={ele.recipe.label} />

                           </div>
            })}

                            {/* Adding the once agine */}

                    {/* <div className="image-container">
                        <img src={ele.recipe.image} alt={ele.recipe.label} />

                                
                    </div>
                    <div className="lowercontainer">
                        <h4>{ele.recipe.label}</h4>
                        <span>{ele.recipe.source}</span>
                        <ol>
                            {ele.recipe.ingredientLines.map(ingredient => (
                                <li>{ingredient}</li>
                            ))}
                        </ol>
                    </div> */}

             
    </div>
   
  )
}

export default Result