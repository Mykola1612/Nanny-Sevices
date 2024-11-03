import { useEffect, useState } from 'react';
import { LogIn } from '../../components/AuthComponents/LogIn/LogIn';
import { Registration } from '../../components/AuthComponents/Registration/Registration';
import FormWrapper from '../../components/ModalWrapper/ModalWrapper';
import { useForm } from 'react-hook-form';
import sprite from '../../assets/sprite.svg';

const SecondPage = ({
  modalTitle,
  modalText,
  modalRegistrationIsOpen,
  setModalRegistrationIsOpen,
  setModalLogInIsOpen,
  modalLogInIsOpen,
  setModalAppointmentIsOpen,
  modalAppointmentIsOpen,
  setModalTitle,
  setmodalText,
}) => {
  const {
    register,
    // handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  // const onSubmit = (data) => {
  // const { Email, Password } = data;
  // const userData = {
  //   Email,
  //   Password,
  // };
  // console.log(Email);
  // dispatch(signUpThunk(userData));
  // navigate('/nannies');
  //   document.body.classList.remove('overflow-hidden');
  //   setModalRegistrationIsOpen(false);
  //   reset();
  // };

  const [teachers, setTeachers] = useState([]);

  let limitToFirst = 3;

  const oon = () => {
    fetch(
      `https://nanny-sevices-default-rtdb.europe-west1.firebasedatabase.app/teachers.json?orderBy="$key"&limitToFirst=${limitToFirst}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }

        return response.json(); // если ожидаем JSON-ответ
      })
      .then((data) => {
        setTeachers(data);
        console.log(data); // данные с сервера
      })
      .catch((error) => {
        console.error('Ошибка запроса:', error);
      });
  };

  useEffect(() => {
    oon();
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <LogIn
        modalLogInIsOpen={modalLogInIsOpen}
        setModalLogInIsOpen={setModalLogInIsOpen}
        modalText={modalText}
        modalTitle={modalTitle}
      />

      <Registration
        modalRegistrationIsOpen={modalRegistrationIsOpen}
        setModalRegistrationIsOpen={setModalRegistrationIsOpen}
        modalText={modalText}
        modalTitle={modalTitle}
      />
      <section className="container teachers_section">
        <ul>
          {teachers.length !== 0 &&
            teachers.map((teacher, index) => (
              <li key={index} className="teacher_item">
                <div className="teacher_item__avatar___container">
                  <div className="teacher_item__avatar___active____position">
                    <img
                      className="teacher_item__avatar"
                      src={teacher.avatar_url}
                      alt={teacher.name}
                    />
                    <svg className="teacher_icon__active">
                      <use href={`${sprite}#icon-active`} />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="teacher_attention__information">
                    <div>
                      <h2 className="teacher_title__item">Nanny</h2>
                      <p className="teacher_name">{teacher.name}</p>
                    </div>
                    <div className="teacher_pricing__info___container">
                      <ul className="teacher_pricing__info">
                        <li className="teacher_pricing__info___flex">
                          <svg className="teacher_icon__map">
                            <use href={`${sprite}#icon-map-pin`} />
                          </svg>
                          <p>{teacher.location}</p>
                        </li>
                        <li className="teacher_pricing__info___flex">
                          <svg width="16px" height="16px">
                            <use href={`${sprite}#icon-star`} />
                          </svg>

                          <p>Rating: {teacher.rating}</p>
                        </li>
                        <li>
                          <p>
                            Price / 1 hour:
                            <span className="teacher_price__box">
                              {teacher.price_per_hour}$
                            </span>
                          </p>
                        </li>
                      </ul>
                      <button className="teacher_add__favorite___button">
                        <svg className="teacher_add__favorite___icon">
                          <use href={`${sprite}#icon-heart`} />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <ul className="details_list">
                    <li className="details_item">
                      <span className="details_label">Age:</span>
                    </li>
                    <li className="details_item">
                      <span className="details_label">Experience:</span>{' '}
                      {teacher.experience}
                    </li>
                    <li className="details_item">
                      <span className="details_label">Kids Age:</span>{' '}
                      {teacher.kids_age}
                    </li>
                    <li className="details_item details_item__characters">
                      <span className="details_label">Characters:</span>
                      <ul key={index} className="teacher_characters__list">
                        {teacher.characters.map((character, index) => (
                          <li key={index} className="teacher_characters__item">
                            {character.charAt(0).toUpperCase() +
                              character.slice(1)}
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li className="details_item">
                      <span className="details_label">Education:</span>{' '}
                      {teacher.education}
                    </li>
                  </ul>
                  <p className="teacher_about__information">{teacher.about}</p>

                  <div
                    className={
                      !isExpanded
                        ? 'comments_section'
                        : 'comments_section__active'
                    }
                  >
                    <ul className="comments">
                      {teacher.reviews !== 0 &&
                        teacher.reviews.map((review, index) => (
                          <li key={index} className="comment_item">
                            <div className="teacher_review">
                              <div className="teacher_review__avatar___container">
                                {
                                  <p className="teacher_review__avatar___text">
                                    {review.reviewer.slice(0, 1)}
                                  </p>
                                }
                              </div>
                              <div className="teacher_review__name_and_rating">
                                <h2 className="teacher_review__name">
                                  {review.reviewer}
                                </h2>
                                <p className="teacher_review__text">
                                  <svg width="16px" height="16px">
                                    <use href={`${sprite}#icon-star`} />
                                  </svg>
                                  {Number(review.rating).toFixed(1)}
                                </p>
                              </div>
                            </div>

                            <p className="teacher_review__comment">
                              {review.comment}
                            </p>
                          </li>
                        ))}
                    </ul>
                    <button
                      onClick={() => {
                        setModalTitle('Make an appointment with a babysitter');
                        setmodalText(
                          'Arranging a meeting with a caregiver for your child is the first step to creating a safe and comfortable environment. Fill out the form below so we can match you with the perfect care partner.'
                        );
                        document.body.classList.add('overflow-hidden');
                        setModalAppointmentIsOpen(true);
                      }}
                    >
                      Make an appointment
                    </button>
                  </div>
                  {!isExpanded ? (
                    <button
                      type="button"
                      onClick={handleReadMore}
                      className="read_more__button"
                    >
                      Read more
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            ))}
        </ul>
        <button>Load more</button>
        <FormWrapper
          isOpen={modalAppointmentIsOpen}
          isClose={() => {
            setModalAppointmentIsOpen(false);
            reset();
          }}
          modalTitle={modalTitle}
          modalText={modalText}
        >
          <form>
            <ul className="form_ul_margin">
              <li className="item_position">
                <input
                  type="email"
                  {...register('Email', { required: 'This is required' })}
                  placeholder="Email"
                  className="input_form__text"
                />
                {/* <p className="pkksadsadc"> {errors.Email?.message}</p> */}
              </li>
              <li>
                <input type="text" placeholder="Father's or mother's name" />
              </li>
              <li>
                <textarea name="comment" id="" placeholder="Comment"></textarea>
              </li>
            </ul>
            <button type="submit" className="submit_button">
              Send
            </button>
          </form>
        </FormWrapper>
      </section>
    </>
  );
};

export default SecondPage;
