import react, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Img from './dustbin.png';
import Imgwritting from './writing.png'
function App() {

  const [transition, setTransition] = useState([]);
  const [debit, setDebit] = useState(0);
  const [credit, setCredit] = useState(0);

  const ALL_EMOJI = {
    "shopping": "👜",
    "food": "🥪",
    "rent": "🎪",
    "entertainment": "🍷",
    "travel": "🚕",
    "other": "🧞‍♂️",
    "education": "📝",
    "gift": "🎁"
  }


  const onLoadTransition = async () => {

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user._id;
    console.log(userId);

    const response = await axios.get(`/api/transition/user/${userId}`)
    const transitionData = response?.data?.data;

    let creditSum = 0;
    let debitSum = 0;

    transitionData.forEach((element) => {
      if (element.type === 'credit') {
        creditSum += element.amount;
      }
      else {
        debitSum += element.amount;
      }
    });

    setCredit(creditSum);
    setDebit(debitSum);

    setTransition(transitionData);
  }
  useEffect(() => {
    onLoadTransition()
  }, []);

  const deleteTransition = async (_id) => {
    const response = await axios.delete(`/api/transition/delete/${_id}`);
    if (response?.data?.success) {
      alert(response?.data?.message)
      onLoadTransition()
    }

  }

  const editButton = async (_id) => {
    window.location.href = `/updateTransition/${_id}`
  }

  return (
    <>


      <div className='cr-dr-container'>
        <h2 className='cr-dr-amount'>Credit : {credit}</h2>
        <h2 className='cr-dr-amount'>Debit : {debit}</h2>
      </div>
      <div className='flex-transtion'>
        {
          transition?.map((transition, i) => {
            const { _id, amount, category, description, type, createdAt } = transition
            const date = new Date(createdAt).toLocaleDateString();
            const time = new Date(createdAt).toLocaleTimeString();

            return (
              <>
                <div >
                  <div className='app-container ' key={i}>


                    <div>
                      <span className={` amount-position margin  ${type === 'credit' ? 'credit-con' : 'debit-con'}`}>  {type === "credit" ? '+' : '-'}{amount}          </span>
                      <span className={`type-container ${type === 'credit' ? 'credit-bg' : 'debit-bg'}`}>        {type === 'credit' ? 'Credited' : 'Debited'}</span>
                    </div>



                    <div className='discription-margin'><span className='description-container margin'>     {description}</span></div>
                    <hr />
                    <div className='flex-date'>
                     <div className=' margin-category'> <span className='category-container'>       {ALL_EMOJI[category]} {category}</span></div>
                      <div className='margin position-date-time responsive-date-time'>
                        <span className='date-container'>Date :         {date},</span>
                        <span className='time-container'>Time :        {time} </span>
                      </div>
                    </div>

                    <span className='delete-btn margin' onClick={() => { deleteTransition(_id) }}>
                      <img src={Img} className='img-con' />
                    </span>

                    <span className='update-img-container' onClick={() => { editButton(_id) }}>
                      <img src={Imgwritting} className='img-con' />
                    </span>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}

export default App;
