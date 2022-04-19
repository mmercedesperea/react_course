import PropTypes from "prop-types";

const FirstApp = ({ hello, number = 2, subtitle }) => {
  // you can put a default value in props, if there is no value it will use the default

  const hi = "Hi Everybody";
  // const person = {
  //     name:'Pepe',
  //     age:32
  // }

  return (
    <>
      <h1>{hi}</h1>
      <h2>{hello}</h2>
      <h3>{number}</h3>
      <h4>{subtitle}</h4>
      {/* <pre>{JSON.stringify(person,null,20)}</pre> */}
      <p>Mi fisrt app</p>
    </>
  );
};

FirstApp.propTypes = {
  hello: PropTypes.string.isRequired,
  number: PropTypes.number,
};

// another way to put a default value
FirstApp.defaultProps={
    subtitle: 'How are you?'
}

export default FirstApp;
