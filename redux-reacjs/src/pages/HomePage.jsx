import React from "react";
import { useSelector, useDispatch } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import { addNewHobby, setActiveHobby } from "../actions/hobby";

HomePage.propTypes = {};

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  // const hobbyState = useSelector(state => ({
  //   list: state.hobby.list,
  //   activeId: state.hobby.activeId,
  // }), shallowEqual)

  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };
    dispatch(addNewHobby(newHobby));
  };
  
  const handleHobbyClick = (hobby) => {
    dispatch(setActiveHobby(hobby));
  }

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <button onClick={handleAddHobbyClick}>Random hobby</button>
      {hobbyList.length > 0 && (
        <HobbyList
          hobbyList={hobbyList}
          activeId={activeId}
          onHobbyClick={handleHobbyClick}
        />
      )}
    </div>
  );
}

export default HomePage;
