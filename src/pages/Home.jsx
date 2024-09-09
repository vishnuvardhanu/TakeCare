import React, { useState } from 'react'
import Search from '../api/search'
import GenderDropdown from '../components/GenderDropdown';
import AgeInput from '../components/AgeInput'
import QueryInput from '../components/QueryInput'
import NameInput from '../components/NameInput';

function Home() {

  const[query,setQuery] = useState("");
  const[result,setResult] = useState("");
  const[name,setName] = useState("");
  const[age,setAge] = useState("");
  const[gender,setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Loading")
    const apikey = process.env.REACT_APP_GEMINI_KEY || 'Key not defined';
    const res = await Search(name, age, gender, query, apikey);
    console.log("received");
    setResult(res);
    console.log(res);
  };

  return (
    <div className='w-[98%] h-[94%] p-5 bg-white rounded overflow-hidden overflow-y-scroll'>
      <h2 className='text-xl text-[#303036] font-semibold'>CHECK YOUR HEALTH</h2>
      

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
        <NameInput name={name} setName={setName} />
        <AgeInput age={age} setAge={setAge} />
        <GenderDropdown selectedGender={gender} setSelectedGender={setGender}/>
        <QueryInput query={query} setQuery={setQuery} />

        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      <div className="p-4">
        {
          result && (
            <>
            <h1 className='text-2xl text-green-700 font-bold border-2 border-b-green-700 border-white'>{result.Heading}</h1>
            <div className='p-2'> 
              <h2 className='font-bold text-lg text-green-700'>Description</h2>
              <p>{result.description}</p>
              {/* Causes */}
              {
                result.causes.length!=0 && (
                  <div>
                    <h2 className='font-bold text-lg text-green-700'>Causes</h2>
                    <ul>
                      {
                        result.causes.map((cause,index)=>{
                          return(
                            <li key={index} className='list-disc list-inside marker:text-green-600 '>{cause}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              }
              {/* Symptoms */}
              {
                result.symptoms.length!=0 && (
                  <div>
                    <h2 className='font-bold text-lg text-green-700'>Symptoms</h2>
                    <ul>
                      {
                        result.symptoms.map((symptom,index)=>{
                          return(
                            <li key={index} className='list-disc list-inside marker:text-green-600 '>{symptom}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              }
              {/* Treatment */}
              {
                result.treatment.length!=0 && (
                  <div>
                    <h2 className='font-bold text-lg text-green-700'>Treatment</h2>
                    <ul>
                      {
                        result.treatment.map((tt,index)=>{
                          return(
                            <li key={index} className='list-disc list-inside marker:text-green-600 '>{tt}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              }
              {/* prevention */}
              {
                result.prevention.length!=0 && (
                  <div>
                    <h2 className='font-bold text-lg text-green-700'>Prevention</h2>
                    <ul>
                      {
                        result.prevention.map((tt,index)=>{
                          return(
                            <li key={index} className='list-disc list-inside marker:text-green-600 '>{tt}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              }
              {/* Diet */}
              {
                result.Diet.length!=0 && (
                  <div>
                    <h2 className='font-bold text-lg text-green-700'>Diet</h2>
                    <ul>
                      {
                        result.Diet.map((tt,index)=>{
                          return(
                            <li key={index} className='list-disc list-inside marker:text-green-600 '>{tt}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              }
              {/* related_conditions */}
              {
                result.related_conditions.length!=0 && (
                  <div>
                    <h2 className='font-bold text-lg text-green-700'>Related Conditions</h2>
                    <ul>
                      {
                        result.related_conditions.map((tt,index)=>{
                          return(
                            <li key={index} className='list-disc list-inside marker:text-green-600 '>{tt}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              }
              {/* examples */}
              {
                result.examples.length!=0 && (
                  <div>
                    <h2 className='font-bold text-lg text-green-700'>Examples</h2>
                    <ul>
                      {
                        result.examples.map((tt,index)=>{
                          return(
                            <li key={index} className='list-disc list-inside marker:text-green-600 '>{tt}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
                )
              }
            </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Home